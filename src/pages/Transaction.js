import "../styles/Transaction.css";
import Navbar from "../components/navbar/Navbar";
import MobileNav from "../components/mobileNav/MobileNav";
import TaskList from "../components/task/TaskList";

const Transaction = () => {
  const trans = [
    [
      {
        id: 1,
        date: "Sat, 02 Jan 2021",
        status: 1,
      },
      {
        id: 2,
        date: "Sun, 03 Jan 2021",
        status: 1,
      },
      {
        id: 3,
        date: "Mon, 04 Jan 2021",
        status: 1,
      },
    ],
    [
      {
        id: 1,
        date: "Sat, 02 Jan 2021",
        status: 1,
      },
      {
        id: 2,
        date: "Sun, 03 Jan 2021",
        status: 1,
      },
    ],
  ];
  return (
    <div className="main">
      <Navbar setting="false" headText="Transaction List" />
      <div className="grid grid-cols-2 gap-2 px-6">
        <div className="w-100 h-8 p-2 flex flex-col items-center">
          <p className="text-sm font-light text-gray-700">Income</p>
          <span className="font-medium tracking-wider">5.000.000</span>
        </div>
        <div className="w-100 h-8 p-2 flex flex-col items-center">
          <p className="text-sm font-light text-gray-700">Outcome</p>
          <span className="font-medium tracking-wider">2.000.000</span>
        </div>
      </div>
      <div className="transBox p-6 mt-12 bg-white rounded-lg">
        <div className="my-3">
          <h2 className="text-sm font-medium mb-1 ml-1">Income</h2>
          <TaskList data={trans[0]} />
        </div>
        <div>
          <h2 className="text-sm font-medium mb-1 ml-1">Outcome</h2>
          <TaskList data={trans[1]} />
        </div>
      </div>
      <div className="fixed w-full bottom-16 px-6">
        <div className="w-full grid grid-cols-2 gap-2">
          <button className="col-span-1 w-full h-10 bg-gray-600 rounded flex justify-center items-center">
            <img className="mr-2" src="./icon/IncomeIcon.svg" />
            <span className="text-sm text-white tracking-wide">Income</span>
          </button>
          <button className="col-span-1 w-full h-10 bg-gray-600 rounded flex justify-center items-center">
            <img className="mr-2" src="./icon/OutcomeIcon.svg" />
            <span className="text-sm text-white tracking-wide">Outcome</span>
          </button>
        </div>
      </div>
      <MobileNav />
    </div>
  );
};

export default Transaction;
