import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState([]);

  async function fetchProductData() {
    setLoading(true);

    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setItem(data);
      console.log(data);
    } catch (error) {
      console.log(error);
      setItem([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);
  return (
    <div>
      {loading ? (
        <Spinner></Spinner>
      ) : item.length > 0 ? (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto space-y-10 space-x-5 min-h-[18vh]">
          {item.map((item) => (
            <Product key={item.id} item={item}></Product>
          ))}
        </div>
      ) : (
     <div className="flex justify-center items-center">
     <p>no data found</p>
     </div>
      )}
    </div>
  );
};

export default Home;
