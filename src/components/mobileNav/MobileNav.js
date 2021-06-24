import "./MobileNav.css";
import MobileNavList from "./MobileNavList";

const MobileNav = () => {
  const urls = [
    { id: 1, url: "./trans", alt: "Transaction", icon: "./TransIcon.svg" },
    { id: 2, url: "./target", alt: "Target", icon: "./TargetIcon.svg" },
    { id: 3, url: "./home", alt: "Home", icon: "./HomeIcon.svg" },
    { id: 4, url: "./debt", alt: "Debt List", icon: "./PinjamanIcon.svg" },
    { id: 5, url: "./tips", alt: "Tips", icon: "./TipsIcon.svg" },
  ];

  return (
    <nav className="mobile-nav">
      <MobileNavList dataUrl={urls} />
    </nav>
  );
};

export default MobileNav;
