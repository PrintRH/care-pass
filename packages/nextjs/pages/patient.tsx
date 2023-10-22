import Link from "next/link";
import { NextPage } from "next";

const Patient: NextPage = () => {
  return (
    <div>
      <Link href="/upload" passHref className="link">
        File Upload
      </Link>
    </div>
  );
};

export default Patient;
