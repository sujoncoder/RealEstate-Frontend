import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Company Info */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold">RealEstate</h2>
            <p className="mt-2">Your dream home awaits.</p>
          </div>
          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row md:space-x-10">
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-semibold">Explore</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Listings
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-semibold">Resources</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Contact Info */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="mt-2 space-y-2">
              <li>Magura,Khulna,Bangladesh</li>
              <li>Email: sujonsheikh.dev@gmail.com</li>
              <li>Phone: 01999-986919</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-6">
          <p className="text-sm">
            &copy; 2024 RealEstate. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              target="_blank"
              href="https://www.facebook.com/iamsujonsheikh"
              className="hover:text-gray-400"
              rel="noreferrer"
            >
              <FaFacebookF className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaInstagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
