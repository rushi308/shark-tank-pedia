import React from "react";
import { Box } from "../../styles/box";
import { Sidebar } from "./sidebar.styles";
import { Flex } from "../../styles/flex";
import { CompaniesDropdown } from "./companies-dropdown";
import { HomeIcon } from "../../icons/sidebar/home-icon";
import { ProductsIcon } from "../../icons/sidebar/products-icon";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { useSidebarContext } from "../../adminlayout/layout-context";
import { useRouter } from "next/router";

export const SidebarWrapper = () => {
  const router = useRouter();
  const { collapsed, setCollapsed } = useSidebarContext();

  return (
    <Box
      as="aside"
      css={{
        height: "100vh",
        zIndex: 202,
        position: "sticky",
        top: "0",
      }}
    >
      {collapsed ? <Sidebar.Overlay onClick={setCollapsed} /> : null}

      <Sidebar collapsed={collapsed}>
        <Sidebar.Header>
          <CompaniesDropdown />
        </Sidebar.Header>
        <Flex direction={"column"} justify={"between"} css={{ height: "100%" }}>
          <Sidebar.Body className="body sidebar">
            <SidebarMenu title="Main Menu">
              <SidebarItem
                title="Home"
                icon={<HomeIcon />}
                isActive={router.pathname === "/admin"}
                href="/admin"
              />
              <SidebarItem
                title="Products"
                icon={<ProductsIcon />}
                isActive={router.pathname === "/admin/products"}
                href="/admin/products"
              />
            </SidebarMenu>
          </Sidebar.Body>
          {/* <Sidebar.Footer>
            <Tooltip content={"Settings"} rounded color="primary">
              <SettingsIcon />
            </Tooltip>
            <Tooltip content={"Adjustments"} rounded color="primary">
              <FilterIcon />
            </Tooltip>
            <Tooltip content={"Profile"} rounded color="primary">
              <Avatar
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                size={"sm"}
              />
            </Tooltip>
          </Sidebar.Footer> */}
        </Flex>
      </Sidebar>
    </Box>
  );
};
