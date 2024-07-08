import "./index.css";

const NavBar = () => (
  <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <h1 className="navbar-brand navbar-icon">G.</h1>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <p className="nav-link active nav-link-item">
            Home <span className="sr-only">(current)</span>
          </p>
          <p className="nav-link nav-link-item">About me</p>
          <p className="nav-link nav-link-item">Projects</p>
          <p className="nav-link nav-link-item">Recent Blogs</p>
          <p className="nav-link nav-link-item">Testimonial</p>
        </div>
      </div>
    </nav>
    <div className="navbar-bg-container d-flex flex-column justify-content-center">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 order-1 order-md-2">
            <img
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-banner-img.png"
              className="navbar-image"
              alt="navbar"
            />
          </div>
          <div className="col-12 col-md-7 order-2 order-md-1 d-flex flex-column justify-content-center">
            <h1 className="navbar-heading">
              {" "}
              Hey, I am{" "}
              <span style={{ color: "#4b6cc1" }}>Vamshi Gundepangu</span>
            </h1>
            <p className="navbar-paragraph"> I am a Fullstack Developer</p>
            <button className="navbar-button"> Contact Me</button>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default NavBar;
