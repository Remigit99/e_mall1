import { useSelector } from "react-redux"
// import { useState } from "react"

const Cart = () => {

  // const [isLoading, setIsLoading] = useState(true)

  const {cartItems} = useSelector(state => state.cart)
console.log(cartItems)

// if(isLoading){
//   <h1>Loading...</h1>
// }

  return (
    <main>

      <div className="container cart__container">

        
      {
        cartItems.map((product) => (
          <article key={product.id} className="product">
            <div className="product__img">
              <img src={product.postImg} alt={product.title} />
            </div>

            <div className="product__img">
              <h5>{product.title}</h5>
              <p>{product.category}</p>
              <h5>${product.price}</h5>
            </div>

            {/* <div className="btn">
              <button className="cart-btn"
              onClick={() => dispatch(addToCart(product))}
              >Add to Cart</button>
            </div> */}
          </article>
        ))
      }


      </div>

    </main>
  )
}

export default Cart