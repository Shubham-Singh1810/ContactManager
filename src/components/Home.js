import React from "react";
import dairy from "../image/images.png";
import animation from "../image/animation.webp"
export default function Home() {
  return (
    <div>
      <div className="Home" id="Home">
        <div className=" homeLeft">
          <h3>
           <b>"Contact management"</b> is the process of storing and tracking data on
            customers and leads. In addition to providing quick access to
            customer data, investing in contact management can help you grow and
            diversify your customer base.
          </h3>
          <img src={animation} className="animation" alt="" />
        </div>
        <div className=" homeRight">
          <img src={dairy}  alt="" />
        </div>
      </div>
    </div>
  );
}
