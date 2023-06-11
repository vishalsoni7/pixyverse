import "../pages/landing.css";

export const Landing = () => {
  return (
    <div className="landing-parent-div">
      <img src="landing img.svg" alt="landing" />
      <div className="landing-container">
        {" "}
        <h1 className="landing-heading">Welcome to Pixyverse </h1>
        <h1>
          FOLLOW{" "}
          <sub className="landing-sub-title">PEOPLE AROUND THE GLOBE </sub>{" "}
        </h1>
        <h1>
          CONNECT <sub className="landing-sub-title">WITH YOUR LOVED ONE</sub>{" "}
        </h1>
        <h1>
          SHARE
          <sub className="landing-sub-title"> WHAT'S IN MIND</sub>{" "}
        </h1>{" "}
        <div className="landing-btn-div">
          {" "}
          <button className="landing-btn"> Join Now </button>
          <p> Already have an account? </p>{" "}
        </div>
      </div>
    </div>
  );
};
