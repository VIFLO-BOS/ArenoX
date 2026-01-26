import Edit_course_form from "@/component/_Arenox_dashboard_component/admin_edit_course_component/page";

export default async function courseId({
  params,
}: {
  params: Promise<{ dashboard: string; courseId: string }>;
}) {
  const ResolvedcourseId = await params;
  const id = ResolvedcourseId.courseId;
  return (
    <div>
      <Edit_course_form courseId={id} />
    </div>
  );
}
