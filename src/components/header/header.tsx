import { useLocation, useNavigate } from "react-router-dom";
import "./header.css";
import ImgHomeLogo from "../../assets/logo/img_logo.svg";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const isCommunityPage = location.pathname === "/board";
  const isMarketPage =
    location.pathname === "/items" || location.pathname === "/additem"; // 수정된 부분

  const handleLoginButtonClick = () => {
    navigate("/login");
  };

  return (
    <div className="header">
      <div className="header-container">
        <a href="/" className="header-logo">
          <img src={ImgHomeLogo} alt="Logo" className="header-logo-img" />
        </a>
        <nav className="header-nav">
          <ul className="header-nav-container">
            <li className="header-nav-item">
              <a
                href="/board"
                className={`nav-link ${isCommunityPage ? "active" : ""}`}
              >
                자유게시판
              </a>
            </li>
            <li className="header-nav-item">
              <a
                href="/items"
                className={`nav-link ${isMarketPage ? "active" : ""}`}
              >
                중고마켓
              </a>
            </li>
          </ul>
        </nav>
        <button className="header-login-btn" onClick={handleLoginButtonClick}>
          로그인
        </button>
      </div>
    </div>
  );
}

export default Header;
