import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import users from "../public/icons/users-01.png";
import usercheck from "../public/icons/user-check-01.png";
import messages from "../public/icons/message-square-01.png";
import eye from "../public/icons/eye.png";
import trash from "../public/icons/trash-03.png";
import edit from "../public/icons/Icon (1).png";
import { Separator } from "./ui/separator";

export const Sidebar = () => {
  return (
    <div>
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
        <Button variant="default" size="lg" className="max-w-[172px] space-x-1">
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
  );
};
