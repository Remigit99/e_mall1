import { useState, useEffect } from "react";

const Home = () => {
  const [mockdata, setMockData] = useState([]);
  const [isLoading,setIsLoading] = useState(true)

  const fetchData = async () => {
    try {
      const resp = await fetch("http://localhost:5000/products");
      const result = await resp.json();
      console.log(result);
      setMockData(result);
    } catch (error) {
      console.log(error);
    }finally{
      setIsLoading(false)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <div className="home__container container">

      {
        isLoading? ( <h1> Loading.... </h1>) :
        (

          mockdata.map((product) => (
            <article key={product.id}>
              <div className="product__img">
                <img src={product.postImg} alt={product.title} />
              </div>
    
              <div className="product__img">
                <h5>{product.title}</h5>
                <p>{product.category}</p>
                <h5>${product.price}</h5>
              </div>
            </article>
          ))
        )
      }

      </div>
   
     
    </main>
  );
};

export default Home;
