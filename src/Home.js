import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg"
        />
        <div className="home_row">
          <Product
            id={24589325}
            title="The lean startup"
            price={29.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            }
            rating={5}
          />
          <Product
            id={875489}
            title="Kenwood Kmix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={240}
            rating={4}
            image={
              "https://m.media-amazon.com/images/I/711flZUJCcL._AC_UY327_FMwebp_QL65_.jpg"
            }
          />
        </div>

        <div className="home_row">
          <Product
            id={4903850}
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE7Jgzy3jiSlsW5d169MQuApzbcOybdzYlwg&s"
            }
          />
          <Product
            id={845239}
            title="Amazon Echo (3rd generation) | Smart Speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image={
              "https://images-cdn.ubuy.qa/666691cfc898d96d035edb62-amazon-echo-3rd-gen-smart-speaker.jpg"
            }
          />
          <Product
            id={8796522}
            title="New Apple iPad Pro (12.9-inch, WiFi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image={
              "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111977_ipad-pro-12-2020.jpeg"
            }
          />
        </div>

        <div className="home_row">
          <Product
            id={90899232}
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image={
              "https://m.media-amazon.com/images/I/614LJ44ZpzL._AC_SY450_.jpg"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
