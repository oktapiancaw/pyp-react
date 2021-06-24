/* eslint-disable react/prop-types */
const TaskList = (props) => {
  console.log(props);
  let option;
  if (props.check == "true") {
    option = (
      <div className="flex">
        <span className="mx-1">
          <img src="./icon/CrossIcon.svg" />
        </span>
        <span className="mx-1">
          <img src="./icon/CheckIcon.svg" />
        </span>
      </div>
    );
  } else {
    option = (
      <div className="flex">
        <span className="mx-1">-</span>
      </div>
    );
  }

  return (
    <div>
      {props.data.map((task) => {
        return (
          <div
            key={task.id}
            className="w-100 h-8 py-3 px-4 mb-2 flex text-gray-800 justify-between items-center rounded shadow-sm"
          >
            <p className="text-sm">
              <span className="font-medium">{task.name ?? "senin"}, </span>
              {task.date ?? "test"}
            </p>
            {option}
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
