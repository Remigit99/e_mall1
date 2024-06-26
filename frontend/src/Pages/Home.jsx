// import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetProductsQuery } from "../../app/services/productsApi";
import { addToCart } from "../../app/Features/cartSlice.js";

const Home = () => {
  /*==== FETCHING USING USEEFFECT =======*/
  // const [mockdata, setMockData] = useState([]);
  // const [isLoading,setIsLoading] = useState(true)

  // const fetchData = async () => {
  //   try {
  //     const resp = await fetch("http://localhost:5000/products");
  //     const result = await resp.json();
  //     console.log(result);
  //     setMockData(result);
  //   } catch (error) {
  //     console.log(error);
  //   }finally{
  //     setIsLoading(false)
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  /*==== USING RTK QUERY =======*/
const dispatch = useDispatch()
  const { data, error, isLoading } = useGetProductsQuery();
  //  console.log(data)

  if (error) {
    <h1>We could not fetch your products</h1>;
  }

  return (
    <main>
      <div className="home__container container">
        {isLoading ? (
          <h1> Loading.... </h1>
        ) : (
          data.map((product) => (
            <article key={product.id} className="product">
              <div className="product__img">
                <img src={product.postImg} alt={product.title} />
              </div>

              <div className="product__img">
                <h5>{product.title}</h5>
                <p>{product.category}</p>
                <h5>${product.price}</h5>
              </div>

              <div className="btn">
                <button className="cart-btn"
                onClick={() => dispatch(addToCart(product))}
                >Add to Cart</button>
              </div>
            </article>
          ))
        )}
      </div>
    </main>
  );
};

export default Home;
