import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './Navbar'
import Cards from './Cards'

function App() {
  var [cart,setCart]= useState(0);

  let addToCart = (productDetails) => {
    setCart(cart+1);
    
  };
  let removeFromCart = (productDetails) => {
    setCart(cart-1);
    
  };

  var productDetails=[
    {
      img:"https://cdn.pixabay.com/photo/2016/06/20/04/30/asian-man-1468032_1280.jpg",
      title:"Shirt",
      description: 
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nisi accusamus harum optio beatae veniam delectus porro!",
     
    },
    {
      img:"https://cdn.pixabay.com/photo/2014/08/26/21/48/jeans-428613_1280.jpg",
      title:"Pant",
      description: 
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nisi accusamus harum optio beatae veniam delectus porro!",
      

    },
    {
      img:"https://cdn.pixabay.com/photo/2011/08/18/01/18/plate-cap-8936_1280.jpg",
      title:"Cap",
      description: 
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nisi accusamus harum optio beatae veniam delectus porro!",
      
    },
    {
      img:"https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_1280.jpg",
      title:"Shoe",
      description: 
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nisi accusamus harum optio beatae veniam delectus porro!",
      
    },
    {
      img:"https://cdn.pixabay.com/photo/2017/06/17/16/16/amazing-2412612_1280.jpg",
      title:"Sandals",
      description: 
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nisi accusamus harum optio beatae veniam delectus porro!",
     
    },
    {
      img:"https://cdn.pixabay.com/photo/2014/07/31/23/00/wristwatch-407096_1280.jpg",
      title:"Watch",
      description: 
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nisi accusamus harum optio beatae veniam delectus porro!",
   
    },
    {
      img:"https://cdn.pixabay.com/photo/2014/10/03/17/39/glasses-472027_1280.jpg",
      title:"Glass",
      description: 
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nisi accusamus harum optio beatae veniam delectus porro!",
    },
    {
      img:"https://cdn.pixabay.com/photo/2016/09/22/18/43/belts-1688017_1280.jpg",
      title:"Belt",
      description: 
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nisi accusamus harum optio beatae veniam delectus porro!"
    }

  ]

  

  return (
   <>
   
   <Navbar cart={cart}/>
   <div className='container'>
        <div className='row mt-5'>
            {
             productDetails.map((items,index)=> (<div className='col-3 mt-5' key={index}><Cards productDetails={items} addToCart={addToCart} removeFromCart={removeFromCart}/></div>))
             } 
            </div>
            </div>

            
   
   
   </>
  )
}

export default App
