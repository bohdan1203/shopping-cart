import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import StoreItem from "../components/StoreItem";

import storeItems from "../data/items.json";

const Store = () => {
  return (
    <Fragment>
      <h1>Store</h1>
      <Row className="g-3" md={2} xs={1} lg={3}>
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </Fragment>
  );
};

export default Store;
