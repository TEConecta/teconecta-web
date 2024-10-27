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

const MainLayout = ({ children }:MainLayoutProps) => {
  return (
    <div>
      <HeaderNav />
      <section className="flex w-full h-screen ">
        <SideBar />
        <main  className="flex-1 h-screen">
          {children}
        </main>
        <SideBarSuggestions />
      </section>
      <Navigation />
    </div>
  );
};
export  default MainLayout;
