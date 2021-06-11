import React from "react";
import { Link } from "react-router-dom";

import { ListGroup } from "react-bootstrap";

const ItemList = (props) => {
  const filteredList = props.products.filter((item) =>
    item.label.toLowerCase().includes(props.searchInput.toLowerCase())
  );

  const listGroupHandler = () => {
    props.onSelectProductHandler();
  };

  return (
    <div
      className="w-100 p-3"
      style={{ position: "absolute", top: 0, zIndex: 10 }}
    >
      <ListGroup variant="flush">
        {filteredList.map((item) => (
          <ListGroup.Item
            key={item.id}
            onClick={listGroupHandler}
            action
            as={Link}
            to={`/product/${item.id}`}
          >
            {item.label}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default ItemList;
