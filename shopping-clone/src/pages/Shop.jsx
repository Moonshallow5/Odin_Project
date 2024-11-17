import { useEffect, useState } from "react"

const Shop=({addToCart,removeFromCart}) =>{
    const [products,setProducts]=useState([])
    const [loading,setLoading]=useState(true)


    useEffect(()  =>{

        const fetchProducts=async()=>{

            try{

                const response=await fetch("https://fakestoreapi.com/products")
                const data=await response.json()
                setProducts(data)
                setLoading(false)


            } catch(error){
                console.log("where is things")
            }
            
        }
        fetchProducts()


    },[])

   
    


    return(


        <div className="shop">

            {products.map ((product)=> (
                <div className="product" key={product.id}>
                <h3>{product.title}</h3>


                <img src={product.image} width={200} alt={product.title}/>
                <p>${product.price.toFixed(2)}</p>
            
          <input
            type="number"
            defaultValue={1}
            min={1}
            max={10}
            style={{ width: "50px" }}
          />
        
          <button
            onClick={(e) =>
              addToCart(product, parseInt(e.target.previousSibling.value))
            }
          > Add To Cart</button>
          
          
          </div>
            
            ))}

        </div>
        
    )

    


    
}
export default Shop