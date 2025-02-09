import { useNavigate } from "react-router-dom";
import logo1 from "./assets/logo1.png";


function Home() {
    const navigate = useNavigate();

    // Function to handle region selection
    function handleRegionSelect(event: React.ChangeEvent<HTMLSelectElement>) {
        const selectedId = parseInt(event.target.value, 10);
        if (selectedId) {
            localStorage.clear();
            localStorage.setItem("user", selectedId.toString());
            navigate("/hero");
        }
    }

    // Function to delete the entire Firestore collection
    // async function deleteEntireCollection() {
    //     const userCollectionRef = collection(db, "user"); // Reference to the "user" collection
    //     try {
    //         const querySnapshot = await getDocs(userCollectionRef); // Fetch all documents in the collection

    //         // Delete each document one by one
    //         querySnapshot.forEach(async (doc) => {
    //             await deleteDoc(doc.ref); // Delete the document
    //             console.log(`Document with ID ${doc.id} deleted.`);
    //         });

    //         console.log("Entire collection deleted.");
    //         alert("Entire collection deleted successfully!");
    //         navigate('/desplay');
    //     } catch (error) {
    //         console.error("Error deleting collection: ", error);
    //         alert("Error deleting collection!");
    //     }
    // }

    // List of regions
    const regions = [
        { id: 1, name: "مجلس الجمعيات الأهلية بالرياض" },
        { id: 2, name: "مجلس الجمعيات الأهلية بالجوف" },
        { id: 3, name: "مجلس الجمعيات الأهلية بعسير" },
        { id: 4, name: "مجلس الجمعيات الأهلية بمكة المكرمة" },
        { id: 5, name: "مجلس الجمعيات الأهلية بالحدود الشمالية" },
        { id: 6, name: "مجلس الجمعيات الأهلية بالمدينة المنورة" },
        { id: 7, name: "مجلس الجمعيات الأهلية بحائل" },
        { id: 8, name: "مجلس الجمعيات الأهلية بالشرقية" },
        { id: 9, name: "مجلس الجمعيات الأهلية بالباحة" },
        { id: 10, name: "مجلس الجمعيات الأهلية بتبوك" },
        { id: 11, name: "مجلس الجمعيات الأهلية بجازان" },
        { id: 12, name: "مجلس الجمعيات الأهلية بالقصيم" },
        { id: 13, name: "مجلس الجمعيات الأهلية بنجران" },
        { id: 14, name: "مجلس الجمعيات الأهلية الرئيسى" },
    ];

    return (
        <main className="flex w-screen min-h-screen flex-col items-center justify-start bg-[#090951] pb-[50px] md:pb-0 px-4">
            <img
                src={logo1}
                alt="Flowbite Logo"
                className="h-64  w-auto mt-5"
            />
            <h1 className="text-3xl font-bold text-white text-end my-5 mt-28">ماهى منطقة المجلس ؟</h1>

            {/* Dropdown Menu */}
            <div className="mt-9 w-64 h-20">
                <select
                    onChange={handleRegionSelect}
                    className="w-full p-3 text-xl font-bold text-white bg-[#05696E] rounded-md cursor-pointer focus:outline-none"
                    dir="rtl"
                >
                    <option value="" className="text-white bg-[#05696E]">
                        اختر المنطقة
                    </option>
                    {regions.map((region) => (
                        <option
                            key={region.id}
                            value={region.id}
                            className="text-white bg-[#05696E] max-h-3"
                        >
                            {region.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Buttons for reset and display */}
            {/* <div className="grid grid-cols-2 gap-4 mt-8">
                <button
                    className="text-2xl font-bold text-black text-center mt-4 bg-[#B5B89F] h-16 w-32 rounded-md"
                    onClick={deleteEntireCollection}
                >
                    إعادة البدء
                </button>
                <button
                    className="text-2xl font-bold text-black text-center mt-4 bg-[#B5B89F] h-16 w-36 rounded-md"
                    onClick={() => navigate('/desplay')}
                >
                    شاشة العرض
                </button>
            </div> */}
        </main>
    );
}

export default Home;