import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="h-screen  heroBackgroundImage">
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
