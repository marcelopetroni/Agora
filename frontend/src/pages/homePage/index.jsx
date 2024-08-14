import NavbarItems from "../../components/Navbar";
import HelpTips from "../../components/HelpTips";
import "./home.sass";

const Home = () => {
  return (
    <div className="homepage-container">
      <NavbarItems />
      <div className="home-items">
        <div className="title-container">Hello, Joana de Sá!</div>
      </div>
      <HelpTips/>
    </div>
  );
};

export default Home;
