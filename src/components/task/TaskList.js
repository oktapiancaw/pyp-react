/* eslint-disable react/prop-types */
const TaskList = (props) => {
  return (
    <div>
      {props.tasks.map((task) => {
        return (
          <div
            key={task.id}
            className="w-100 h-8 py-1 px-2 flex text-gray-800 justify-between items-center rounded shadow-sm mb-2"
          >
            <p className="text-sm">
              <span className="font-medium">Senin, </span>
              Test
            </p>
            <p>Test</p>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
