import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import AppContext from "../data/AppContext";

function FlexContainer({ element: Element }) {

  const { items, dispatch } = useContext(AppContext);
  console.log(items);
  return (
    <Row className="g-5">
      {(items || []).map((item) => (
        <Col key={item.id} xs={12} sm={6} md={4} lg={4}>
          <Element {...item} dispatch={dispatch} />
        </Col>
      ))}
    </Row>
  );
}

export default FlexContainer;
