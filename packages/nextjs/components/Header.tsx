// import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ArrowRightCircleIcon, ChatBubbleLeftEllipsisIcon, InformationCircleIcon } from "@heroicons/react/20/solid";
import { SwitchTheme } from "~~/components/SwitchTheme";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link
      href={href}
      passHref
      className={`${
        isActive ? "bg-secondary shadow-md" : ""
      } hover:bg-secondary hover:shadow-md focus:!bg-secondary active:!text-neutral py-1.5 px-3 text-sm rounded-full gap-2 grid grid-flow-col`}
    >
      {children}
    </Link>
  );
};

/**
 * Site header
 */
export const Header = () => {
  const navLinks = (
    <>
      <li>
        <NavLink href="/">Home</NavLink>
      </li>
      <li>
        <NavLink href="/about">
          <InformationCircleIcon className="h-4 w-4" />
          About
        </NavLink>
      </li>
      <li>
        <NavLink href="/login">
          <ArrowRightCircleIcon className="h-4 w-4" />
          Register/Login
        </NavLink>
      </li>
      <li>
        <NavLink href="/contact">
          <ChatBubbleLeftEllipsisIcon className="h-4 w-4" />
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky lg:static top-0 navbar bg-base-100 min-h-0 flex-shrink-0 justify-between z-20 shadow-md shadow-secondary px-0 sm:px-2">
      <div className="navbar-start w-auto lg:w-1/2">
        <Link href="/" passHref className="hidden lg:flex items-center gap-2 ml-4 mr-6 shrink-0">
          <div className="flex flex-col">
            <span className="font-bold leading-tight">Care Pass</span>
            <span className="text-xs">DAO</span>
          </div>
        </Link>
        <ul className="hidden lg:flex lg:flex-nowrap menu menu-horizontal px-1 gap-2">{navLinks}</ul>
      </div>
      <div className="navbar-end flex-grow mr-4"></div>
      <SwitchTheme className="pointer-events-auto" />
    </div>
  );
};
