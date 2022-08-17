import AdminLayout from '../../layout/AdminLayout'
// import HeaderForAdmin from '../../layout/HeaderForAdmin'
import AdminRoutes from '../../routes/admin-routes/AdminRoutes'

const AdminPage = () => {
   return (
      <AdminLayout>
         <AdminRoutes />
      </AdminLayout>
   )
}

export default AdminPage
