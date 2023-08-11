import { AdminLayout } from "@/components/Admin/adminlayout/AdminLayout";
import React from "react";

import withAuthenticationRequired from "@/components/Admin/adminlayout/AdminAuthenticator";

export default withAuthenticationRequired(function Admin() {
  return (
    <>
      <AdminLayout>
        <h1>Admin Home</h1>
      </AdminLayout>
    </>
  );
});
