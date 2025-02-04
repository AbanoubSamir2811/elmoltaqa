import { useNavigate } from "react-router-dom";
import logo1 from "./assets/logo1.png";
import { useEffect } from "react";
import { collection, deleteDoc, getDocs } from "firebase/firestore";
import { db } from "./Firebase/configs";

function Home() {
    const navigate = useNavigate();
    function handleClick(id: number){
        localStorage.clear();
        localStorage.setItem("user", id.toString());
      navigate("/hero");
    };

    // useEffect(() => {
    //   if (localStorage.getItem("user")) {
    //     navigate('/hero')
    //   }
    // })
    async function deleteEntireCollection() {
        const userCollectionRef = collection(db, "user"); // Reference to the "user" collection
        try {
          const querySnapshot = await getDocs(userCollectionRef); // Fetch all documents in the collection
    
          // Delete each document one by one
          querySnapshot.forEach(async (doc) => {
            await deleteDoc(doc.ref); // Delete the document
            console.log(`Document with ID ${doc.id} deleted.`);
          });
    
          console.log("Entire collection deleted.");
          alert("Entire collection deleted successfully!");
          navigate('/desplay')
        } catch (error) {
          console.error("Error deleting collection: ", error);
          alert("Error deleting collection!");
        }
      }

  return (
    <main className="flex w-screen min-h-screen flex-col items-center justify-center bg-[#06878E] pb-[50px] md:pb-0 px-4">
      <img
        src={logo1}
        alt="Flowbite Logo"
        className="h-56 w-auto"></img>
        <h1 className="text-3xl font-bold text-white text-end">ما هى منطقة المجلس ؟</h1>
        <div className="grid justify-center mt-9 lg:grid-cols-3 sm:grid-cols-2 gap-8 text-white text-xl font-bold" dir="rtl">
          <p className="cursor-pointer hover:underline" onClick={() => handleClick(1)}>
            مجلس الجمعيات الأهلية بالرياض
          </p>
          <p className="cursor-pointer hover:underline" onClick={() => handleClick(2)}>
            مجلس الجمعيات الأهلية بالجوف
          </p>
          <p className="cursor-pointer hover:underline" onClick={() => handleClick(3)}>
            مجلس الجمعيات الأهلية بعسير
          </p>
          <p className="cursor-pointer hover:underline" onClick={() => handleClick(4)}>
            مجلس الجمعيات الأهلية بمكة المكرمة
          </p>
          <p className="cursor-pointer hover:underline" onClick={() => handleClick(5)}>
            مجلس الجمعيات الأهلية بالحدود الشمالية
          </p>
          <p className="cursor-pointer hover:underline" onClick={() => handleClick(6)}>
            مجلس الجمعيات الأهلية بالمدينة المنورة
          </p>
          <p className="cursor-pointer hover:underline" onClick={() => handleClick(7)}>
            مجلس الجمعيات الأهلية بحائل
          </p>
          <p className="cursor-pointer hover:underline" onClick={() => handleClick(8)}>
            مجلس الجمعيات الأهلية بالشرقية
          </p>
          <p className="cursor-pointer hover:underline" onClick={() => handleClick(9)}>
            مجلس الجمعيات الأهلية بالباحة
          </p>
          <p className="cursor-pointer hover:underline" onClick={() => handleClick(10)}>
            مجلس الجمعيات الأهلية بتبوك
          </p>
          <p className="cursor-pointer hover:underline" onClick={() => handleClick(11)}>
            مجلس الجمعيات الأهلية بجازان
          </p>
          <p className="cursor-pointer hover:underline" onClick={() => handleClick(12)}>
            مجلس الجمعيات الأهلية بالقصيم
          </p>
          <p className="cursor-pointer hover:underline" onClick={() => handleClick(13)}>
            مجلس الجمعيات الأهلية بنجران
          </p>
          <p className="cursor-pointer hover:underline" onClick={() => handleClick(14)}>
            مجلس الجمعيات الأهلية الرئيسى 
          </p>
        </div>
        {/* Add a delete button for the entire collection */}
        <div className="grid grid-cols-2 gap-4">
            <button
                className="text-2xl font-bold text-black text-center mt-4 bg-[#B5B89F] h-16 w-32 rounded-md"
                onClick={deleteEntireCollection} // Call deleteEntireCollection on click
            >
                إعادة البدء 
            </button>
            <button
            className="text-2xl font-bold text-black text-center mt-4 bg-[#B5B89F] h-16 w-36 rounded-md"
                onClick={()=>navigate('/desplay')} // Call deleteEntireCollection on click
            >
                شاشة العرض
            </button>
        </div>
    </main>
  )
}

export default Home