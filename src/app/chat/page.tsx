import React from 'react';
import Chat from './components/Chat';
import ContactList from './components/ContactList';
import { SideBar } from '../posts/components';

const Page = () => {
  return (
    <div className="flex h-screen">
      {/* SideBar - solo visible en pantallas grandes */}
      <div className="hidden lg:block">
        <SideBar />
      </div>

      {/* ContactList - solo visible en pantallas grandes */}
      <div className="hidden lg:block w-1/4 border-r border-gray-300 overflow-y-auto">
        <ContactList />
      </div>

      {/* Chat - visible en todas las pantallas */}
      <div className="flex-1">
        <Chat />
      </div>
    </div>
  );
};

export default Page;
