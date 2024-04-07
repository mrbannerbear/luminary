import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-purple-950 text-purple-50 px-4 lg:px-24 py-12">
        <div className="container mx-auto ">
          <div className="flex flex-col lg:flex-row lg:justify-between">

            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
              <h3 className="text-lg font-bold mb-4">Luminary</h3>
              <p className="text-sm">
              Celebrating the luminous journey towards a greener tomorrow, we at Luminary
               are dedicated to illuminating eco-friendly practices and fostering a brighter, sustainable 
               future for generations to come.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 lg:gap-10">
            <div className="w-full md:w-1/2  px-4 mb-8 md:mb-0">
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
              <p className="text-sm">Email: <span className="text-purple-200 hover:underline cursor-pointer">info@example.com</span></p>
              <p className="text-sm">Phone: <span className="text-purple-200 hover:underline cursor-pointer">123-456-7890</span></p>
            </div>
            <div className="w-full md:w-1/2  px-4 mb-8 md:mb-0">
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="block">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-200 hover:text-gray-400 transition duration-300 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 8.343a2 2 0 10-2.828-2.828 2 2 0 002.828 2.828zM5 12V7a5 5 0 019.995-.2L15 7a2 2 0 11-2 2v5"></path>
                  </svg>
                </Link>
                <Link href="#" className="block">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-200 hover:text-gray-400 transition duration-300 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.618v-2.236a2 2 0 00-2-2h-1.618a2 2 0 00-1.414.586l-.586.586L12.382 12l2.236-2.236.586-.586a2 2 0 00-.586-3.414l-2.236-.001-2.236-2.237a2 2 0 00-3.415-.586l-.586.586L3.764 6.382l-.001 2.236a2 2 0 00-2 2H1.146a2 2 0 00-1.415 3.414l2.236 2.236.586.586a2 2 0 003.414-.586l.001-2.236L9 12.382l-2.236 2.236-.586.586a2 2 0 00.586 3.414l2.236.001 2.236 2.236a2 2 0 003.414.586l.586-.586L20.236 17l.001-2.236a2 2 0 00.763-1.582zm-10 0h1.618l-1-1h-1.618l1 1z"></path>
                  </svg>
                </Link>
                <Link href="#" className="block">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-200 hover:text-gray-400 transition duration-300 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </Link>
              </div>
            </div>
            </div>
   
          </div>
        </div>
        <div className="lg:mt-8 py-4 text-center border-t border-gray-800">
          <p className="text-xs mt-2">&copy; {new Date().getFullYear()} Luminary. All rights reserved.</p>
        </div>
      </footer>
      
    );
};

export default Footer;