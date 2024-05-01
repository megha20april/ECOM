import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
class BootstrapCarouselComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid" style={{padding:'0'}}>
          <div className="row">
            <div className="col-sm-12"></div>
          </div>
          <div className="row">
            <div className="col-12" style={{height:"200px"}}>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/6a7ad77a33f5f866.jpg?q=50"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/693ffb3d86ae9108.jpeg?q=50"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/7aa9ebb51e2e9e9a.jpeg?q=50"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BootstrapCarouselComponent;
