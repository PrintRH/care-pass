import Link from "next/link";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <h1>
        Hospital DAO <Link href="/Upload">Upload Here!</Link>
      </h1>
      <div className="drawer drawer-open">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/profile">Profile</Link>
            <Link href="/table">Table</Link>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
