import axios from "axios";
import { useEffect, useState } from "react"

export const RestaurantDetails=()=>{
  const [data,setdata]=useState([]);
  useEffect(()=>{
   getdata()
  },[])
  const getdata =()=>{
  axios.get("http://localhost:3001/get-restaurants").then((res)=>{
   setdata(res.data)
   console.log(res.data)
  })
  }
 
  const handlesortacs=()=>{
    axios.get("http://localhost:3001/get-restaurants").then((res)=>{
        setdata(res.data.sort((a,b)=>{return a.costForTwo - b.costForTwo}))
        
       })
}
  const handlesotdesc=()=>{
    axios.get("http://localhost:3001/get-restaurants").then((res)=>{
   setdata(res.data.sort((a,b)=>{return b.costForTwo - a.costForTwo}))
   
  })
    
}





    return(
        <div>
           
            <h1 className="nameh1">Restaurants List</h1>
            <h3>Pagination</h3>
            <div className="pagination">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            </div>
            <h3>Sort by Price</h3>
            <div className="sortbuttons">
            
            <button onClick={handlesortacs}>acs</button>
            <button onClick={handlesotdesc}>desc</button>
            </div>
            <h3>Ratings</h3>
            <div className="Ratingbuttons">
            <button onClick={()=>{axios.get('http://localhost:3001/get-restaurants').then((res)=>{setdata(res.data.filter((e)=>{if (e.rating>=4) {return true} else{return false}}))})}}>4 and above</button>
            <button onClick={()=>{axios.get('http://localhost:3001/get-restaurants').then((res)=>{setdata(res.data.filter((e)=>{if (e.rating>=3) {return true} else{return false}}))})}}>3 and above</button>
            <button onClick={()=>{axios.get('http://localhost:3001/get-restaurants').then((res)=>{setdata(res.data.filter((e)=>{if (e.rating>=2) {return true} else{return false}}))})}}>2 and above</button>
            <button onClick={()=>{axios.get('http://localhost:3001/get-restaurants').then((res)=>{setdata(res.data.filter((e)=>{if (e.rating>=1) {return true} else{return false}}))})}}>1 and above</button>
            <button onClick={()=>{getdata()}}>All</button>
            </div>
            <h3>Payment Option </h3>
            <div className="Payment">
            <button onClick={()=>{axios.get('http://localhost:3001/get-restaurants').then((res)=>{setdata(res.data.filter((e)=>{if (e.payment_methods.cash===true) {return true} else{return false}}))})}}>Cash</button>
            <button onClick={()=>{axios.get('http://localhost:3001/get-restaurants').then((res)=>{setdata(res.data.filter((e)=>{if (e.payment_methods.card===true) {return true} else{return false}}))})}}>Card</button>
            <button onClick={()=>{getdata()}}>all</button>
            </div>
         <div>
             {data.map((el)=>
             <div className="maindiv" key={el.id}>
                 <div className="main">
                    <div className="child1">
                        <img src={el.src} alt="Image Not Found" />
                    </div>
                   
                    <div className="child2">
                        <h3>{el.name}</h3>
                        {el.cuisine.map((el)=><div className="cuisine" >
                        <div>
                        <span>{el}</span>
                        </div>
                        </div>)}
                        <h2 className="cost">Cost For Two:-{el.costForTwo}₹</h2>
                        <h2 className="cost">Min:-₹{el.minOrder}</h2>
                        <h2 className="cost">Delivery Time:-{el.deliveryTime}Min</h2>
                        <div><h2 className="cost">accepts: 
                        {el.payment_methods.card?' card':''}
                         {el.payment_methods.cash?' cash':''}
                         {el.payment_methods.all?' all':''}
                         </h2>
                         <div className="rat">{el.rating}</div>
                        </div>
                         <h3 style={{color:"green"}}>Order Now</h3>
                 </div>
                 
                 </div>
                 
                
             </div>
             )}
         </div>
        </div>
    )
}