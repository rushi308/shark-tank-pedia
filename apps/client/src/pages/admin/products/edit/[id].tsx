import withAuthenticationRequired from "@/components/Admin/adminlayout/AdminAuthenticator";
import { AdminLayout } from "@/components/Admin/adminlayout/AdminLayout";
import EditProduct from "@/components/Admin/containers/products/editProduct";

export default withAuthenticationRequired(function EditProductPage() {
  return (
    <AdminLayout>
      <EditProduct />
    </AdminLayout>
  );
});
