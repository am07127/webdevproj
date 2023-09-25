import React from "react";
import MenuItem from "../Components/card"; // Import your MenuItem component
import ShoppingCart from "../Components/shoppingcart";

const MainMenu = () => {
  // Define an array of menu items
  const menuItems = [
    {
      name: "Item 1",
      description: "Description for Item 1",
      price: 10.99,
      imageUrl:
        "https://hungryforever.net/wp-content/uploads/2016/04/Fried-Chicken-Featured-1000x600.jpg",
    },
    {
      name: "Item 2",
      description: "Description for Item 2",
      price: 12.99,
      imageUrl:
        "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8ff907b7-c498-4802-965a-06dfee6ec6ff-retina-large.png",
    },
    {
      name: "Item 3",
      description: "Description for Item 3",
      price: 8.99,
      imageUrl:
        "https://www.mashed.com/img/gallery/better-call-saul-inspired-los-pollos-hermanos-chicken-recipe/l-intro-1685627299.jpg",
    },
    {
      name: "Item 4",
      description: "Description for Item 4",
      price: 15.99,
      imageUrl: "https://media.timeout.com/images/105541804/image.jpg",
    },
    {
      name: "Item 5",
      description: "Description for Item 5",
      price: 18.99,
      imageUrl: "https://i.ytimg.com/vi/Ysshkgj2XHo/maxresdefault.jpg",
    },
    {
      name: "Item 6",
      description: "Description for Item 6",
      price: 14.99,
      imageUrl:
        "https://offloadmedia.feverup.com/secretnyc.co/wp-content/uploads/2018/08/15133537/LOS-POLLOS-HERMANOS.jpg",
    },
    // Add more menu items as needed
  ];

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-12">
          <div className="row">
            {menuItems.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-4 col-sm-6">
                {/* Map each menu item to a MenuItem component */}
                <MenuItem
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  imageUrl={item.imageUrl}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
