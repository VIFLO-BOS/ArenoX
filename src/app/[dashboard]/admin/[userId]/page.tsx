import React from "react";
import View_user from "@/component/_Arenox_dashboard_component/admin_user_view_component/page";

export default async function userId({
  params,
}: {
  params: Promise<{ dashboard: string; userId: string }>;
}) {
  // 1. Await the params promise
  const resolvedParams = await params;
  // 2. Extract the string value from the object
  const Id = resolvedParams.userId;
  // console.log(Id);
  
  return (
    <div>
      <View_user userId={Id} />
    </div>
    );
}