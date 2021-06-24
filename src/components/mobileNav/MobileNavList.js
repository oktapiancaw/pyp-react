/* eslint-disable react/prop-types */
const MobileNavList = (props) => {
  return (
    <ul>
      {props.dataUrl.map((data) => {
        return (
          <li key={data.id}>
            <a href={data.url}>
              <img src={data.icon} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default MobileNavList;
