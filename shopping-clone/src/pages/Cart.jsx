const Cart=({cart,remove})=>{
    if(cart.length==0){

        return <p>Cart is empty.</p>
    }

    return(

        <div className="cart">
            {cart.map((item) =>(

                <div className="cart-item" key={item.id}>
                    <h3>{item.title}</h3>
                    <img src={item.image}  width={200}/>
                    <p>Quantity: {item.quantity}</p>
                    <p> Product price: ${(item.price*item.quantity).toFixed(2)}</p>
                    <button onClick={() => remove(item.id)}>Remove</button>

                    </div>




            ))}
            </div>



    )
}
export default Cart