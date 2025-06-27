import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <div className="nav">
        <div className="container">
          <div className="nav-con">
            <Link to="/">
              <img src="src/assets/logo.svg" alt="Logo" />
            </Link>
            <ul>
              <li>
                <a href="https://awad1.netlify.app/" target="_blank">
                  My portfolio
                </a>
              </li>
              <li>
                <i class="ri-github-fill"></i>
                <a href="https://awad1.netlify.app/" target="_blank">
                  github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
