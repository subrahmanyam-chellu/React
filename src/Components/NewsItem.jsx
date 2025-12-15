import noNews from '/src/assets/download.png';
const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block mx-2 my-2 px-2 py-2"
      style={{ maxWidth: "354px" }}
    >
      <img
        src={src?src:noNews}
        className="card-img-top"
        style={{ height: "200px", width: "338px" }}
        alt="news"
      />
      <div className="card-body">
        <h5 className="card-title">{title ? title.slice(0, 50) : "No Title"}</h5>
        <p className="card-text">
          {description ? description.slice(0, 90) : "No description available"}
        </p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsItem;