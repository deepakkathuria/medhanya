import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

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
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center bg-white">
                  <img
                    className="h-8 w-auto rounded-md"
                    src="https://res.cloudinary.com/dbb7g0jqa/image/upload/v1690470496/logo_mcwbgh.png"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-white text-black"
                          : "text-white hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Social Media Icons */}
                <div className="flex items-center space-x-4">
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/your_instagram_profile/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:bg-gray-700 hover:text-white rounded-md p-2"
                  >
                    <img
                      className="h-8 w-8"
                      src="https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690993367/icons8-instagram-48_w8rp1q.png"
                      alt="Instagram"
                    />
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/your_facebook_profile/"
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
                    href="https://twitter.com/your_twitter_profile/"
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
                  <a
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
                  </a>
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
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
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
