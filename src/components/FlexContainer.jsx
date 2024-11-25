import React, { useReducer } from "react";
import { Row, Col } from "react-bootstrap";
import AppReducer from "../data/AppReducer";

function FlexContainer({ element: Element, data }) {
  const initialState = {
    profiles: data || [],
  };

  const [items, dispatch] = useReducer(AppReducer, initialState);
  console.log("Aktualny stan:", items);

  return (
    <Row className="g-5">
      {(items.profiles || []).map((item) => (
        <Col key={item.id} xs={12} sm={6} md={4} lg={4}>
          <Element {...item} items={items.profiles} dispatch={dispatch} />
        </Col>
      ))}
    </Row>
  );
}

export default FlexContainer;
