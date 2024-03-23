import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css"


function Cards({productDetails,addToCart,removeFromCart}) {
    var [addOrRemove,setAddOrRemove]= useState(true)
  return (
    <>
    
            <div className="card" style={{ width: "18rem" }}>
                <img src={productDetails.img} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">{productDetails.title}</h5>
                <p className="card-text">{productDetails.description}</p>
                {addOrRemove?<a href="#" className="btn btn-primary" onClick={()=>{
                    setAddOrRemove(false)
                    addToCart(productDetails)}}>
                    Add to Cart</a>
                    :
                        <a href="#" className="btn btn-danger" onClick={()=>{
                            setAddOrRemove(true)
                            removeFromCart(productDetails)}}>
                            Remove from Cart</a>
                }
                
                </div>
            </div>
           
   

</>
    
   
  )
}

export default Cards