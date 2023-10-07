import { Container, Row, Col } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList title="Category List"/>
          </Col>
          <Col xs="9">
            <ProductList title="Product List"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
