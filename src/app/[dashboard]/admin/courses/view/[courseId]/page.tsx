import View_course from "@/component/_Arenox_dashboard_component/admin_course_view_component/page";

export default async function courseId({
  params,
}: {
  params: Promise<{ dashboard: string; courseId: string }>;
}) {
  // 1. Await the params promise
  const resolvedParams = await params;
  // 2. Extract the string value from the object    
  const Id = resolvedParams.courseId;
  // console.log(Id);

  return (
    <div>
      <View_course courseId={Id} />
    </div>
  );
}
