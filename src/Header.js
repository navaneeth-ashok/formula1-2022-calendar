import logo from "./logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="site logo" className="site-logo" />

      <h1 className="site-title">F1™ Schedule 2022</h1>
    </div>
  );
};

export default Header;
