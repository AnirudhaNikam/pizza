
import { Link }from "react-router-dom";
import "./CNavbar.css"
function Navbar(){
    return(
<>
<nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/Home"><h1>Pizza</h1></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Home">HOME</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="/Veg"> PIZZA'S</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link "to="/AddPizza">ADDPIZZA</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link "to="#"><i class="bi bi-cart-fill"bgcolor="dark"></i></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Everyday">About-Us</Link>
        </li>
        

      </ul>
    </div>
  </div>
</nav>
</>
    )
}

export default Navbar;