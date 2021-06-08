import React, { Fragment, useState } from "react";

import ItemList from "./ItemList";

import { InputGroup, FormControl, Row } from "react-bootstrap";
import { search_icon } from "../../../icon";

const Search = (props) => {
  const [showList, setShowList] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const searchOnChangeHandler = (event) => {
    if (event.target.value === "") {
      setShowList(false);
    } else {
      setShowList(true);
    }
    setSearchInput(event.target.value);
  };

  return (
    <Fragment>
      <div className="mb-3">
        <Row>
          <InputGroup>
            <InputGroup.Text aria-controls="products" id="basic-addon1">
              {search_icon}
            </InputGroup.Text>
            <FormControl
              placeholder="Cari barang disini"
              aria-label="Cari barang disini"
              aria-describedby="basic-addon1"
              onChange={searchOnChangeHandler}
              value={searchInput}
            />
          </InputGroup>
        </Row>
        {showList && (
          <Row className="position-relative">
            <ItemList products={props.products} searchInput={searchInput} />
          </Row>
        )}
      </div>
    </Fragment>
  );
};

export default Search;
