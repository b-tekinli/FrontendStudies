/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import "./App.css";
import React from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  state={currentCategory:""}

  changeCategory = (category) => {
    this.setState({
      currentCategory: category.categoryName
    });
  };

  render() {
    let categoryInfo = { title: "CategoryList" };
    let productInfo = { title: "ProductList" };
    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
            </Col>
            <Col xs="9">
              <ProductList currentCategory={this.state.currentCategory} info={productInfo} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}