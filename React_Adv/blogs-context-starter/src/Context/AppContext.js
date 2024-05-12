import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
//step1 create context
export const AppContext = createContext();

 export function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  //data filling
  async function fetchBlogPosts(page = 1,tag=null,category) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    if(tag){
      url+=`&tag=${tag}`
    }if(category){
      url+=`&category=${category} `
    }
    try {
      const result = await fetch(url);
      const data = await result.json();
      console.log(data);
      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages); // Corrected line
    } catch (error) {
      console.log("error");
      setPage(1);
      setPosts([1]);
      setTotalPages(null);
    }
    setLoading(false)
}

 function handlePageChange(page){
    setPage(page);
    fetchBlogPosts(page)

 }
  const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalPages,
    setTotalPages,
    handlePageChange,
    fetchBlogPosts,
  };
  //step 2
  return <AppContext.Provider value={value}>
  {children}
  </AppContext.Provider>;
}


