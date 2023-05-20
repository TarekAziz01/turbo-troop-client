import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import logo from "../../../assets/images/turbo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-8 px-4">
        <div className="flex items-center">
          <img src={logo} alt="Website Logo" className="w-12 h-12" />
          <h3 className="ml-2 text-xl font-bold">Turbo Troop</h3>
        </div>
        <div className="mt-4 md:mt-0">
          <p>&copy; 2023 Website Name. All rights reserved.</p>
          <p>Contact: example@example.com</p>
          <p>Phone: 123-456-7890</p>
          <p>Address: 123 Street, City, Country</p>
        </div>
        <div className="mt-4 md:mt-0">
          <a
            href="https://twitter.com"
            className="mr-2 text-white hover:text-gray-500"
          >
            <FaTwitter />
          </a>
          <a
            href="https://facebook.com"
            className="mr-2 text-white hover:text-gray-500"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            className="text-white hover:text-gray-500"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
