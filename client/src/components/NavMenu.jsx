import { NavLink } from 'react-router-dom';
import { mainNav } from '../content/siteNav';

function NavDropdownItem({ item }) {
  if (item.children?.length) {
    return (
      <li className="dropdown">
        <a href="#">
          <span>{item.label}</span> <i className="bi bi-chevron-down toggle-dropdown" aria-hidden="true" />
        </a>
        <ul>
          {item.children.map((child) => (
            <NavDropdownItem key={child.path || child.label} item={child} />
          ))}
        </ul>
      </li>
    );
  }

  return (
    <li>
      <NavLink to={item.path}>{item.label}</NavLink>
    </li>
  );
}

function NavTopItem({ item }) {
  if (item.path) {
    return (
      <li>
        <NavLink to={item.path} end={item.path === '/'}>
          {item.label}
        </NavLink>
      </li>
    );
  }

  return (
    <li className="dropdown">
      <a href="#">
        <span>{item.label}</span> <i className="bi bi-chevron-down toggle-dropdown" aria-hidden="true" />
      </a>
      <ul>
        {item.children.map((child) => (
          <NavDropdownItem key={child.path || child.label} item={child} />
        ))}
      </ul>
    </li>
  );
}

export default function NavMenu() {
  return (
    <nav id="navmenu" className="navmenu">
      <ul>
        {mainNav.map((item) => (
          <NavTopItem key={item.path || item.label} item={item} />
        ))}
        <li className="kb-nav-cta">
          <NavLink to="/contact">
            <i className="bi bi-envelope-paper-heart" aria-hidden="true" /> Enquire
          </NavLink>
        </li>
      </ul>
      <NavLink
        to="/contact"
        className="kb-header-enquire-icon d-xl-none"
        aria-label="Enquire"
        title="Enquire"
      >
        <i className="bi bi-envelope-paper-heart" aria-hidden="true" />
      </NavLink>
      <i className="mobile-nav-toggle d-xl-none bi bi-list" aria-hidden="true" />
    </nav>
  );
}
