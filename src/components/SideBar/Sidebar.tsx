import Image from "next/image";
import Link from "next/link";
import React from "react";
import Menu from "./Menu";

const Sidebar = () => {
  return (
    <section className="w-full">
      <Link href="/" className="flex justify-center gap-2 items-center p-3">
        <Image src="/logo.png" width={40} height={40} alt="logo" />
        <span className="hidden md:block">EduTech</span>
      </Link>
      <Menu />
    </section>
  );
};

export default Sidebar;
