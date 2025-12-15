import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Pagination from "./Pagination";
import NoData from "./NoData";

const apiKey = import.meta.env.VITE_API_KEY2; // use your env key
const pageSize = 10;

const NewsBoard = ({ category, country }) => {
  
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading]= useState(false);
  
  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?category=${category}&country=${country}&pageSize=${pageSize}&page=${page}&apiKey=${apiKey}`;
    const fetchData=async ()=>{
    setLoading(true);
    try{
    // fetch(url)
    //   .then(response => response.json())
    //   .then(data => {
    //     setArticles(data.articles || []);
    //     setTotalResults(data.totalResults || 0);
    //   })
    //   .catch(error => console.error("Error fetching news:", error));
    const response=await fetch(url);
    const data=await response.json();
    setArticles(data.articles||[]);
    setTotalResults(data.totalResults || 0);
    }
    catch(err){
      console.log(err);
    }
    finally{
       setLoading(false);
    }
  }
  
  fetchData();
    
  }, [category, country, page]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>

      {
        (loading)?(
        <div className="d-flex justify-content-center align-items-center my-4">
          <div className="spinner-border text-danger" role="status">
          </div><br></br>
          <div className="my-3"> Loading...</div>
        </div>
      ) :

        (articles.length===0)?(
          <NoData/>):
        
        (articles.map((news, index) => (
        <NewsItem
          key={news.url || index}
          title={news.title}
          description={news.description}
          src={news.urlToImage}
          url={news.url}
        />)
      ))}

      <Pagination
        totalResults={totalResults}
        pageSize={pageSize}
        setPage={setPage}
      />
    </div>
  );
};

export default NewsBoard;