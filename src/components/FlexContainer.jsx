import React, { useReducer } from 'react';
import { Row, Col } from 'react-bootstrap';
import AppReducer from './AppReducer';

function FlexContainer({ element: Element, data }) {
    const [items, dispatch] = useReducer(AppReducer, data);
  return (
    <Row className="g-5">
      {items.map((item) => (
        <Col key={item.id} xs={12} sm={6} md={4} lg={4}>
          <Element {...item} dispatch={dispatch} />
        </Col>
      ))}
    </Row>
  );
};

export default FlexContainer;