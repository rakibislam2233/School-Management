import Sidebar from "@/components/SideBar/Sidebar";
import React from "react";

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <section className="w-full h-screen flex">
      {/* Left Side SideBar */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-neutral-100 h-screen fixed overflow-y-scroll">
        <Sidebar />
      </div>
      {/* Right Side Main Content */}
      <div className=" w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] ml-[14%] ml:w-[8%] ml:w-[16%] ml:w-[14%] bg-neutral-100">
        {children}
      </div>
    </section>
  );
};

export default DashboardLayout;
