import { AdminLayout } from "@/components/Admin/adminlayout/AdminLayout";
import { Products } from "@/components/Admin/containers/products";

export default function ProductsPage() {
  return (
    <AdminLayout>
      <Products />
    </AdminLayout>
  );
}
