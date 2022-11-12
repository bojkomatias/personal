'use client'
import {
    ArrowRightOnRectangleIcon,
    Bars3Icon,
    BookmarkSquareIcon,
    FireIcon,
    HomeIcon,
    InboxIcon,
    UserIcon,
} from '@heroicons/react/24/outline'
import { Button, NavItem } from '@ui/Base'
import { Sidebar } from '@ui/Headless'
import { useState } from 'react'
import PocketBase from 'pocketbase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const navigation = [
    { name: 'Home', href: '#', icon: HomeIcon },
    { name: 'Trending', href: '/_/trending', icon: FireIcon },
    { name: 'Bookmarks', href: '#', icon: BookmarkSquareIcon },
    { name: 'Messages', href: '#', icon: InboxIcon },
    { name: 'Profile', href: '/_/profile', icon: UserIcon },
]

async function SignOut(refresh: any) {
    const client = new PocketBase(process.env.POCKETBASE_URL)
    client.authStore.loadFromCookie(document.cookie)

    client.authStore.onChange(() => {
        document.cookie = client.authStore.exportToCookie({ httpOnly: false })
    })
    client.authStore.clear()
    refresh()
}

export default function AdminSidebar({ user }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>
            {/* Static Sidebar on Desktop */}
            <div className="hidden md:absolute md:inset-y-4 md:flex md:w-64 md:flex-col ml-px">
                <div className="flex min-h-0 flex-1 flex-col rounded-r bg-black/10 shadow ring px-4">
                    <Nav />
                </div>
            </div>

            {/* Toggle Open Sidebar on Mobile */}
            <div className="flex flex-1 flex-col md:pl-64 md:hidden">
                <Sidebar
                    open={mobileMenuOpen}
                    setOpen={setMobileMenuOpen}
                    className="backdrop-blur-3xl bg-opacity-50 m-10 left-4 h-[95vh] rounded-l min-w-[16rem]">
                    <Nav />
                </Sidebar>
                <div className="sticky top-0 z-0 ml-5 md:hidden">
                    <Button onClick={() => setMobileMenuOpen(true)}>
                        <span className="sr-only">Open sidebar</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </Button>
                </div>
            </div>
        </>
    )
}

const Nav = () => {
    const router = useRouter()
    return (
        <nav
            aria-label="Sidebar"
            className="flex flex-col h-full text-base-600 dark:text-base-400">
            <ul className="space-y-6 flex-1 mt-10">
                {navigation.map((item) => (
                    <NavItem
                        key={item.name}
                        href={item.href}
                        activeExtra={null}
                        activeClass="bg-tone-700"
                        isEqual={true}>
                        <item.icon className=" h-6 w-6" aria-hidden="true" />
                        <span>{item.name}</span>
                    </NavItem>
                ))}
            </ul>
            <Button onClick={() => SignOut(router.refresh)}>
                <ArrowRightOnRectangleIcon className="h-6 w-6" />
                SignOut
            </Button>

            <Button
                href="/_/profile"
                className="flex flex-shrink-0 bg-black/20 mt-3 py-3 px-4 rounded mb-4">
                <div className="flex items-center">
                    <div>
                        <img
                            className="inline-block h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                    </div>
                    <div className="ml-3">
                        <p className="text-base font-medium ">Tom Cook</p>
                        <p className="text-sm font-medium opacity-50 ">
                            View profile
                        </p>
                    </div>
                </div>
            </Button>
        </nav>
    )
}
