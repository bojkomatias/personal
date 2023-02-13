import AdminSidebar from "./Sidebar";
import SignIn from "./SignIn";
import { Container, Heading } from "@ui/Container";
import { getRecord, getRecords, getSession } from "@api/_server";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pb_auth = await getSession();
  if (!pb_auth) {
    return <SignIn />;
  }
  const { token, model } = JSON.parse(pb_auth);

  return (
    <>
      <AdminSidebar user={model} />
      <Container>
        <div className="h-screen">{children}</div>
      </Container>
    </>
  );
}
