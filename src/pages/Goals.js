import Navbar from "../components/navbar/Navbar";
import MobileNav from "../components/mobileNav/MobileNav";
import TaskList from "../components/task/TaskList";

const Goals = () => {
  const goals = [
    {
      id: 1,
      goal_id: 1,
      nominal: 25000,
      date: "Sat, 02 Jan 2021",
      status: 1,
    },
    {
      id: 2,
      goal_id: 1,
      nominal: 25000,
      date: "Sun, 03 Jan 2021",
      status: 1,
    },
    {
      id: 3,
      goal_id: 1,
      nominal: 25000,
      date: "Mon, 04 Jan 2021",
      status: 1,
    },
    {
      id: 4,
      goal_id: 1,
      nominal: 25000,
      date: "Tue, 05 Jan 2021",
      status: 1,
    },
  ];
  return (
    <div className="main">
      <Navbar setting="false" />
      <div className="my-3 mx-6">
        <div className="grid grid-cols-2 gap-2 my-3">
          <h1 className="text-base font-medium col-span-2">Your Goals</h1>
          <div className="col-span-2 w-100 h-32 rounded bg-gray-800"></div>
        </div>
        {/* <h2 className="text-base font-medium col-span-2">Other Goals</h2>
        <div className="flex overflow-x-scroll my-3">
          <div className="flex flex-nowrap">
            <div className="h-24 w-12 mr-2 bg-gray-700 rounded"></div>
            <div className="h-24 w-36 mr-2 bg-gray-700 rounded"></div>
            <div className="h-24 w-36 mr-2 bg-gray-700 rounded"></div>
          </div>
        </div> */}
        <div>
          <h2 className="text-base font-medium col-span-2">Daily tasks</h2>
          <TaskList data={goals} check="true" />
        </div>
      </div>
      <MobileNav />
    </div>
  );
};

export default Goals;
