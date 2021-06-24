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
    <div>
      <Navbar setting="false" />
      <div className="my-3 px-6">
        <h1>Transcation</h1>
        <div className="grid grid-cols-2 gap-2 my-3">
          <div className="w-100 h-8 p-2 rounded bg-gray-400">
            <p>Income</p>
          </div>
          <div className="w-100 h-8 p-2 rounded bg-gray-400">
            <p>Outcome</p>
          </div>
        </div>
        <div className="my-3">
          <h2>Income</h2>
          <TaskList data={trans[0]} />
        </div>
        <div>
          <h2>Outcome</h2>
          <TaskList data={trans[1]} />
        </div>
      </div>
      <div className="fixed w-full bottom-16 px-6">
        <div className="w-full grid grid-cols-2 gap-2">
          <button className="col-span-1 w-full h-10 bg-gray-600 rounded">
            <img />
            <span>Income</span>
          </button>
          <button className="col-span-1 w-full h-10 bg-gray-600 rounded">
            <img />
            <span>Outcome</span>
          </button>
        </div>
      </div>
      <MobileNav />
    </div>
  );
};

export default Transaction;
