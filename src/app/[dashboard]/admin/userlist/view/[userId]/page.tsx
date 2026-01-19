import View_user from "@/component/_Arenox_dashboard_component/admin_user_view_component/page";

export default async function UserId({
  params,
}: {
  params: Promise<{ dashboard: string; userId: string }>;
}) {
  const resolvedParams = await params;
  const id = resolvedParams.userId;

  return (
    <div>
      <View_user userId={id} />
    </div>
  );
}
