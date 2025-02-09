import { doc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "./Firebase/configs";
import logo1 from "./assets/logo1.png";

function Hero() {
  const [user, setUser] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  async function toDesplay() {
    if (localStorage.getItem("user") === "14") {
      const userRef = doc(db, "admin", "admin");
      await setDoc(userRef, { admin: "admin" });
      navigate("/thank");
    } else {
      const userRef = doc(db, "user", `number${localStorage.getItem("user")}`);
      await setDoc(userRef, { id: localStorage.getItem("user") });
      navigate("/thank");
    }
  }

  useEffect(() => {
    console.log(user);
  }, [user]);

  // ✅ Add touch event listener for iPads
  useEffect(() => {
    function handleTouch() {
      toDesplay(); // Call the function when touched anywhere
    }

    document.addEventListener("touchstart", handleTouch);

    return () => {
      document.removeEventListener("touchstart", handleTouch);
    };
  }, []); // Runs only once on mount

  return (
    <div className="flex w-screen min-h-screen flex-col items-center justify-start bg-[#090951] pb-[50px] md:pb-0 px-4">
      <img src={logo1} alt="Flowbite Logo" className="h-64 w-auto mt-5" />
      <h1 className="text-3xl font-bold text-white text-center my-5 mt-28">
        لتدشين هويتك البصرية الجديدة
      </h1>
      <button
        className="text-2xl font-bold text-black text-center mt-4 bg-[#B5B89F] h-16 w-32 rounded-md"
        onClick={toDesplay}
      >
        اضغط هنا
      </button>
    </div>
  );
}

export default Hero;
