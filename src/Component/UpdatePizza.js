import {useFormik} from "formik";
import * as Yup from "yup"
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";
import { useState,useEffect } from "react";

function Update()
{
  const {id}=useParams();
      

    const[pizza,setPizza]=useState(null);
    const navigate=useNavigate();





    useEffect (()=>{
        axios.get(`http://localhost:5000/Pizza/${id}`)
        .then(response => {
            setPizza(response.data);
        })
        .catch(error => {
            console.error("There is an error fetching the data from Pizza", error);
        }); 
    },[id])




    const formik =useFormik({
        initialValues:{
          image:pizza?.image||"",
          Name:pizza?.Name||"",
          Type:pizza?.Type||"",
          descripton:pizza?.descripton||"",
          Price:pizza?.Price||""
        },
        enableReinitialize:true,
        validationSchema:Yup.object({
            image:Yup.string().required("Image URL Is Required"),
            Name:Yup.string().min(2,"Name must be grater than 2 Character").required("Name is required"),
            Type:Yup.string().min(2,"Type must be grater than 2 Character").required("Type is required"),
            descripton:Yup.string().min(2,"descripton must be grater than 2 Character").required("descripton is required"),
            Price:Yup.number().min(10,"Name must be grater than 10 Rupes").required("Price is required")

        }),
        onSubmit:(values,{setSubmitting,resetForm,setStatus})=>{
            axios.put(`http://localhost:5000/Pizza/${id}`,values)
            .then(response=>{
                setStatus("Success");
                resetForm();
                navigate("/Veg");
            })
            .catch(error=>{
                setStatus("Error");
            })
            .finally(()=>{
                setSubmitting(false);
            })
        }
      })
      return(
        <div className="container mt-4">
            <h1>Update</h1>
            <form onSubmit={formik.handleSubmit}>


              <div className="mb-3">
                <label htmlFor="image"className="form-label">Image URL:</label>
                <input id="image"
                name="image"
                type="text"
                className="form-control"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.image}
                />
                {
                    formik.touched.image && formik.errors.image ?(
                 <div className="text-denger">{formik.errors.image} </div>
                    ):null
                }
              </div>

              


              <div className="mb-3">
                <label htmlFor="Name"className="form-label">Name:</label>
                <input id="Name"
                name="Name"
                type="text"
                className="form-control"
                onChange={formik.handleChange}
                value={formik.values.Name}
                />
                {
                    formik.touched.Name && formik.errors.Name ?(
                 <div className="text-denger">{formik.errors.Name} </div>
                    ):null
                }
              </div>

              


              <div className="mb-3">
                <label htmlFor="Type"className="form-label">Type:</label>
                <input id="Type"
                name="Type"
                type="text"
                className="form-control"
                onChange={formik.handleChange}
                value={formik.values.Type}
                />
                {
                    formik.touched.Type && formik.errors.Type ?(
                 <div className="text-denger">{formik.errors.Type} </div>
                    ):null
                }
              </div>

              


              <div className="mb-3">
                <label htmlFor="descripton"className="form-label">Descripton:</label>
                <input id="descripton"
                name="descripton"
                type="text"
                className="form-control"
                onChange={formik.handleChange}
                value={formik.values.descripton}
                />
                {
                    formik.touched.descripton && formik.errors.descripton ?(
                 <div className="text-denger">{formik.errors.descripton} </div>
                    ):null
                }
              </div>

              


              <div className="mb-3">
                <label htmlFor="Price"className="form-label">Price:</label>
                <input id="Price"
                name="Price"
                type="number"
                className="form-control"
                onChange={formik.handleChange}
                value={formik.values.Price}
                />
                {
                    formik.touched.Price && formik.errors.Price ?(
                 <div className="text-denger">{formik.errors.Price} </div>
                    ):null
                } 
              </div>

              <button type="submit"className="btn btn-primary">Submit</button>
            </form>
        </div>
      )
      
}
export default Update;