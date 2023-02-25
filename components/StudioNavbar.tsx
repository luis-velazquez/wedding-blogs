import Link from "next/link";
import { ArrowUturnDownIcon } from "@heroicons/react/24/solid";

import React from "react";

function StudioNavbar(props: any) {
  return (
    <>
      <div className="flex items-center justify-between p-5">
        <Link href={"/"} className="text-cyan-400 flex items-center">
          <ArrowUturnDownIcon className="h-6 w-6 text-cyan-400 mr-2" />
          Go To Website
        </Link>

        <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-cyan-300">
          <h1 className="font-bold text-white">
            {" "}
            Want Coding Challenger & solutions sent to your inbox daily? 👉
          </h1>
          <Link href="https://www.luisvelazquez.me/" className="text-white font-bold ml-2">
          www.luisvelazquez.me
          </Link>
        </div>
      </div>
      <div>{props.renderDefault(props)}</div>
    </>
  );
}

export default StudioNavbar;
