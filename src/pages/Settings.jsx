import { useEffect, useRef, useState, useContext } from "react";
import UserProfileContext from "../context/userProfile";
import { auth, db, storage } from "../config/firebase";
import { deleteUser, updateCurrentUser } from "firebase/auth";
import {
  updateProfile,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from "firebase/auth";
import { updateDoc, getDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  cameraIcon,
  checkMarkPurpleIcon,
  shortDownArrowIcon,
} from "../assets/icons";
import P from "../components/P";
import H2 from "../components/H2";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Settings = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUserimageUploading, setIsUserimageUploading] = useState(false);
  const [isDeleting, setisDeleting] = useState(false);
  const fileInputRef = useRef(null);
  const [isDeleteAccountPageVisible, setIsDeleteAccountPageVisible] =
    useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userImageUrl: "",
    password: "",
  });
  const navigateTo = useNavigate();

  const [userProfile, setUserProfile] = useState({});

  // const { userProfile, setUserProfile } = useContext(UserProfileContext);

  useEffect(() => {
    getUserProfile();
  }, [userProfile.firstName, userProfile.lastName]);

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(formData);
  };

  // get user profile from firebase cloud firestore database
  const getUserProfile = async () => {
    try {
      const userSnapshot = await getDoc(doc(db, "users", auth.currentUser.uid));
      console.log(`User data: `, userSnapshot.data());
      const userProfile = userSnapshot.data();
      setUserProfile(userProfile);

      // If the user profile exists
      if (userSnapshot.exists()) {
        setFormData({
          firstName: userProfile.firstName,
          lastName: userProfile.lastName,
          email: userProfile.email,
          userImageUrl: userProfile.userImageURL,
        });
      } else {
        console.log("User profile does not exist");
      }
    } catch (error) {
      console.log(`Error getting User Profile: `, error);
      toast.error("Error getting user profile");
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("form submitted successfully");
    try {
      const userDocRef = doc(db, "users", auth.currentUser.uid);

      if (formData.firstName !== userProfile.firstName) {
        await updateDoc(userDocRef, {
          firstName: formData.firstName,
        });
      }

      if (formData.lastName !== userProfile.lastname) {
        await updateDoc(userDocRef, {
          lastName: formData.lastName,
        });
      }

      if (formData.email !== userProfile.email) {
        await updateDoc(userDocRef, {
          email: formData.email,
        });
      }

      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Error updating profile");
    } finally {
      setIsSubmitting(false);
    }
  };

  // LABEL COMPONENT
  const Label = ({ text, htmlFor }) => {
    return (
      <label htmlFor={htmlFor} className="text-[#565A65] text-[12px]">
        {text}
      </label>
    );
  };

  // Toggle the delete account visibility
  const deleteAccountToggle = () => {
    setIsDeleteAccountPageVisible((prev) => !prev);
  };

  // handle user re-authentication
  const deleteUserAccount = async (userPassword) => {
    if (auth.currentUser) {
      try {
        const credential = EmailAuthProvider.credential(
          auth.currentUser.email,
          userPassword
        );

        await reauthenticateWithCredential(auth.currentUser, credential);

        await deleteUser(auth.currentUser);

        toast.success("Account deleted successfully");
        navigateTo("/");
      } catch (error) {
        toast.error("Check your password & try again");
      }
    } else {
      console.log("No user is signed in");
    }
  };

  const handleDeleteButtonClick = () => {
    if (formData.password) {
      deleteUserAccount(formData.password);
    } else {
      toast.error("Password is required to delete your account.");
    }
  };

  // function to handle the browse click button
  const handleBrowseButtonClick = () => {
    fileInputRef.current.click();
  };

  // function to handle file uploading
  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
      const maxSize = 5 * 1024 * 1024; // 5mb max

      if (!allowedTypes.includes(file.type)) {
        toast.error("Only JPG, JPEG and PNG files are allowed");
      } else if (file.size > maxSize) {
        toast.error("File size exceeds 5MB");
      } else {
        try {
          setIsUserimageUploading(true);
          const userImageRef = ref(storage, `images/${file.name}`);
          await uploadBytes(userImageRef, file);

          const userImageURL = await getDownloadURL(userImageRef);

          setFormData((prev) => ({
            ...prev,
            userImageUrl: userImageURL,
          }));

          await updateDoc(doc(db, "users", auth.currentUser.uid), {
            userImageURL: userImageURL,
          });

          setIsUserimageUploading(false);
          toast.success("File uploaded successfully");
        } catch (error) {
          toast.error("Failed to upload file");
        }
      }
    }
  };

  return (
    <main className="flex flex-grow flex-col gap-6  mb-10 pl-4 pr-7 md:pr-4 lg:pr-0 md:pl-0 overflow-x-hidden">
      <div className="bg-white rounded-lg shadow-xl px-4 py-8 flex flex-col  gap-2 items-start w-full">
        {!isDeleteAccountPageVisible ? (
          <>
            {/* HEADING */}
            <h2 className="">Settings</h2>

            {/* SECOND PART */}
            <div className="flex gap-4 items-center">
              {formData.userImageUrl ? (
                <div className="rounded-full flex items-center justify-center w-[70px] h-[70px] overflow-hidden">
                  <img
                    src={formData.userImageUrl}
                    alt="user image"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="rounded-full p-5 flex items-center justify-center border-[1px] border-[#32D989]">
                  <img
                    src={cameraIcon}
                    alt="camera icon"
                    width={20}
                    height={20}
                  />
                </div>
              )}

              <div className="flex flex-col gap-4 items-start">
                <div>
                  <h3 className="text-[15px] text-[#1D212A]">Choose File</h3>
                  <p className="text-[11px] text-[#8B94AD]">
                    JPG,JPEG,PNG max file size 5MB
                  </p>
                </div>

                <input
                  type="file"
                  name="userImage"
                  id="userImage"
                  className="hidden"
                  accept=".jpg, .jpeg, .png"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />

                <button
                  className="text-[#8770FF] underline text-[13px]"
                  onClick={handleBrowseButtonClick}
                >
                  {isUserimageUploading ? "uploading..." : "Browse"}
                </button>
              </div>
            </div>

            {/* THIRD PART */}
            <div className="">
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-2">
                {/* FIRST SECTION */}
                <div className="flex gap-6 flex-col sm:flex-row">
                  {/* FIRST NAME */}
                  <div className="">
                    <Label htmlFor="firstName" text={"First Name"} />
                    <br />
                    <div
                      className={`w-[200px] border-b-[1px] border-[#565A65]`}
                    >
                      <input
                        type={"text"}
                        name={"firstName"}
                        id={"firstName"}
                        placeholder={"Your first name"}
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="border-b-[1px] text-[13px] w-full"
                      />
                    </div>
                  </div>

                  {/* LAST NAME */}
                  <div>
                    <Label htmlFor="firstName" text={"Last Name"} />
                    <br />

                    <div
                      className={`w-[200px] border-b-[1px] border-[#565A65]`}
                    >
                      <input
                        type={"text"}
                        name={"lastName"}
                        id={"lastName"}
                        placeholder={"Your last name"}
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="border-b-[1px] text-[13px] w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* SECOND SECTION - LANGUAGE */}
                <div>
                  <Label htmlFor="language" text={"Language"} />
                  <br />

                  <div
                    className={`w-[200px] border-b-[1px] border-[#565A65] flex justify-between items-center`}
                  >
                    <input
                      type={"text"}
                      name={"language"}
                      id={"language"}
                      value={"English - United States"}
                      readOnly
                      className="border-b-[1px] text-[13px] w-full"
                    />

                    <img
                      src={shortDownArrowIcon}
                      alt={"short arrow icon"}
                      width={18}
                      height={18}
                    />
                  </div>
                </div>

                {/* THIRD SECTION - EMAIL */}
                <div className="flex sm:flex-row sm:justify-between sm:items-end flex-col items-start gap-4">
                  <div>
                    <Label htmlFor="email" text={"Email"} />
                    <br />

                    <div
                      className={`w-[200px] border-b-[1px] border-[#565A65] flex justify-between items-center`}
                    >
                      <input
                        type={"text"}
                        name={"email"}
                        id={"email"}
                        placeholder={"Your email"}
                        value={formData.email}
                        onChange={handleInputChange}
                        className="border-b-[1px] text-[13px] w-full"
                      />

                      <img
                        src={checkMarkPurpleIcon}
                        alt={"check mark purple icon"}
                        width={18}
                        height={18}
                      />
                    </div>
                  </div>

                  <button
                    className="text-[#8770FF] underline text-[12px]"
                    type="button"
                  >
                    Change Password
                  </button>
                </div>

                {/* FOURTH SECTION */}
                <div className="flex sm:flex-row sm:justify-between sm:items-center mt-1 flex-col sm:mt-2 items-start sm:gap-0 gap-3">
                  <button
                    className="text-[#8770FF] underline text-[12px]"
                    type="button"
                    onClick={deleteAccountToggle}
                  >
                    Delete my Account
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`bg-[#8770FF] text-[#fff] px-10 py-2 rounded-md cursor-pointer text-[11px]`}
                  >
                    {isSubmitting ? "Saving..." : "Save"}
                  </button>
                </div>
              </form>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-6 h-[400px]">
              <div className="max-w-[300px]">
                <H2 fontWeight={400}>
                  Are You Positive You wish to delete Your iTerms Account?
                </H2>
              </div>

              <div className="">
                <p className="text-[#646464] text-[10px] max-w-[370px] w-full">
                  Please note that should you delete your account, all policies
                  will be permanently removed from our database. You will be
                  unable to retrieve your documents should you wish in the
                  future.
                </p>

                <p className="text-[#646464] text-[10px] max-w-[350px] mt-2 w-full">
                  Before you go, please do not hesitate to contact our support
                  team with any questions or concerns you may have with our
                  services.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
                {/* PASSWORD */}
                <div className="">
                  <Label htmlFor="password" text={"Password"} />
                  <br />
                  <div className={`w-[200px] border-b-[1px] border-[#565A65]`}>
                    <input
                      type={"password"}
                      name={"password"}
                      id={"password"}
                      placeholder={"Enter password"}
                      value={formData.password}
                      onChange={handleInputChange}
                      className="border-b-[1px] text-[13px] w-full"
                    />
                  </div>
                </div>

                <div className="flex gap-4 items-end mt-6 sm:mt-0">
                  {/* back */}
                  <button
                    className="text-[#8770FF] underline text-[12px]"
                    type="button"
                    onClick={deleteAccountToggle}
                  >
                    Back
                  </button>

                  {/* Delete */}
                  <button
                    type="button"
                    disabled={isDeleting}
                    className={`bg-[#FF607C] text-[#fff] px-8 h-[35px] rounded-md cursor-pointer text-[11px]`}
                    onClick={handleDeleteButtonClick}
                  >
                    {isDeleting ? "Deleting..." : "Delete"}
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Settings;
