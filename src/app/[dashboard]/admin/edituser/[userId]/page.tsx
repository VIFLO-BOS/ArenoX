import React from "react";
import Edit_user_form from "@/component/_Arenox_dashboard_component/admin_edit_user_component/page";

export default async function userId({
  params,
}: {
  params: Promise<{ dashboard: string; userId: string }>;
}) {
  // 1. Await the params promise
  const resolvedParams = await params;
  // 2. Extract the userId from the params
  const userId = resolvedParams.userId;
  console.log("userId:- ", userId, " from EditUser");

  return (
    <div>
      <Edit_user_form userId={userId} />
    </div>
  );
}
