import AdminPage from "@/components/admin/adminPage";
import { turso } from "@/lib/turso";

export default async function AdminHome() {
  const eventSet = await turso.execute("SELECT * FROM Events");
  // const postSet = await turso.execute("SELECT * FROM Posts");

  const eventRows = JSON.parse(JSON.stringify(eventSet.rows));
  // const postRows = JSON.parse(JSON.stringify(postSet.rows));

  return (
    <main>
      <AdminPage events={eventRows}/>
    </main>
  );
}
