import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";

const SignedInLayout = ({ children }) => {
  return (
    <div className="h-screen  heroBackgroundImage">
      <Nav />

      <div className="flex gap-6 max-w-[800px] mx-auto">
        <Sidebar />

        {children}
      </div>
    </div>
  );
};

export default SignedInLayout;
