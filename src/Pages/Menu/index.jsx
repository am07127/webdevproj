import React from "react";
import MenuItem from "../../Components/card"; // Import your MenuItem component
import ShoppingCart from "../../Components/shoppingcart";

const index = () => {
  // Define an array of menu items
  const menuItems = [
    {
      name: "Crispy Chicken",
      description: "With a side of fries",
      price: 10.99,
      imageUrl:
        "https://hungryforever.net/wp-content/uploads/2016/04/Fried-Chicken-Featured-1000x600.jpg",
      quantity:1
    },
    {
      name: "Candy Bites",
      description: "Grilled to perfection",
      price: 12.99,
      imageUrl:
        "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8ff907b7-c498-4802-965a-06dfee6ec6ff-retina-large.png",
      quantity:1
    },
    {
      name: "Nashville Hot Chicken",
      description: "Spicy and delicious",
      price: 8.99,
      imageUrl:
        "https://www.mashed.com/img/gallery/better-call-saul-inspired-los-pollos-hermanos-chicken-recipe/l-intro-1685627299.jpg",
      quantity:1
    },
    {
      name: "Mushroom Melt",
      description: "Swiss cheese and mushrooms",
      price: 15.99,
      imageUrl: "https://media.timeout.com/images/105541804/image.jpg",
      quantity:1
    },
    {
      name: "Teriyaki Chicken",
      description: "Grilled to perfection",
      price: 18.99,
      imageUrl: "https://i.ytimg.com/vi/Ysshkgj2XHo/maxresdefault.jpg",
      quantity:1
    },
    {
      name: "Maryland Crab Cakes",
      description: "With a side of fries",
      price: 14.99,
      imageUrl:
        "https://offloadmedia.feverup.com/secretnyc.co/wp-content/uploads/2018/08/15133537/LOS-POLLOS-HERMANOS.jpg",
      quantity:1
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
                  key = {item.name}
                  item = {item}
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

export default index;
