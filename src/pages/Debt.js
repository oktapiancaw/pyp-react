import Navbar from "../components/navbar/Navbar";
import MobileNav from "../components/mobileNav/MobileNav";
import DebtList from "../components/debt/DebtList";
import DebtForm from "../components/debt/DebtForm";
import { useState } from "react";

const Debt = () => {
  const [isActive, setActive] = useState("true");
  const [getDebts, setDebts] = useState([
    {
      id: 1,
      name: "Udin",
      nominal: "5.000.000",
      date: "Sat, 02 Jan 2021",
      status: 1,
    },
    {
      id: 2,
      name: "Asep",
      nominal: "1.000.000",
      date: "Sun, 03 Jan 2021",
      status: 1,
    },
    {
      id: 3,
      name: "Mushlihat",
      nominal: "3.000.000",
      date: "Mon, 04 Jan 2021",
      status: 1,
    },
  ]);

  const eventCreateDebt = (debt) => {
    setDebts(getDebts.concat(debt));
  };

  const showAddForm = () => {
    setActive(!isActive);
  };

  const closeForm = () => {
    setActive("true");
  };

  return (
    <div className="main">
      <Navbar setting="false" headText="Debt List" />
      <div
        className="sectionBox p-6 mt-12 bg-white rounded-lg"
        onClick={closeForm}
      >
        <DebtList data={getDebts} />
      </div>
      <div className="fixed w-full bottom-16 px-6">
        <div className={isActive ? "hidden" : "relative w-full"}>
          <div className="absolute p-4 z-10 bottom-2 w-full bg-white rounded shadow ">
            <DebtForm onCreateDebt={eventCreateDebt} />
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-2">
          <button
            className={
              isActive ? "col-span-2 w-full h-10 bg-gray-600 rounded" : "hidden"
            }
            onClick={showAddForm}
          >
            <img />
            <span className="text-white tracking-wide">Add Debt</span>
          </button>
        </div>
      </div>
      <MobileNav />
    </div>
  );
};

export default Debt;
