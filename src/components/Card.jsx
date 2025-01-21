import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import ProductContext from "../store/ProductProvider";

function Card() {
  const { product } = useContext(ProductContext);

  // State to track the hovered card
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  // Handle hover events
  const handleMouseEnter = (index) => setHoveredCardIndex(index);
  const handleMouseLeave = () => setHoveredCardIndex(null);

  return (
    <div className="">
      <div className="row align-items-center p-0" style={{ marginTop: 50 }}>
        <div className="col-12 col-lg-3">
          <h1 className="mb-0">Our Products</h1>
        </div>
        <div className="col-12 col-lg-9">
          <hr style={{ border: "1px dashed grey" }} />
        </div>
      </div>

      <div className="row m-0 py-4">
        
        {product.map((e, i) => (
          <div className="col-12 col-md-4 col-lg-3 my-3" key={i}>
            <div
              className={`card rounded-0 ${
                hoveredCardIndex === i ? "focused" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                style={{ height: 280 }}
                className="w-100 bg-black position-relative overflow-hidden "
              >
                {/* Buttons that appear on hover */}
                <div
                  className={`position-absolute top-50 start-50 translate-middle w-100 text-center ${
                    hoveredCardIndex === i
                      ? "opacity-1 z-3"
                      : "opacity-0"
                  }`}
                >
                  <button className="btn btn-light mx-1">A</button>
                  <button className="btn btn-light mx-1">H</button>
                  <button className="btn btn-light mx-1">V</button>
                </div>
                {/* Image with hover effect */}
                <img
                  src={e.image}
                  alt=""
                  className={`w-100 h-100 object-fit-cover ${
                    hoveredCardIndex === i ? "scale z-1 brightNess transition" : "transition"
                  }`}
                />
              </div>
              {/* Card body */}
              <div className="card-body text-center font-poppins">
                <NavLink className="hover-blue text-black text-decoration-none fs-5 text-limit">
                 {e.name}
                </NavLink>
                <p className="m-0">${e.price.toFixed(2)}</p>
                <p className="">
                  <span className="text-warning fw-bold">{e.rating} </span>Rating
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
