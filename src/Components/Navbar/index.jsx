import React from 'react'

const Navbar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'black'}}  >
  
  <a classNName="navbar-brand" href="/">
    <img src="dosa-master.svg" width="50" height="50" alt=""></img>
  </a>
  <a className="navbar-brand" href="/" style={{color: 'white'}}>Restaurant</a>
  {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */}
  <div className="collapse navbar-collapse" id="navbarSupportedContent" >
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/" style={{color:'white'}}>Home <span className="sr-only">(current)</span></a>
      </li>
      
      <li className="nav-item dropdown active">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" style={{color:'white'}} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Menu
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/">Action</a>
          <a className="dropdown-item" href="/">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="/">Something else here</a>
        </div>
      </li>

      <li className="nav-item active">
        <a className="nav-link" style={{color:'white'}} href="/">FAQ</a>
      </li>

      <li className="nav-item active">
        <a className="nav-link" style={{color:'white'}} href="/">Contact Us</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-warning" type="submit" >Search</button>
    </form>
  </div>
</nav>
  )
}

export default Navbar
