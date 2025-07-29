import { useState, useEffect } from 'react';
import './Blog.css';

const Blog = () => {
  const [useData, setUseData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12; 
  useEffect(() => {
    fetch("/Data.json") 
      .then((response) => response.json())
      .then((result) => setUseData(result))
      .catch((error) => console.error("Error fetching data:", error)); 
  }, []);


  const totalPages = Math.ceil(useData.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = useData.slice(indexOfFirstPost, indexOfLastPost);

 
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="blogs">
      <h1 className="blogs-title">Blogs</h1>
      <br />
      <div className='blogs_container'>

      {currentPosts.length > 0 ? (
        currentPosts.map((post, index) => (
          <div key={index} className="blog-post">
            <img src={post.image} className="blog-img" alt="Blog" />
            <h2 className="blog-title">{post.title}</h2>
            <p className="blog-content">{post.content}</p>
          </div>
        ))
      ) : (
        <p>No blog posts available.</p>
      )}
      </div>

      
      <nav className="page-nav">
        <div className="pagination">
          
          <button
            className="prev-next-links older"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`page-numbers ${currentPage === i + 1 ? "current" : ""}`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          
          <button
            className="prev-next-links newer"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Blog;
