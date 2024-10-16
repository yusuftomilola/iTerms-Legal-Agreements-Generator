import {
  genDocumentsIcon,
  genSettingsIcon,
  genSubscriptionIcon,
  userImage,
} from "../assets/icons";
import { auth } from "../config/firebase";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  console.log(auth.currentUser.displayName);

  return (
    <aside className="w-[30%] h-[75vh] shadow-lg rounded-sm lg:flex flex-col gap-[50px] mt-12 bg-white hidden sticky top-[50px]">
      <div className="flex justify-center flex-col items-center gap-1">
        <div className="rounded-full h-[50px] w-[50px] mt-[-30px] shadow-lg">
          <img src={userImage} alt="user image" className="w-full" />
        </div>
        <p className="text-[13px]">{auth.currentUser.displayName}</p>
      </div>

      <ol className="flex gap-2 flex-col text-[12px]">
        <NavLink
          to={"/documents"}
          className={({ isActive }) =>
            `flex items-center pl-8 gap-1.5 py-1.5 ${isActive ? "active2" : ""}`
          }
        >
          <img src={genDocumentsIcon} alt="documents icon" width={18} />{" "}
          Documents
        </NavLink>

        <NavLink
          to={"/subscriptions"}
          className={({ isActive }) =>
            `flex items-center pl-8 gap-1.5 py-1.5 ${isActive ? "active2" : ""}`
          }
        >
          <img src={genSubscriptionIcon} alt="subscriptions icon" width={18} />{" "}
          Subscriptions
        </NavLink>

        <NavLink
          to={"/settings"}
          className={({ isActive }) =>
            `flex items-center pl-8 gap-1.5 py-1.5 ${isActive ? "active2" : ""}`
          }
        >
          <img src={genSettingsIcon} alt="Settings icon" width={18} /> Settings
        </NavLink>
      </ol>
    </aside>
  );
};

export default Sidebar;
