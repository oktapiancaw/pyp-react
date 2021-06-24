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
    <div>
      <Navbar setting="false" />
      <div className="my-3 mx-6">
        <h1 className="font-medium text-base mb-10">Debt List</h1>
        <TaskList data={debts} />
      </div>
      <MobileNav />
    </div>
  );
};

export default Debt;
