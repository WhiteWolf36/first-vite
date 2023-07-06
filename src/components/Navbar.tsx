import { Link } from "react-router-dom";
interface Props {
  title: string;
  mode?: string;
  modeText: string;
  style: string;
  toggleMode: () => void;
}
const Navbar = ({ title, mode, modeText, style, toggleMode }: Props) => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            {title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about/">
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={toggleMode}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                  style={{ color: `${style}` }}
                >
                  {modeText}
                </label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
