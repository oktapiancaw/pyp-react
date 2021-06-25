/* eslint-disable react/prop-types */
const DebtList = (props) => {
  return (
    <div>
      {props.data.map((debt) => {
        return (
          <div
            key={debt.id}
            className="w-100 py-2 px-3 mb-3 flex text-gray-800 justify-between items-center rounded shadow"
          >
            <div className="">
              <p className="font-medium text-xs mb-1">{debt.name ?? "name"}</p>
              <p className=" text-xs">{"Rp. " + debt.nominal ?? "Rp. 0"}</p>
            </div>

            <span className="mx-1 text-xs font-thin">
              {debt.date ?? "None"}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default DebtList;
