import { NextResponse} from "next/server";
import connect from "@/app/lib/db";
import toast from "react-hot-toast";

export  async function GET() {
  try {
    const { db } = await connect();
    const courses = db.collection("course");

    const data = await courses.find({}).toArray();
    if (data) {
      return NextResponse.json({ status: "success", data }, { status: 200 });
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error("error fetching course:", error)
      toast(error.message);
    } else {
      toast("an unknow error has occured while fetching course!");
    }
  }
}
