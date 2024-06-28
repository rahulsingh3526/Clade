import React from "react";
import Image from "next/image";
import atlassian from "../public/icons/Rectangle 43.png";

export const CompanyDetails = () => {
  return (
    <div className="space-y-2">
      <div>
        <Image src={atlassian} alt={"company image"} />
      </div>

      <div className="flex gap-x-20">
        {" "}
        <div className="flex flex-col space-y-2">
          <div className="flex flex-col">
            <p className="text-xs text-neutral-400 ">Company size</p>

            <p className="text-sm">1k-2k Employees</p>
          </div>
          <div className="flex flex-col">
            <p className="text-xs text-neutral-400 ">Sector</p>
            <p className="text-sm">Information Technology Infrastructure</p>
          </div>
          <div className="flex flex-col">
            <p className="text-xs text-neutral-400 ">Founded in</p>
            <p className="text-sm">2019</p>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex flex-col">
            <p className="text-xs text-neutral-400 ">Funding</p>
            <p className="text-sm">Bootstrapped</p>
          </div>
          <div className="flex flex-col">
            <p className="text-xs text-neutral-400 ">Type</p>
            <p className="text-sm">Private</p>
          </div>
          <div className="flex flex-col">
            <p className="text-xs text-neutral-400 ">Founded By</p>
            <p className="text-sm">Scott Farquhar, Mike Cannon</p>
          </div>
        </div>
      </div>
    </div>
  );
};
