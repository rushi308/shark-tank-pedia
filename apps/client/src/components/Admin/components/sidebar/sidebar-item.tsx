import { Text, Link } from "@nextui-org/react";
import React from "react";
import { useSidebarContext } from "../../adminlayout/layout-context";
import { Flex } from "../../styles/flex";

interface Props {
  title: string;
  icon: React.ReactNode;
  isActive?: boolean;
  href?: string;
}

export const SidebarItem = ({ icon, title, isActive, href = "" }: Props) => {
  const { setCollapsed } = useSidebarContext();

  const handleClick = () => {
    if (window.innerWidth < 768) {
      setCollapsed();
    }
  };
  return (
    <Link
      css={{
        color: "$accents9",
        maxWidth: "100%",
        width: "100%",
      }}
      href={href}
    >
      <Flex
        onClick={handleClick}
        css={{
          gap: "$6",
          width: "100%",
          minHeight: "44px",
          height: "100%",
          alignItems: "center",
          px: "$7",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "all 0.15s ease",
          "&:active": {
            transform: "scale(0.98)",
          },
          ...(isActive
            ? {
                bg: "$blue200",
                "& svg path": {
                  fill: "$blue600",
                },
              }
            : { "&:hover": { bg: "$accents2" } }),
        }}
        align={"center"}
      >
        {icon}
        <Text
          span
          weight={"normal"}
          size={"$base"}
          css={{
            color: "$accents9",
          }}
        >
          {title}
        </Text>
      </Flex>
    </Link>
  );
};
