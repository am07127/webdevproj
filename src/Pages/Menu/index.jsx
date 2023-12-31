import React from "react";
import MenuItem from "../../Components/card"; // Import your MenuItem component
//import ShoppingCart from "../../Components/shoppingcart";
import foodContext from "../../foodcontext/foodContext";
import { useContext } from "react";

const Index = () => {
  // Define an array of menu items
  const context = useContext(foodContext);
  const { food } = context;

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
  
  const barbecueMenuItems = [
    {
      name: "BBQ Ribs",
      description: "Slow-cooked and glazed with barbecue sauce",
      price: 16.99,
      imageUrl:
        "https://www.grillseeker.com/wp-content/uploads/2022/06/sauced-pork-ribs-on-a-baoking-sheet.jpg",
      quantity: 1,
    },
    {
      name: "Grilled BBQ Chicken",
      description: "Juicy chicken grilled with tangy barbecue marinade",
      price: 14.99,
      imageUrl:
        "https://www.onceuponachef.com/images/2022/06/baby-back-ribs-18.jpg",
      quantity: 1,
    },
    {
      name: "Pulled Pork Sandwich",
      description: "Tender pulled pork topped with coleslaw",
      price: 12.99,
      imageUrl:
        "https://tatyanaseverydayfood.com/wp-content/uploads/2016/03/Asian-Pulled-Pork-Sandwiches.jpg",
      quantity: 1,
    },
    {
      name: "Smoked Brisket",
      description: "Slow-smoked brisket served with barbecue sauce",
      price: 19.99,
      imageUrl:
        "data:image/jpeg;base64,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",
      quantity: 1,
    },
    {
      name: "BBQ Shrimp Skewers",
      description: "Grilled shrimp glazed with smoky barbecue sauce",
      price: 22.99,
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/5babd6a3ebfc7f1d5fd228d5/1565718585976-IO42B9HLFLFE8AP98ERK/Grilled+Shrimp+skewers+recipe",
      quantity: 1,
    },
    {
      name: "BBQ Veggie Platter",
      description: "Grilled vegetables marinated in barbecue seasoning",
      price: 13.99,
      imageUrl:
        "https://www.healthygffamily.com/wp-content/uploads/2017/05/IMG_9889.jpg",
      quantity: 1,
    },
    // Add more barbecue menu items as needed
  ];
  
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-12">
          <div className="row">
            {food===1 && menuItems.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-4 col-sm-6">
                {/* Map each menu item to a MenuItem component */}
                <MenuItem
                  key = {item.name}
                  item = {item}
                />
              </div>
            ))}
            {food===2 && barbecueMenuItems.map((item, index) => (
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
        {/* <div className="col-lg-4 col-md-4 col-sm-12">
          <ShoppingCart />
        </div> */}
      </div>
    </div>
  );
};

export default Index;
