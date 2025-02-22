import React, { useContext, useState } from "react";
import { GiReturnArrow } from "react-icons/gi";
import { IoCar } from "react-icons/io5";
import { LuAlarmClock } from "react-icons/lu";
import { TiTick } from "react-icons/ti";
import SwiperSlideEffect from "../components/SwiperSlideEffect";
import ProductContext from "../store/ProductProvider";
import Card from "../components/Card";

function Home() {
  const {product} = useContext(ProductContext);
  // const [categry,setCategory] = useState([]);

  return (
    <div className="container-fluid p-0">
      <div className="container p-0">
        {/* hero */}
        <div className="row m-0 justify-content-between">
          <div
            style={{ height: 500 }}
            className="col-lg-8 p-0 py-lg-4 pe-lg-4 overflow-hidden"
          >
            <div className="w-100 h-100">
              <SwiperSlideEffect />
            </div>
          </div>
          <div
            style={{ height: 500 }}
            className="col-lg-4 p-0 py-lg-4 overflow-hidden"
          >
            <div className="col-12 h-50 pb-2 position-relative overflow-hidden">
              <div className="position-absolute z-3 top-50 start-50 translate-middle text-light text-center font-poppins">
                <p className="fs-6 m-0">save 80%</p>
                <h4 className="m-0 fw-meduim">Specail offer</h4>
                <button className="btn btn-outline-light rounded-0 px-4 mt-3">
                  Shop Now
                </button>
              </div>
              <img
                style={{ filter: "brightness(50%)" }}
                src="https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309643.jpg"
                alt=""
                className="w-100 h-100 object-fit-cover transition hover-scale"
              />
            </div>
            <div className="col-12 h-50 pt-2 position-relative overflow-hidden">
              <div className="position-absolute z-3 top-50 start-50 translate-middle text-light text-center font-poppins ">
                <p className="fs-6 m-0">save 80%</p>
                <h4 className="m-0 fw-meduim">Specail offer</h4>
                <button className="btn btn-outline-light rounded-0 px-4 mt-3">
                  Shop Now
                </button>
              </div>
              <img
                style={{ filter: "brightness(50%)" }}
                src="https://img.freepik.com/free-photo/workplace-business-modern-male-accessories-laptop-white_155003-1722.jpg?semt=ais_hybrid"
                alt=""
                className="w-100 h-100 object-fit-cover transition hover-scale"
              />
            </div>
          </div>
        </div>

        {/* service */}
        <div className="row py-4 py-lg-0 g-3  font-poppins m-0">
          <div className="col-12 col-md-6 col-lg-3 px-3 ps-lg-0 py-lg-3 pe-lg-3">
            <div className="d-flex align-items-center justify-content-center shadow py-4 px-2">
              <TiTick style={{ fontSize: "60px" }} className="text-blue-700" />
              <h1 className="fs-4 ms-2 mb-0">Quality Product</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 px-3 ps-lg-0 py-lg-3 pe-lg-3">
            <div className="d-flex align-items-center justify-content-center shadow py-4 px-2">
              <IoCar style={{ fontSize: "60px" }} className="text-blue-700" />
              <h1 className="fs-4 ms-2 mb-0">Fast Delievery</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 px-3 ps-lg-0 py-lg-3 pe-lg-3">
            <div className="d-flex align-items-center justify-content-center shadow py-4 px-2">
              <GiReturnArrow
                style={{ fontSize: "60px" }}
                className="text-blue-700"
              />
              <h1 className="fs-4 ms-2 mb-0">14-Day Return</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 px-3 ps-lg-0 py-lg-3 pe-lg-0">
            <div className="d-flex align-items-center justify-content-center shadow py-4 px-2">
              <LuAlarmClock
                style={{ fontSize: "60px" }}
                className="text-blue-700"
              />
              <h1 className="fs-4 ms-2 mb-0">24 / Support</h1>
            </div>
          </div>
        </div>

        {/* categories */}   
        <div className="row align-items-center p-0" style={{marginTop:50}}>
            <div className="col-12 col-lg-3">
              <h1 className="mb-0">Categories</h1>
            </div>
            <div className="col-12 col-lg-9">
              <hr style={{border:'1px dashed grey'}}/>
            </div>
        </div>
        
        <div className="row justify-content-center m-0 py-4 py-lg-0 g-3 font-poppins">         
          <div className="col-12 col-md-6 col-lg-3 px-3 ps-lg-0 py-lg-3 pe-lg-3">
            <div className="d-flex align-items-center justify-content-between shadow bg-hover transition">
              <div className="col-4 bg-success overflow-hidden" style={{height:100}}>
                <img src="https://thumbs.dreamstime.com/b/woman-working-her-loptop-morning-having-coffee-next-to-her-cell-phone-woman-working-her-loptop-298343204.jpg" alt="" className="w-100 h-100 object-fit-cover hover-scale transition"/>
              </div>
              <div className="col-8 ps-2">
                <h1 className="fs-6 ">Category Name</h1>
                <p className="m-0 ">100 products</p>
              </div>
            </div> 
          </div>
          <div className="col-12 col-md-6 col-lg-3 px-3 ps-lg-0 py-lg-3 pe-lg-3">
            <div className="d-flex align-items-center justify-content-between shadow bg-hover transition">
              <div className="col-4 bg-success overflow-hidden" style={{height:100}}>
                <img src="https://thumbs.dreamstime.com/b/woman-working-her-loptop-morning-having-coffee-next-to-her-cell-phone-woman-working-her-loptop-298343204.jpg" alt="" className="w-100 h-100 object-fit-cover hover-scale transition"/>
              </div>
              <div className="col-8 ps-2">
                <h1 className="fs-6 ">Category Name</h1>
                <p className="m-0 ">100 products</p>
              </div>
            </div> 
          </div>
          <div className="col-12 col-md-6 col-lg-3 px-3 ps-lg-0 py-lg-3 pe-lg-3">
            <div className="d-flex align-items-center justify-content-between shadow bg-hover transition">
              <div className="col-4 bg-success overflow-hidden" style={{height:100}}>
                <img src="https://thumbs.dreamstime.com/b/woman-working-her-loptop-morning-having-coffee-next-to-her-cell-phone-woman-working-her-loptop-298343204.jpg" alt="" className="w-100 h-100 object-fit-cover hover-scale transition"/>
              </div>
              <div className="col-8 ps-2">
                <h1 className="fs-6 ">Category Name</h1>
                <p className="m-0 ">100 products</p>
              </div>
            </div> 
          </div>
          <div className="col-12 col-md-6 col-lg-3 px-3 ps-lg-0 py-lg-3 px-lg-0">
            <div className="d-flex align-items-center justify-content-between shadow bg-hover transition">
              <div className="col-4 bg-success overflow-hidden" style={{height:100}}>
                <img src="https://thumbs.dreamstime.com/b/woman-working-her-loptop-morning-having-coffee-next-to-her-cell-phone-woman-working-her-loptop-298343204.jpg" alt="" className="w-100 h-100 object-fit-cover hover-scale transition"/>
              </div>
              <div className="col-8 ps-2">
                <h1 className="fs-6 ">Category Name</h1>
                <p className="m-0 ">100 products</p>
              </div>
            </div> 
          </div>      
        </div>

        <Card/>
      </div>
    </div>
  );
}

export default Home;
