import { AdminLayout } from "@/components/Admin/adminlayout/AdminLayout";
import { CreateProduct } from "@/components/Admin/products/createProduct";

export default function ProductManagePage() {
  return (
    <AdminLayout>
      <CreateProduct />
    </AdminLayout>
  );
}
