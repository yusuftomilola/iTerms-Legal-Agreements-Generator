import { useState, useEffect, useContext } from "react";
import UserProfileContext from "../context/userProfile";
import { downRightArrowIcon, shortDownArrowIcon } from "../assets/icons";
import ButtonWithBg from "./buttons/ButtonWithBg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { auth, db } from "../config/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { Menu, X, ChevronDown } from "lucide-react";
import { getDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

const Nav = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [userImageUrl, setUserImageUrl] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigateTo = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        getUserProfile(user.uid);
        getUserImageURL(user.uid);
      } else {
        setIsAuthenticated(false);
        setUserProfile(null);
        setUserImageUrl("");
      }
    });

    return () => unsubscribe();
  }, []);

  const getUserProfile = async (uid) => {
    try {
      const userSnapshot = await getDoc(doc(db, "users", uid));
      const userProfileData = userSnapshot.data();
      setUserProfile(userProfileData);
    } catch (error) {
      console.log("Error fetching user profile:", error);
    }
  };

  const getUserImageURL = async (uid) => {
    try {
      const userSnapshot = await getDoc(doc(db, "users", uid));
      if (userSnapshot.data()) {
        const userProfile = userSnapshot.data();
        setUserImageUrl(userProfile.userImageURL);
      }
    } catch (error) {
      console.log("Error fetching user image:", error);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully");
      navigateTo("/");
    } catch (error) {
      console.error("Error signing out:", error);
      toast.error("Failed to log out. Please try again.");
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative flex justify-between items-center max-w-[800px] m-auto px-6 py-4">
      <p className="text-[#1D212A] text-[20px] lg:text-[26px] font-light cursor-pointer">
        <Link to="/"> iTerms</Link>
      </p>

      {/* Mobile menu button */}
      <button className="lg:hidden" onClick={toggleMenu}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop menu */}
      <ol className="hidden lg:flex gap-6 text-[#1D212A] text-[12px]">
        <li>
          <NavLink to="/documents" activeclassname="active">
            Generate
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/contact" activeclassname="active">
            Contact Us
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/pricing" activeclassname="active">
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" activeclassname="active">
            Blog
          </NavLink>
        </li>
      </ol>

      <div className="hidden lg:flex items-center gap-1 text-[12px]">
        En
        <img
          src={downRightArrowIcon}
          alt="short right icon"
          className="mt-1"
          width={10}
          height={12}
        />
      </div>

      {isAuthenticated && userProfile ? (
        <div className="hidden lg:flex items-center gap-2">
          <p className="text-[11px]">Hi, {userProfile.firstName}</p>
          {userImageUrl && (
            <div className="rounded-full flex items-center justify-center w-[25px] h-[25px] overflow-hidden">
              <img
                src={userImageUrl}
                alt="user image"
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <ButtonWithBg text="Log out" bgColor="#8770FF" onClick={logOut} />
        </div>
      ) : (
        <div className="hidden lg:flex items-center text-[11px] gap-3">
          <button>
            <Link to="/sign-in">Log in</Link>
          </button>
          <ButtonWithBg text="Sign up" link="/sign-up" bgColor="#8770FF" />
        </div>
      )}

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-50 flex flex-col p-6">
          <div className="flex justify-between items-center mb-8">
            <Link to={"/"}>
              <p className="text-[#1D212A] text-[20px] font-light">iTerms</p>
            </Link>
            <button onClick={toggleMenu}>
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col space-y-6">
            <NavLink
              to="/documents"
              className="flex justify-start items-center gap-2"
              activeclassname="text-[#8770FF]"
            >
              Generate{" "}
              <img src={shortDownArrowIcon} width={20} alt="down arrow" />
            </NavLink>

            {/* <NavLink to="/contact" activeclassname="text-[#8770FF]">
              Contact us
            </NavLink> */}
            <NavLink to="/pricing" activeclassname="text-[#8770FF]">
              Pricing
            </NavLink>
            <NavLink to="/blog" activeclassname="text-[#8770FF]">
              Blog
            </NavLink>

            {/* <div className="flex justify-start items-center gap-2 mb-4">
              <span>Account</span>
              <img src={shortDownArrowIcon} width={20} alt="down arrow" />
            </div> */}
          </nav>

          <div className="mt-auto">
            {/* <div className="flex justify-start items-center gap-2 mb-4">
              <span>Account</span>
              <img src={shortDownArrowIcon} width={20} alt="down arrow" />
            </div> */}

            <div className="flex justify-start items-center gap-2">
              <span>En</span>
              <img src={shortDownArrowIcon} width={20} alt="down arrow" />
            </div>

            {isAuthenticated && (
              <div className="flex items-center gap-2">
                <ButtonWithBg
                  text="Log out"
                  bgColor="#8770FF"
                  onClick={logOut}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
