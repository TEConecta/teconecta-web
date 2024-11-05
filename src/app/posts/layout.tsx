"use client";
import React from "react";
import {
  HeaderNav,
  Navigation,
  SideBar,
  SideBarSuggestions,
} from "./components";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <HeaderNav />
      <section className="flex w-full h-[92vh] ">
        <SideBar />
        <main className="flex-1">{children}</main>
        <SideBarSuggestions />
      </section>
      <Navigation />
    </div>
  );
};
export default MainLayout;
