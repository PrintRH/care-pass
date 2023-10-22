import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex items-center flex-col flex-grow pt-10 bg-cover bg-blend-overlay bg-[url('https://hitinfrastructure.com/images/site/article_headers/_normal/Telemedicine.jpg')]">
      <div className="px-5">
        <span className="block text-6xl text-center font-bold">Care Pass DAO</span>
      </div>
      <span className="block text-2xl text-center mb-2">Building to Accelerate Global Healthcare</span>

      <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
        <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
          <div className="flex flex-col bg-base-100 px-10 py-10 text-center font-bold items-center max-w-xs rounded-3xl">
            Patient Dashboard
            <Link href="/patient" passHref className="link">
              <div className="relative px-10 py-10">
                <Image alt="Patient logo" fill src="/Patient.png" />
              </div>
            </Link>
            <span className="italic font-normal">Access your patient dashboard here.</span>
          </div>
          <div className="flex flex-col bg-base-100 px-10 py-10 text-center font-bold items-center max-w-xs rounded-3xl">
            Doctor Dashboard
            <Link href="/doctor" passHref className="link">
              <div className="relative px-10 py-10">
                <Image alt="Doctor logo" fill src="/Doctor.png" />
              </div>
            </Link>
            <span className="italic font-normal">Access your doctor dashboard here.</span>
          </div>
          <div className="flex flex-col bg-base-100 px-10 py-10 text-center font-bold items-center max-w-xs rounded-3xl">
            Agent Dashboard
            <Link href="/doctor" passHref className="link">
              <div className="relative px-10 py-10">
                <Image alt="Agent logo" fill src="/Agent.png" />
              </div>
            </Link>
            <span className="italic font-normal">Access your agent dashboard here.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
