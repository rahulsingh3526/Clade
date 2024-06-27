import React from "react";
import { Button } from "./ui/button";

export const JobPreview = () => {
  return (
    <div className="flex w-full min-h-screen">
      <div className="w-3/4 ">
        <div className="flex flex-col">
          <div className="flex">
            {" "}
            <p>Senior Product Designer</p>
            <p>psoted 2 days ago</p>
          </div>
          <div className="flex">
            <p>Delaware</p>
            <p>300K -400k</p>
          </div>
        </div>
        <div className="flex gap-12">
          <div className="flex flex-col">
            <p>Skilles Required</p>
            <p>figma</p>
            <p>figma</p>
            <p>figma</p>
          </div>{" "}
          <div>
            <p>Preferred Language</p>
            <p>English</p>
          </div>{" "}
          <div>
            {" "}
            <p>Type</p>
          </div>{" "}
          <div> Years of Experience</div>{" "}
        </div>
        <div>
          <p>About the job</p>

          <ol>
            <li>Handle the UI/Ux research design</li>
            <li>
              Work on researchign on latest web applications designs and trends
            </li>
            <li>Work on conceptualizing and visualizing </li>
            <li>
              Work on creaeing graphic content and other graphic related work
            </li>
          </ol>
          <p>Benefits:</p>
          <ul>
            <li>Healt Insurance</li>
            <li>Provident Fund</li>
          </ul>
          <p>Schedule:</p>
          <ul>
            <li>Day shift</li>
          </ul>
          <p>Schedule:</p>
          <ul>
            <li>Performance bonus</li>
            <li>yearly bonus</li>
          </ul>
        </div>
      </div>
      <div className="w-1/4 ">
        <Button variant="outline" className="border-orange-500 border-2">
          button
        </Button>
        <Button variant="default">button</Button>
      </div>
    </div>
  );
};
