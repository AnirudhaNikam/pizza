import { useState, useEffect } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
function Veg() {
    const [pizza, setPizza] = useState([]);

    useEffect(() => {
       MyPizza();

    }, []);


 const navigate=useNavigate();


 

    const MyPizza =()=>{
        axios.get("http://localhost:5000/Pizza")
        .then(response => {
            setPizza(response.data);
        })
        .catch(error => {
            console.error("There is an error fetching the data from Pizza", error);
        });

    }



    //For Delete A Pizza from page

    const handleDelete=(id)=>{
        axios.delete(`http://localhost:5000/Pizza/${id}`)
        .then(response => {
            MyPizza();
        })
        .catch(error => {
            console.error("There is an error Deleting the data from Pizza", error);
        });
    }




    return (
        <div className="container mt-4">
            <h2>Pizza</h2>
            <div className="row">
                {pizza.map(pizza => (
                    <div className="col-md-4" key={pizza.id}>
                        <div className="card mb-4">
                            <img src={pizza.image} className="card-img-top" alt={pizza.name} />
                            <div className="card-body">
                                <h4 className="card-title">{pizza.Name}</h4>
                                <p className="card-text">Price: ₹{pizza.Price}</p>
                                <p className="card-text">Type: {pizza.Type}</p>
                                <p className="card-text">{pizza.descripton}</p>
                                <button className="btn btn-danger me-2"onClick={()=>handleDelete(pizza.id)}>DELETE</button>
                                <button className="btn btn-warning"onClick={()=>navigate(`/Update/${pizza.id}`)}>UPDATE</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Veg;