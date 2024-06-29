"use client";
import { SquareMenu } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import jobs from "../public/icons/Icon (2).png";
import messages from "../public/icons/Icon (3).png";
import payments from "../public/icons/Icon (4).png";
import { BellDot } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

import atlassian from "../public/icons/Rectangle 43.png";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-2 px-1 md:px-8 ">
      <div>
        <Button variant="link">Logo</Button>
      </div>

      <Sheet>
        <SheetTrigger className="md:hidden block">
          {" "}
          <div className="flex justify-center items-center gap-x-2">
            {" "}
            <SquareMenu color="grey" />{" "}
            <p className="text-neutral-400">Mini Nav</p>
          </div>
        </SheetTrigger>
        <SheetContent side="top">
          <Menubar className="rounded-full flex max-w-[380px]">
            <MenubarMenu>
              <MenubarTrigger className="rounded-full text-neutral-400 gap-x-1">
                <Image src={jobs} alt="job image" height="16" width="16" />
                <p> Jobs</p>
              </MenubarTrigger>
              <MenubarContent>
                <MenubarSub>
                  <MenubarSubTrigger>Share</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Email link</MenubarItem>
                    <MenubarItem>Messages</MenubarItem>
                    <MenubarItem>Notes</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarItem>
                  Print... <MenubarShortcut>⌘P</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger className="rounded-full text-neutral-400 gap-x-1">
                <Image src={messages} alt="job image" height="16" width="16" />

                <p>Messages</p>
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger className="rounded-full text-neutral-400 gap-x-1">
                <Image src={payments} alt="job image" height="16" width="16" />

                <p> Payments</p>
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem inset>
                  Reload <MenubarShortcut>⌘R</MenubarShortcut>
                </MenubarItem>
                <MenubarItem disabled inset>
                  Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </SheetContent>
      </Sheet>

      <div className="hidden md:block">
        <Menubar className="rounded-full">
          <MenubarMenu>
            <MenubarTrigger className="rounded-full text-neutral-400 gap-x-1">
              <Image src={jobs} alt="job image" height="16" width="16" />
              <p> Jobs</p>
            </MenubarTrigger>
            <MenubarContent>
              <MenubarSub>
                <MenubarSubTrigger>Share</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Email link</MenubarItem>
                  <MenubarItem>Messages</MenubarItem>
                  <MenubarItem>Notes</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>
                Print... <MenubarShortcut>⌘P</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="rounded-full text-neutral-400 gap-x-1">
              <Image src={messages} alt="job image" height="16" width="16" />

              <p>Messages</p>
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Undo <MenubarShortcut>⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="rounded-full text-neutral-400 gap-x-1">
              <Image src={payments} alt="job image" height="16" width="16" />

              <p> Payments</p>
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem inset>
                Reload <MenubarShortcut>⌘R</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled inset>
                Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
      <div>
        <Select>
          <SelectTrigger className="border-none gap-x-2">
            <BellDot />
            <Image src={atlassian} alt="profile" className="rounded-full " />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Profile</SelectItem>
            <SelectItem value="dark">Account</SelectItem>
            <SelectItem value="system">Details</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
