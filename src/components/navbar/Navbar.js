const Navbar = () => {
  return (
    <nav className="w-100 p-7 h-20 bg-white shadow flex items-center justify-between">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gray-600 rounded mr-2"></div>
        <div>
          <p className="font-medium mb-0 text-base">Oktapian</p>
          <span className="font-thin text-xs">oktapian1998@gmail.com</span>
        </div>
      </div>
      <div className="w-10 h-10 bg-gray-600 rounded"></div>
    </nav>
  );
};

export default Navbar;
