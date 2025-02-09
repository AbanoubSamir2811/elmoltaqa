import logo1 from "./assets/logo1.png";

function Thank() {
  return (
    <div className="flex w-screen min-h-screen flex-col items-center justify-center bg-[#090951] pb-[50px] md:pb-0 px-4">
        <img src={logo1} alt="Flowbite Logo" className="h-56 w-auto" />
        <h1 className='text-3xl font-bold text-white text-center mt-4'>تم تدشين هويتك البصرية الجديدة  بنجاح</h1>
    </div>
  )
}

export default Thank