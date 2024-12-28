import "./CNavbar.css"
import { Link } from "react-router-dom"
function Footer()
{
    return(
        <>
        <footer className="py-3 my-0">
    
    <ul class="nav justify-content-center border-bottom pb-0 mb-0">
      <li class="nav-item"><Link href="#" class="nav-link px-2 text-body-secondary"to="/Home">Home</Link></li>
      <li class="nav-item"><Link href="#" class="nav-link px-2 text-body-secondary">Features</Link></li>
      <li class="nav-item"><Link href="#" class="nav-link px-2 text-body-secondary">Pricing</Link></li>
      <li class="nav-item"><Link href="#" class="nav-link px-2 text-body-secondary"to="/Everyday">About</Link></li>
    </ul><p class="text-center text-body-secondary">© 2024 Company, Inc</p>
    <p class="text-center text-body-secondary">At Satara Maharashtra 415528 </p>
    <p class="text-center text-body-secondary">Thanks For Visit !</p>
  </footer></>
    )
}

export default Footer