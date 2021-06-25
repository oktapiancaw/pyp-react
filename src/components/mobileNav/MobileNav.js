import "./MobileNav.css";
import MobileNavList from "./MobileNavList";

const MobileNav = () => {
  const urls = [
    { id: 1, url: "./trans", alt: "Transaction", icon: "./icon/TransIcon.svg" },
    { id: 2, url: "./goals", alt: "Goals", icon: "./icon/TargetIcon.svg" },
    { id: 3, url: "./", alt: "Home", icon: "./icon/HomeIcon.svg" },
    { id: 4, url: "./debt", alt: "Debt List", icon: "./icon/DebtIcon.svg" },
    { id: 5, url: "./tips", alt: "Tips", icon: "./icon/VideoIcon.svg" },
  ];

  return (
    <nav className="mobile-nav bg-white shadow">
      <MobileNavList dataUrl={urls} />
    </nav>
  );
};

export default MobileNav;
