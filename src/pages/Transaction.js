import Navbar from "../components/navbar/Navbar";
import MobileNav from "../components/mobileNav/MobileNav";

const Transaction = () => {
  return (
    <div>
      <Navbar setting="false" />
      <div className="my-3 mx-6">
        <h1>Transcation</h1>
        <div>
          <h2>Income</h2>
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
        <div>
          <h2>Outcome</h2>
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

export default Transaction;
