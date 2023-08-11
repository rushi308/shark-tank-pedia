import withAuthenticationRequired from "@/components/Admin/adminlayout/AdminAuthenticator";
import { AdminLayout } from "@/components/Admin/adminlayout/AdminLayout";
import { Products } from "@/components/Admin/containers/products";

export default withAuthenticationRequired(function ProductsPage() {
  return (
    <AdminLayout>
      <Products />
    </AdminLayout>
  );
});
