import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from '../components/Product'
const Home = () => {
  const API_URL='https://fakestoreapi.com/products';
  const [setLoading,loading]=useState(false)
  const [post,setPost]=useState([])

 
  async function fetchProductData(){
    setLoading(true);

    try{
      const res=await fetch(API_URL);
      const data=await res.json();
      setPost(data)
      console.log(data)
    }catch(error){
      
      console.log(error)
      setPost([])
    }
    setLoading(false)
  }

  useEffect(()=>{
    fetchProductData();
  },[]);
  return (
    <div>
      {
        loading?<Spinner></Spinner>:
        post.length>0?(
          <div>
            {
              post.map((post)=>(
                <Product key={post.id} post={post}></Product>
              ))
            }
          </div>
        ):(<p>no data found</p>)
      }
    </div>
  )
}

export default Home