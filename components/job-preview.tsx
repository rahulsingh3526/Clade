import React from "react";
import { Button } from "./ui/button";
import { SquareMousePointer } from "lucide-react";
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
import LetterPullup from "./magicui/letter-pullup";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "./sidebar";

export const JobPreview = () => {
  return (
    <div className="flex w-full min-h-screen">
      <div className="w-full lg:w-3/4 ">
        <div className="flex flex-col  space-y-3 pb-4 ">
          <div className="flex flex-col items-center md:flex-row md:justify-start  md:items-center md:gap-x-3 gap-y-1">
            <LetterPullup
              className="text-2xl font-bold"
              words="Senior Product Designer"
            />

            <p className="text-sm text-neutral-400">posted 4 days ago</p>
            <div className="flex flex-wrap gap-3 md:gap-0">
              <div className="md:w-auto flex items-center gap-x-3">
                <Image src={badge} alt="status" width={80} height={40} />
              </div>
            </div>
          </div>
          <div className="flex gap-x-8 justify-center md:justify-start items-center">
            <div className="flex justify-start items-center gap-x-3">
              <Image src={location} alt="location" width={16} height={16} />
              <p className="text-sm text-neutral-400">Delaware</p>
            </div>
            <div className="flex justify-start items-center gap-x-3">
              <Image src={salary} alt="location" width={16} height={16} />
              <p className="text-sm text-neutral-400">$300K - $400k</p>
            </div>
          </div>
        </div>
        <Separator className="h-[2px] " />
        <div className="flex  justify-center md:justify-start gap-8 my-4">
          <div className="flex flex-col space-y-2">
            <p className="text-xs text-neutral-400 ">Skills Required</p>
            <div className="space-y-2">
              {" "}
              <Image src={adobeillustrator} alt="adobe illustration" />
              <Image src={adobe} alt="adobe" />
              <Image src={figma} alt="figma" />
            </div>
          </div>{" "}
          <div className="flex flex-col md:flex-row gap-x-8">
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

      <Sheet>
        <SheetTrigger className=" md:hidden fixed right-0 top-[30%]">
          <SquareMousePointer
            size={50}
            color="white"
            className="bg-orange-500 m-2 rounded-sm p-2"
          />
        </SheetTrigger>
        <SheetContent>
          <Sidebar />
        </SheetContent>
      </Sheet>

      <div className=" hidden xl:block w-1/4 bg-neutral-100 ">
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
