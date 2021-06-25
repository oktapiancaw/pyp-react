import Navbar from "../components/navbar/Navbar";
import MobileNav from "../components/mobileNav/MobileNav";

const Contact = () => {
  return (
    <div className="main">
      <Navbar setting="false" headText="Contact" />
      <div className="sectionBox p-6 mt-12 bg-white rounded-lg">
        <h2 className="text-sm font-medium mb-3 ml-1">Send message for us</h2>
        <form>
          <label className="ml-1 text-sm text-gray-900">Name</label>
          <input
            className="my-1 p-2 pl-3 w-full border-2 text-sm text-gray-700 rounded"
            placeholder="Your name.."
          />
          <label className="ml-1 text-sm text-gray-900">Email</label>
          <input
            className="my-1 p-2 pl-3 w-full border-2 text-sm text-gray-700 rounded"
            placeholder="Your email.."
          />
          <label className="ml-1 text-sm text-gray-900">Message</label>
          <textarea className="my-1 p-2 pl-3 w-full h-24 resize-none border-2 text-sm text-gray-700 rounded"></textarea>

          <button
            type="submit"
            className="w-full py-1 px-2 mt-1 flex items-center justify-center bg-gray-600 rounded"
          >
            <span className="text-white tracking-wide">Send</span>
          </button>
        </form>
      </div>
      <MobileNav />
    </div>
  );
};

export default Contact;
