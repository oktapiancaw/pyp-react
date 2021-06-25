import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner w-100 h-52 bg-gray-400 flex">
      <img
        src="./Banner.jpg"
        className="w-full h-full object-cover absolute top-0 z-0"
      />
      <div className="w-full px-6">
        <h1 className="mb-2 text-lg font-semibold tracking-wider text-white">
          Confused with your goals?
        </h1>
        <a
          href="./goals"
          className="inline-block px-4 py-1 font-medium bg-white text-sm rounded shadow"
        >
          Lets Manage
        </a>
      </div>
    </div>
  );
};

export default Banner;
