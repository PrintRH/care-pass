import Upload from "./upload";
import { NextPage } from "next";

const Patient: NextPage = () => {
  return (
    <div>
      <div className="mt-10 flex pl-6 gap-2 max-w-2xl">
        <div className="flex gap-5 bg-black bg-opacity-80 z-0 rounded-2xl shadow-lg">
          <span className="pl-4 pt-4 text-3xl">👋🏻</span>
          <div>
            <div className="pl-4 pt-4 text-white">Welcome back to Care Pass DAO.</div>
            <span className="pl-4 pt-4 text-white leading-loose"> Upload your file below: </span>
            <div className="p-6">
              <button
                type="button"
                className="inline-block rounded bg-primary pl-6 pb-6 pt-6 text-s font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <Upload />
              </button>
            </div>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-m px-10 py-2 text-center ml-4 mr-4 mb-8 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <div>Vote</div>
          </button>
          <button
            type="button"
            className="bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-m px-7 py-2 text-center ml-4 mr-4 mb-8 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <div>Propose</div>
          </button>
          <button
            type="button"
            className="bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-m px-7 py-2 text-center ml-4 mr-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <div>Execute</div>
          </button>
        </div>
      </div>
      <h2 className="pt-6 pl-6 pr-6 relative flex w-full flex-wrap items-stretch mb-3">
        <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-lg items-center justify-center w-8 pl-3 py-3">
          <i className="fas fa-lock"></i>
        </span>
        <input
          type="text"
          placeholder="Message Your Caregiver:"
          className="px-3 py-4 placeholder-blueGray-300 text-black relative bg-white bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full pl-10"
        />
      </h2>
    </div>
  );
};

export default Patient;
