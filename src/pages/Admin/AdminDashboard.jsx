import AdminLayout from "../../components/Admin components/AdminLayout";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return <div>
    <AdminLayout>
        <Outlet />
        <h1>Dashboard</h1>
    </AdminLayout>
  </div>;
};

export default AdminDashboard;
