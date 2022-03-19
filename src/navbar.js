import { Link } from "react-router-dom";
const Navbar = () => {
  const main_page = "/";
  const create = "/create";
  const contact_us = "/contact-us";
  return (
    <nav className="navbar">
      <div className="links">
        <h1>The New Blog Application</h1>
        <Link
          to={main_page}
          style={{
            backgroundColor: "green",
            borderRadius: "15px",
            color: "white",
            fontWeight: "900",
            padding: "15px",
            marginLeft: "27px",
          }}
        >
          Home
        </Link>
        <Link
          to={create}
          style={{
            backgroundColor: "red",
            borderRadius: "15px",
            color: "white",
            fontWeight: "900",
            padding: "15px",
            marginLeft: "25px",
          }}
        >
          New Blog
        </Link>
        <Link to = {contact_us} className="contact-link"> Contact Us</Link>
      </div>
    </nav> 
  );
};

export default Navbar;
