import {NavLink} from 'react-router-dom';

export function Header(props) {
  const SiteNav = props.navigation.map((item, itemKey) => {
    return (
      <li className="nav-item" key={itemKey}>
        <NavLink exact to={item.link} className="nav-link" activeClassName="active">
          {item.name}
        </NavLink>
      </li>
    )
  })
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.name}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <form className="d-flex flex-fill">
            <input className="form-control me-2 flex-fill" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success d-none d-md-block" type="submit">Search</button>
          </form>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {SiteNav}
          </ul>
        </div>
      </div>
    </nav>
  )
}
