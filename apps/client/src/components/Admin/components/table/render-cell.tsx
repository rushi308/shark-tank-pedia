import { Col, Row, User, Tooltip } from "@nextui-org/react";
import React from "react";
import { DeleteIcon } from "../../icons/table/delete-icon";
import { EditIcon } from "../../icons/table/edit-icon";
import { IconButton, StyledBadge } from "./table.styled";
import { Product } from "sharktankpedia-schema";

interface Props {
  item: Product;
  columnKey: string | React.Key;
}

export const RenderCell = ({ item, columnKey }: Props) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const cellValue = item[columnKey];
  switch (columnKey) {
    case "title":
      return (
        <User
          squared
          src={item.productImage}
          name={item.companyName}
          css={{ p: 0 }}
        >
          {cellValue}
        </User>
      );

    case "featured":
      return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <StyledBadge type={String(item.featured)}>
          {item.featured ? "Yes" : "No"}
        </StyledBadge>
      );

    case "actions":
      return (
        <Row
          justify="center"
          align="center"
          css={{ gap: "$8", "@md": { gap: 0 } }}
        >
          <Col css={{ d: "flex" }}>
            <Tooltip content="Edit Product">
              <IconButton onClick={() => console.log("Edit Product", item.id)}>
                <EditIcon size={20} fill="#979797" />
              </IconButton>
            </Tooltip>
          </Col>
          <Col css={{ d: "flex" }}>
            <Tooltip
              content="Delete Product"
              color="error"
              onClick={() => console.log("Delete Product", item.id)}
            >
              <IconButton>
                <DeleteIcon size={20} fill="#FF0080" />
              </IconButton>
            </Tooltip>
          </Col>
        </Row>
      );
    default:
      return cellValue;
  }
};
