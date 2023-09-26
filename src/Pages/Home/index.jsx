import React from 'react'
import CardForHome from '../../Components/CardForHome.jsx';

const Home = () => {
  const CardItems = [
    {
      description: "Easy and Convinient Ordering",
      imageUrl: "https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,q_60,w_645/d351033a8868bf6ec542bead1f0ffa87.jpg",
    },
    {
      description: "Quick Delivery",
      imageUrl: "https://thumbs.dreamstime.com/b/express-delivery-service-logo-fast-time-order-stopwatch-quick-shipping-icon-147324740.jpg",
    },
    {
      description: "No need to wait in Lines",
      imageUrl: "https://i.insider.com/5a66713000d0efa6028b48f0?width=700",
    }
  ];
  return (
    <>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="add1.webp" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="add2.webp" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="add3.webp" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    
    <div className="row">
      {CardItems.map((item, index) => (
        <div key={index} className="col-lg-4 col-md-4 col-sm-6" style={{display:"flex", flexDirection:"row", justifyContent:"space-center"}}>
          {/* Map each menu item to a MenuItem component */}
            <CardForHome
            description={item.description}
            imageUrl={item.imageUrl}/>
        </div>
          ))}
    </div>
    </>
  )
}

export default Home
