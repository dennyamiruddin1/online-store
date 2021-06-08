import React from "react";

import { ListGroup } from "react-bootstrap";

const ItemList = (props) => {
  const filteredList = props.products.filter((item) =>
    item.label.toLowerCase().includes(props.searchInput.toLowerCase())
  );

  const listGroupHandler = (event) => {
    console.log(event.target.value);
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
            value={item.id}
          >
            {item.label}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default ItemList;
