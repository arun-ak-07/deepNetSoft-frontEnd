import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";

const navigation = [
  { name: "HOME", href: "#", current: true },
  { name: "MENU", href: "#", current: false },
  { name: "MAKE A RESERVATION", href: "#", current: false },
  { name: "CONTACT US", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  return (
    <Disclosure as="nav" className="bg-[#121618]">
      <div className="mx-auto max-w-7xl px-2 pt-6 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between py-2">
          <div className="absolute inset-y-0 left-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 sm:justify-start justify-center w-full sm:w-auto">
            <div className="relative ml-3">
              <img
                alt="Logo"
                src={logo}
                className="size-20"
                style={{
                  position: "absolute",
                  top: "44px",
                  right: "130px",
                  zIndex: "2",
                }}
              />
              <div className="flex flex-row pt-10">
                <h4 className="text-[#0796EF] text-3xl font-normal hidden md:block">DEEP</h4>
                <h4 className="text-3xl hidden md:block font-normal ml-2 text-white">NET</h4>
              </div>
              <h4
                style={{ position: "absolute", top: "80px", right: "50px", zIndex: "33" }}
                className="text-[35px] text-[#857878] md:block ml-2 font-medium text-[35px] hidden md:block"
              >
                SOFT
              </h4>
            </div>
          </div>

          {/* Navigation links for desktop view */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "text-[#0796EF]"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-sans text-base font-semibold"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
        </div>
      </div>

      {/* Mobile view menu items */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-semibold"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
