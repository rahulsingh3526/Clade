import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { JobPreview } from "@/components/job-preview";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Tabs defaultValue="jobs" className="w-full py-4 pl-16 ">
        <TabsList className="">
          <TabsTrigger value="jobs">Job preview</TabsTrigger>
          <TabsTrigger value="applicants">Applicants</TabsTrigger>
          <TabsTrigger value="match">Match</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>
        <Separator className="h-[2px]  flex self-auto" />
        <TabsContent value="jobs">
          <JobPreview />
        </TabsContent>
        <TabsContent value="applicants">Your Applicants Data</TabsContent>
        <TabsContent value="match">Your Match Data</TabsContent>
        <TabsContent value="messages">Your Messages data</TabsContent>
      </Tabs>
    </main>
  );
}
