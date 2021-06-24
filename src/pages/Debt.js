import Navbar from "../components/navbar/Navbar";
import MobileNav from "../components/mobileNav/MobileNav";

const Debt = () => {
  return (
    <div>
      <Navbar setting="false" />
      <div className="my-3 mx-6">
        <h1 className="font-medium text-base mb-10">Debt List</h1>
        <div className="w-100 h-52">
          <div className="w-100 h-8 py-3 px-4 mb-2 bg-white flex justify-betwwen items-center rounded shadow ">
            <p>Test</p>
          </div>
          <div className="w-100 h-8 py-3 px-4 mb-2 bg-white flex justify-betwwen items-center rounded shadow ">
            <p>Test</p>
          </div>
          <div className="w-100 h-8 py-3 px-4 mb-2 bg-white flex justify-betwwen items-center rounded shadow ">
            <p>Test</p>
          </div>
          <div className="w-100 h-8 py-3 px-4 mb-2 bg-white flex justify-betwwen items-center rounded shadow ">
            <p>Test</p>
          </div>
        </div>
      </div>
      <MobileNav />
    </div>
  );
};

export default Debt;
