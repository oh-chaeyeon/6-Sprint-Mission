import { useLocation } from "react-router-dom";

interface NavItemProps {
  to: string;
  children: React.ReactNode;
}

function NavItem({ to, children }: NavItemProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li className="header-nav-item">
      <a href={to} className={`nav-link ${isActive ? "active" : ""}`}>
        {children}
      </a>
    </li>
  );
}

export default NavItem;
