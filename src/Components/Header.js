import { NavLink, Link } from 'react-router-dom';

export function Header(props) {
  const SiteNav = props.navigation.map((item, itemKey) => {
    return (
      <NavLink key={itemKey} exact to={item.link} className="nav-link" activeClassName="active">
        {item.name}
      </NavLink>
    )
  })
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand order-0 order-sm-0" to="/">{props.name}</Link>
        <button className="navbar-toggler order-3 order-sm-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <form className="d-flex flex-fill my-3 my-md-0 flex-fill order-4 order-sm-3">
          <input className="form-control me-md-2" type="search" placeholder="Search for books" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </form>
        <nav className="navbar navbar-nav flex-row mx-2 order-2 order-sm-2">
          <Link className="nav-link px-3 py-sm-0 " to="/profile">
            <span className="d-none d-sm-inline-block mx-2">Profile</span>
            <i class="fas fa-user"></i>
          </Link>
          <Link className="nav-link px-3 py-sm-0" to="/favourites">
            <span className="d-none d-sm-inline-block mx-2">Favourites</span>
            <i class="fas fa-heart"></i>
          </Link>
        </nav>
        <div className="collapse navbar-collapse order-5 order-sm-5" id="navbarSupportedContent">
          <nav className="navbar-nav ms-auto mb-2 mb-lg-0">
            {SiteNav}
          </nav>
        </div>
      </div>
    </div>
  )
}
