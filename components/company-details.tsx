import React from "react";
import Image from "next/image";
import atlassian from "../public/icons/Rectangle 43.png";

export const CompanyDetails = () => {
  return (
    <div>
      <div>
        <Image src={atlassian} alt={"company image"} />
      </div>

      <div className="flex">
        <div className="flex flex-col">
          <p>Company size</p>
          <p>1k-2k Employees</p>
        </div>
        <div className="flex flex-col">
          <p>Type</p>
          <p>Private</p>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col">
          <p>Company size</p>
          <p>1k-2k Employees</p>
        </div>
        <div className="flex flex-col">
          <p>Type</p>
          <p>Private</p>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col">
          <p>Company size</p>
          <p>1k-2k Employees</p>
        </div>
        <div className="flex flex-col">
          <p>Type</p>
          <p>Private</p>
        </div>
      </div>
    </div>
  );
};
