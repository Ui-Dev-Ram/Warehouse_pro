'use client'
import React, { useState } from 'react';

const FeaturesServices: React.FC = () => {

    const [activeTab, setActiveTab] = useState<string>('app');

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
      };
  return (
    <div>
<div className="w-2/3">
      <div className="relative right-0">
        <ul
          className="relative flex flex-wrap p-1 list-none rounded-xl bg-blue-gray-50/60"
          data-tabs="tabs"
          role="list"
        >
          <li className="z-30 flex-auto text-center">
            <a
              className={`z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit ${
                activeTab === 'app' ? 'text-blue-700' : 'text-slate-700'
              }`}
              onClick={() => handleTabClick('app')}
              role="tab"
              aria-selected={activeTab === 'app' ? 'true' : 'false'}
              aria-controls="app"
            >
              <span className="ml-1">App</span>
            </a>
          </li>
          <li className="z-30 flex-auto text-center">
            <a
              className={`z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit ${
                activeTab === 'message' ? 'text-blue-700' : 'text-slate-700'
              }`}
              onClick={() => handleTabClick('message')}
              role="tab"
              aria-selected={activeTab === 'message' ? 'true' : 'false'}
              aria-controls="message"
            >
              <span className="ml-1">Messages</span>
            </a>
          </li>
          <li className="z-30 flex-auto text-center">
            <a
              className={`z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit ${
                activeTab === 'settings' ? 'text-blue-700' : 'text-slate-700'
              }`}
              onClick={() => handleTabClick('settings')}
              role="tab"
              aria-selected={activeTab === 'settings' ? 'true' : 'false'}
              aria-controls="settings"
            >
              <span className="ml-1">Settings</span>
            </a>
          </li>
        </ul>
        <div className="p-5">
          <div
            className={`block ${activeTab === 'app' ? 'opacity-100' : 'opacity-0'}`}
            id="app"
            role="tabpanel"
          >
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500">
              Because it's about motivating the doers. Because I'm here to follow
              my dreams and inspire other people to follow their dreams, too.
            </p>
          </div>
          <div
            className={`block ${activeTab === 'message' ? 'opacity-100' : 'opacity-0'}`}
            id="message"
            role="tabpanel"
          >
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500">
              The reading of all good books is like a conversation with the finest
              minds of past centuries.
            </p>
          </div>
          <div
            className={`block ${activeTab === 'settings' ? 'opacity-100' : 'opacity-0'}`}
            id="settings"
            role="tabpanel"
          >
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500">
              Comparing yourself to others is the thief of joy.
            </p>
          </div>
        </div>
      </div>
    </div>  

    </div>
  )
}

export default FeaturesServices