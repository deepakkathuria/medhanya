import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FiPhoneCall } from 'react-icons/fi';
import { TfiEmail } from 'react-icons/tfi';



const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "About Us", href: "/about-us", current: false },
  { name: "Our Products", href: "/products", current: false },
  { name: "Vision Mission", href: "/vision", current: false },
  { name: "Contact Us", href: "/contact-us", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  return (
    <Disclosure as="nav" className="bg-blue-200">
      {({ open }) => (
        <>
          <div>
            <div className="w-full bg-black flex justify-between px-5">
              {/* Social Media Icons */}
              <div className="flex items-center">
                <div className="">
                  <p className="text-white">Follow Us On :  <br></br></p>
                </div>
                <br></br>
                <div className="flex items-center space-x-3 py-1">
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/medhanya88248/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:bg-gray-700 hover:text-white rounded-md p-2"
                  >
                    <img
                      className="h-6 w-6"
                      src="https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690993367/icons8-instagram-48_w8rp1q.png"
                      alt="Instagram"
                    />
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/profile.php?id=100081580146437"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:bg-gray-700 hover:text-white rounded-md p-2"
                  >
                    <img
                      className="h-6 w-6"
                      src="https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690993225/icons8-facebook-48_eysasj.png"
                      alt="Facebook"
                    />
                  </a>

                  {/* Twitter */}
                  <a
                    href="https://twitter.com/Medhanya88248"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:bg-gray-700 hover:text-white rounded-md p-2"
                  >
                    <img
                      className="h-6 w-6"
                      src="https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690993548/icons8-twitter-100_msqjna.png"
                      alt="Twitter"
                    />
                  </a>

                  {/* LinkedIn */}
                  {/* <a
                    href="https://www.linkedin.com/in/your_linkedin_profile/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:bg-gray-700 hover:text-white rounded-md p-2"
                  >
                    <img
                      className="h-6 w-6"
                      src="https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690993563/icons8-linkedin-100_j6axoo.png"
                      alt="LinkedIn"
                    />
                  </a> */}
                </div>
              </div>
              <div className="items-center space-x-5 hidden md:flex">
                <div className="flex items-center space-x-1">
                  <FiPhoneCall className="text-red-400 h-[1.5rem] w-[1.5rem]" />
                  <p className="text-white">+91- 7982349877</p>
                </div>
                <div className="flex items-center space-x-1">
                  <TfiEmail className="text-red-400 h-[1.5rem] w-[1.5rem]" />
                  <p className="text-white">info@medhanya.com</p>
                </div>
              </div>
            </div>
            <div className="relative flex h-34 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black bg-blue-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6"  />
                  ) : (
                    <Bars3Icon className="block h-6 w-6"  />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex  items-center justify-center sm:items-stretch sm:justify-start px-5">
                <div className="flex flex-shrink-0 items-center bg-blue-200">
                  <a href="/" className="flex flex-shrink-0 items-center bg-blue-200">

                    <img
                      className="h-12 w-auto rounded-md"
                      // src="https://res.cloudinary.com/dbb7g0jqa/image/upload/v1690470496/logo_mcwbgh.png"
                      src='https://res.cloudinary.com/dqdaz8ni5/image/upload/v1691333170/1000_F_601120335_2qLTs88YdsiNBxtWvGStWlnreAqCwIBn-03_v3aria.svg'
                      alt="Your Company"
                      style={{ width: "200px", height: "100px", marginLeft: "-20px", marginTop: "12px" }}
                    />
                  </a>
                </div>
                <div
                  style={{ marginTop: "40px", marginLeft: "50px" }}
                  className="hidden sm:flex space-x-2">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      style={{ fontSize: "15px" }}
                      className={classNames(
                        item.current
                          ? "bg-white text-black"
                          : "text-black hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium h-10"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-white-900 text-black"
                      : "text-black-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>

        </>
      )}
    </Disclosure>
  );
}
