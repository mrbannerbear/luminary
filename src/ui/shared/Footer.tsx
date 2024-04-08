import Link from "next/link";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-purple-950 text-purple-50 px-4 lg:px-24 py-12">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="w-full  lg:w-1/4 px-4 mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Luminary</h3>
            <p className="text-sm">
              Celebrating the luminous journey towards a greener tomorrow, we at
              Luminary are dedicated to illuminating eco-friendly practices and
              fostering a brighter, sustainable future for generations to come.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 lg:gap-10">
            <div className="w-full   px-4 mb-8 md:mb-0">
              <h3 className="text-lg font-bold mb-4">Links</h3>
              <ul className="text-sm">
                <Link href={"/"}>
                  <li className="mb-2">Home</li>
                </Link>
                <Link href={"/"}>
                  <li className="mb-1">Legal</li>
                </Link>
                <Link href={"/"}>
                  <li className="mb-1">Careers</li>
                </Link>
                <Link href={"/"}>
                  <li className="mb-1">Terms of Service</li>
                </Link>
              </ul>
            </div>
            <div className="w-full md:w-1/2  px-4 mb-8 md:mb-0">
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <p className="text-sm">
                Email:{" "}
                <span className="text-purple-200 hover:underline cursor-pointer">
                  info.luminary@google.com
                </span>
              </p>
              <p className="text-sm">
                Phone:{" "}
                <span className="text-purple-200 hover:underline cursor-pointer">
                  973-426-7690
                </span>
              </p>
            </div>
            <div className="w-full   px-4 mb-8 md:mb-0">
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Socials className={"flex text-2xl gap-3"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:mt-8 py-4 text-center border-t border-gray-800">
        <p className="text-xs mt-2">
          &copy; {new Date().getFullYear()} Luminary. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
