import Navbar from "../components/navbar/Navbar";
import MobileNav from "../components/mobileNav/MobileNav";
import TaskList from "../components/task/TaskList";

const Debt = () => {
  const debts = [
    {
      id: 1,
      name: "Udin",
      date: "Sat, 02 Jan 2021",
      status: 1,
    },
    {
      id: 2,
      name: "Asep",
      date: "Sun, 03 Jan 2021",
      status: 1,
    },
    {
      id: 3,
      name: "Mushlihat",
      date: "Mon, 04 Jan 2021",
      status: 1,
    },
  ];

  return (
    <div className="main">
      <Navbar setting="false" headText="Debt List" />
      <div className="sectionBox p-6 mt-12 bg-white rounded-lg">
        <TaskList data={debts} />
      </div>
      <div className="fixed w-full bottom-16 px-6">
        <div className="w-full grid grid-cols-2 gap-2">
          <button className="col-span-2 w-full h-10 bg-gray-600 rounded">
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
