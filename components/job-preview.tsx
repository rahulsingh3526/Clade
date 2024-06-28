import React from "react";
import { Button } from "./ui/button";
import { CompanyDetails } from "./company-details";
import badge from "../public/icons/Badge.png";
import Image from "next/image";
import location from "../public/icons/Icon (5).png";
import salary from "../public/icons/Icon (6).png";
import { Separator } from "@/components/ui/separator";
import adobeillustrator from "../public/icons/Tag (2).png";
import adobe from "../public/icons/Tag (1).png";
import figma from "../public/icons/Tag.png";
import trash from "../public/icons/trash-03.png";
import edit from "../public/icons/Icon (1).png";
import users from "../public/icons/users-01.png";
import usercheck from "../public/icons/user-check-01.png";
import messages from "../public/icons/message-square-01.png";
import eye from "../public/icons/eye.png";

export const JobPreview = () => {
  return (
    <div className="flex w-full min-h-screen">
      <div className="w-3/4 ">
        <div className="flex flex-col gap-y-4 max-w-[623px] mb-4">
          <div className="flex justify-start items-center gap-x-3">
            {" "}
            <p className="text-2xl font-bold">Senior Product Designer</p>
            <p className="text-sm text-neutral-400">posted 4 days ago</p>
            <Image src={badge} alt="status" />
          </div>
          <div className="flex gap-x-8">
            <div className="flex justify-center items-center gap-x-3">
              {" "}
              <span>
                <Image src={location} alt="location" width={16} height={16} />
              </span>
              <p>Delaware</p>
            </div>
            <div className="flex justify-center items-center gap-x-3">
              {" "}
              <span>
                <Image src={salary} alt="location" width={16} height={16} />
              </span>
              <p>300K -400k</p>
            </div>
          </div>
        </div>
        <Separator className="h-[2px] " />
        <div className="flex gap-8 my-4">
          <div className="flex flex-col space-y-2">
            <p className="text-xs text-neutral-400 ">Skills Required</p>
            <div className="space-y-2">
              {" "}
              <Image src={adobeillustrator} alt="adobe illustration" />
              <Image src={adobe} alt="adobe" />
              <Image src={figma} alt="figma" />
            </div>
          </div>{" "}
          <div className="space-y-2">
            <p className="text-xs text-neutral-400">Preferred Language</p>
            <p className="text-sm font-semibold">English</p>
          </div>{" "}
          <div className="space-y-2">
            <p className="text-xs text-neutral-400">Type</p>
            <p className="text-sm font-semibold">Full time</p>
          </div>{" "}
          <div className="space-y-2">
            <p className="text-xs text-neutral-400">Years of Experience</p>
            <p className="text-sm font-semibold">3+ Years of Experience</p>
          </div>{" "}
        </div>
        <Separator className="h-[2px] " />
        <div className="my-3">
          <p className="text-xs text-neutral-400 py-2">About the job</p>
          <ol className="space-y-[6px] ">
            <li className="text-sm">1.Handle the UI/Ux research design</li>
            <li className="text-sm">
              2.Work on researchign on latest web applications designs and
              trends
            </li>
            <li className="text-sm">
              3.Work on conceptualizing and visualizing{" "}
            </li>
            <li className="text-sm">
              4.Work on creaeing graphic content and other graphic related work
            </li>
          </ol>
          <p className="p-1">Benefits:</p>
          <ul className="list-disc space-y-1 ml-8">
            <li className="text-sm">Health Insurance</li>
            <li className="text-sm">Provident Fund</li>
          </ul>
          <p className="p-1">Schedule:</p>
          <ul className="list-disc space-y-1 ml-8">
            <li className="text-sm">Day shift</li>
          </ul>
          <p className="p-1">Supplemental papy types:</p>
          <ul className="list-disc space-y-1 ml-8">
            <li className="text-sm">Performance bonus</li>
            <li className="text-sm">yearly bonus</li>
          </ul>
        </div>
        <Separator className="h-[2px] my-4" />
        <div>
          <CompanyDetails />
        </div>
      </div>

      <div className="w-1/4 bg-neutral-100 ">
        <div className="flex justify-center items-center space-x-4">
          {" "}
          <Button
            variant="outline"
            className="border-orange-500 border-2 space-x-1 text-xs max-w-[172px] bg-orange-500/20"
            size="lg"
          >
            <span>
              <Image src={trash} alt="trash" height={40} width={40} />
            </span>
            <p className="text-orange-500 ">delete job</p>
          </Button>
          <Button
            variant="default"
            size="lg"
            className="max-w-[172px] space-x-1"
          >
            <span>
              <Image src={edit} alt="trash" />
            </span>
            <p className="text-xs">Edit job</p>
          </Button>
        </div>
        <div>
          <div className="flex justify-around py-4">
            {" "}
            <div className="flex space-x-2 justify-center items-center ">
              {" "}
              <Image src={users} alt="users" width={20} height={12} />
              <p className="text-sm">Applicants</p>
            </div>
            <p>400</p>
          </div>
          <div className=" h-2 w-full flex justify-center">
            {" "}
            <Separator className="h-[2px] max-w-[260px] flex self-auto" />
          </div>{" "}
          <div className="flex justify-around py-4">
            {" "}
            <div className="flex space-x-2 justify-center items-center ">
              {" "}
              <Image src={usercheck} alt="users" width={20} height={12} />
              <p className="text-sm">Matches</p>
            </div>
            <p>100</p>
          </div>
          <div className=" h-2 w-full flex justify-center">
            {" "}
            <Separator className="h-[2px] max-w-[260px] flex self-auto" />
          </div>{" "}
          <div className="flex justify-around py-4">
            {" "}
            <div className="flex space-x-2 justify-center items-center ">
              {" "}
              <Image src={messages} alt="users" width={20} height={12} />
              <p className="text-sm">Messages</p>
            </div>
            <p>147</p>
          </div>
          <div className=" h-2 w-full flex justify-center">
            {" "}
            <Separator className="h-[2px] max-w-[260px] flex self-auto" />
          </div>{" "}
          <div className="flex justify-around py-4">
            {" "}
            <div className="flex space-x-2 justify-center items-center ">
              {" "}
              <Image src={eye} alt="users" width={20} height={12} />
              <p className="text-sm">Views</p>
            </div>
            <p>800</p>
          </div>
          <div className=" h-2 w-full flex justify-center">
            {" "}
            <Separator className="h-[2px] max-w-[260px] flex self-auto" />
          </div>{" "}
        </div>
      </div>
    </div>
  );
};
