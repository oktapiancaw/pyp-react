import TaskList from "./TaskList";

const Tasks = () => {
  const task = [
    {
      id: 1,
      goal_id: 1,
      nominal: 25000,
      date: "Sat, 02 Jan 2021 00:00:00 -0000",
      status: 1,
    },
    {
      id: 1,
      goal_id: 1,
      nominal: 25000,
      date: "Sun, 03 Jan 2021 00:00:00 -0000",
      status: 1,
    },
    {
      id: 1,
      goal_id: 1,
      nominal: 25000,
      date: "Mon, 04 Jan 2021 00:00:00 -0000",
      status: 1,
    },
    {
      id: 1,
      goal_id: 1,
      nominal: 25000,
      date: "Tue, 05 Jan 2021 00:00:00 -0000",
      status: 1,
    },
  ];
  return (
    <div>
      <h2 className="text-base font-medium col-span-2">Daily tasks</h2>
      <TaskList tasks={task} />
    </div>
  );
};

export default Tasks;
