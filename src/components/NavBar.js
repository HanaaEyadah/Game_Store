import { Logo, NavItem, ThemeButton } from "../styles";
import DarkLogo from "../Images/DarkLogo.png"
import LightLogo from "../Images/LightLogo.png"

const NavBar = ({ currentTheme, toggleTheme }) => {
  return (
    <nav className="navbar navbar-expand">
      <Logo className="navbar-brand" to="/">
        <img src={currentTheme === "light" ? LightLogo : DarkLogo} alt="logo" />
      </Logo>
      <div className="navbar-nav ml-auto">
        <NavItem className="nav-item" to="/products">
          Products
        </NavItem>
        <ThemeButton className="nav-item" onClick={toggleTheme}>
          {currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </div>
    </nav>
  );
};

export default NavBar;