import "./CHome.css"
import { Link } from "react-router-dom";
function Home (){
    return(
        <>


<section className="hero">
        <h1 className="Welcome">Welcome to Pizza Paradise!</h1>
        <p className="Welcome2">Delicious pizzas made with love and fresh ingredients.</p>
        <Link className="cta-button"to="/Veg">View Our Menu</Link>
      </section>

      <section className="menu-preview" id="menu">
        <h2>Our Menu</h2>
        <div className="menu-items">
          <div className="menu-item">
            <h3>Margherita Pizza</h3>
            <img src="https://images.pexels.com/photos/1552635/pexels-photo-1552635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"height={150}alt="#"/>
            <p>A classic pizza with tomato sauce, mozzarella, and fresh basil.</p>
          </div>
          <div className="menu-item">
            <h3>Pepperoni Pizza</h3>
            <img src="https://images.pexels.com/photos/3915855/pexels-photo-3915855.jpeg?auto=compress&cs=tinysrgb&w=600"height={150}alt=""/>

            <p>Spicy pepperoni slices with gooey cheese and tomato sauce.</p>
          </div>
          <div className="menu-item">
            <h3>Veggie Pizza</h3>
            <img src="https://images.pexels.com/photos/5640013/pexels-photo-5640013.jpeg?auto=compress&cs=tinysrgb&w=600"height={150}alt=""/>

            <p>Loaded with fresh vegetables and a savory tomato sauce.</p>
          </div>
        </div>
      </section>
  
        </>
    )
}
export default Home;