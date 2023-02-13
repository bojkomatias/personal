"use client";
import {
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  FireIcon,
  HomeIcon,
  InboxIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Sidebar } from "@ui/Headless";
import { useState } from "react";
import PocketBase from "pocketbase";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@ui/Button";
import { NavItem } from "@ui/Nav";
import { SignOut } from "@api/_client";
import Image from "next/image";

export default function AdminSidebar({ user }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Static Sidebar on Desktop */}
      {/* <div className="hidden md:absolute md:inset-y-4 md:flex md:w-64 md:flex-col ml-px">
        <div className="flex min-h-0 flex-1 flex-col rounded-r bg-black/10 shadow ring px-4">
          <Nav user={user} />
        </div>
      </div> */}

      {/* Toggle Open Sidebar on Mobile */}
      <div className="flex-1 flex-col pl-64 hidden">
        <Sidebar open={mobileMenuOpen} setOpen={setMobileMenuOpen}>
          <Nav user={user} />
        </Sidebar>
        <div className="sticky top-0 z-0 ml-5 hidden border">
          <Button onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </>
  );
}

const Nav = ({ user }) => {
  console.log(user);
  const router = useRouter();
  return (
    <nav
      aria-label="Sidebar"
      className="flex flex-col h-full text-base-600 dark:text-base-400"
    >
      <ul className="space-y-6 flex-1 mt-10">
        {/* {.map((item) => (
          <NavItem
            key={item.name}
            href={item.href}
            activeExtra={null}
            isEqual={true}
          >
            <item.icon className=" h-6 w-6" aria-hidden="true" />
            <span>{item.name}</span>
          </NavItem>
        ))} */}
      </ul>
      <Button onClick={() => SignOut(() => router.push("/"))}>
        <ArrowRightOnRectangleIcon className="h-6 w-6" /> Sign Out
      </Button>

      <Button
        href="/_/profile"
        className="flex flex-shrink-0 bg-black/20 mt-3 py-3 px-4 rounded mb-4"
      >
        <div className="flex items-center">
          <div>
            <Image
              className="inline-block h-10 w-10 object-cover rounded-full"
              src={`http://127.0.0.1:8090/api/files/profiles/${user.id}/${user.avatar}`}
              alt=""
              width={50}
              height={50}
            />
          </div>
          <div className="ml-3">
            <p className="text-base font-medium ">{user.username}</p>
            <p className="text-sm font-medium opacity-50 ">View profile</p>
          </div>
        </div>
      </Button>
    </nav>
  );
};
