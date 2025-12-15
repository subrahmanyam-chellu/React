

const Navbar = ({setCategory, setCountry}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand"><span className="badge bg-light text-dark fs-4">NewsMag</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav"> 
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("business")}>Business</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("entertainment")}>Entertainment</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("general")}>General</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("health")}>Health</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("science")}>Science</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("sports")}>Sports</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("technology")}>Technology</div>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Choose country
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" onClick={()=>setCountry("au")}>Australia</a></li>
            <li><a className="dropdown-item" onClick={()=>setCountry("cn")}>China</a></li>
            <li><a className="dropdown-item" onClick={()=>setCountry("de")}>Germany</a></li>
            <li><a className="dropdown-item" onClick={()=>setCountry("in")}>India</a></li>
            <li><a className="dropdown-item" onClick={()=>setCountry("gb")}>United Kingdom</a></li>
            <li><a className="dropdown-item" onClick={()=>setCountry("ru")}>Russia</a></li> 
            <li><a className="dropdown-item" onClick={()=>setCountry("us")}>default(USA)</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
