import React,{useRef} from 'react'

export default function Navbar(props) {
  const input = useRef("")
  const getSearchTerm =()=>{
    props.searchHandler(input.current.value)
}
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav">
  <div className="container-fluid">
    <a className="navbar-brand" href="/HomePage">
    <i class="fas fa-home"></i> Contact Manager
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#Home">Home</a>
        </li>
        <li className="nav-item">
   <a className="nav-link" href="#AddNew">
     Add New +
  </a>
</li>
    <li className="nav-item">
   <a className="nav-link" href="#Contacts">
    Contacts
  </a>
</li>

      </ul>
      <form className="d-flex">
        <input
          ref={input}
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={props.searchTerm}
          onChange={getSearchTerm}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>

)
}
