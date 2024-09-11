"use client";

import React, { useState, ReactNode } from "react";
import Link from "next/link";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <button className="md:hidden p-2 m-4 rounded" onClick={toggleSidebar}>
        {sidebarOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>

      <nav
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 w-full h-full bg-gray-100 p-4 pt-8 transition-transform duration-300 z-10 md:sticky md:top-0 md:w-64 md:translate-x-0 md:h-screen`}
      >
        <div className="flex flex-col gap-4">
          <Link href="/" legacyBehavior>
            <a
              onClick={toggleSidebar}
              className="text-xl text-green-500 no-underline"
            >
              Cozey Packing Team
            </a>
          </Link>
          <Link href="/orders" legacyBehavior>
            <a
              onClick={toggleSidebar}
              className="text-blue-500 hover:underline no-underline"
            >
              Order List
            </a>
          </Link>
          <Link href="/products" legacyBehavior>
            <a
              onClick={toggleSidebar}
              className="text-blue-500 hover:underline no-underline"
            >
              Ordered Products
            </a>
          </Link>
        </div>
      </nav>

      <main className="flex p-4 md:p-8 w-full md:w-auto z-0">{children}</main>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-5 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Layout;
