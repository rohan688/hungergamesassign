import axios from "axios"
import { useEffect } from "react"

export const Addrestaurants=()=>{
  useEffect(()=>{
  axios.get(" http://localhost:3001/get-restaurants").then((res)=>{
   console.log(res.data)
  })
  },[])





    

    return(
        <div>
            <h1>Add Hotels</h1>
        <form>
            <lable>NAME</lable>
            <input className="name" type="text" placeholder="Restaurents Name"/><br></br>
            <label>COST FOR TWO</label>
            <input className="costForTwo" type="number" placeholder="costfortwo"/><br></br>
             <lable>MINIMUM ORDER</lable>
            <input className="minOrder" type="number" placeholder="Minimum order"/><br></br>
            <label>DELIVERY TIME</label>
            <input className="deliveryTime" type="number" placeholder="Delivery Time"/><br></br>
          </form>
        </div>
    )
}