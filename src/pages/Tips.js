import Navbar from "../components/navbar/Navbar";
import MobileNav from "../components/mobileNav/MobileNav";

const Tips = () => {
  return (
    <div className="relative">
      <Navbar setting="false" headText="Tips & Tutorial" />

      <MobileNav />
    </div>
  );
};

export default Tips;
