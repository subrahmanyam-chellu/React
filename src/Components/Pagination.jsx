import { useState } from "react";

const Pagination = ({ totalResults, pageSize, setPage }) => {
  const [pageNO, setPageNo] = useState(1);
  const totalPages = Math.ceil(totalResults / pageSize);

  const handleClick = (page) => {
    setPageNo(page);
    setPage(page); // notify NewsBoard
  };

  return (
    <div className="text-center my-3">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          type="button"
          className={`btn mx-1 ${pageNO === i + 1 ? "btn-primary" : "btn-dark"}`}
          onClick={() => handleClick(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;