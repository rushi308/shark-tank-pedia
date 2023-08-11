import withAuthenticationRequired from "@/components/Admin/adminlayout/AdminAuthenticator";
import { AdminLayout } from "@/components/Admin/adminlayout/AdminLayout";
import { CreateProduct } from "@/components/Admin/containers/products/createProduct";

export default withAuthenticationRequired(function CreateProductPage() {
  return (
    <AdminLayout>
      <CreateProduct />
    </AdminLayout>
  );
});
