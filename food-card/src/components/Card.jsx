import { Component } from "react";
import "../components/main.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.png";

class Card extends Component {
  render() {
    let { images, name, oldPrice, newPrice, description } = this.props;
    return (
      <div className="container">
        <div>
          <img src={images} />
          <h4>name:{name}</h4>
          <h5>newPrice: {newPrice}</h5><span>oldPrice: {oldPrice}</span>
          <p>description: {description}</p>
        </div>

        {/* <div>
                <img src={img2} />
                <h4>Salad</h4>
                <h5>250 Birr</h5> <span>300 Birr</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, sapiente.</p>
            </div>

            <div>
                <img src={img3} />
                <h4>Pizza</h4>
                <h5>200 Birr</h5> <span>250 Birr</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, sapiente.</p>
            </div> */}
      </div>
    );
  }
}
export default Card;
