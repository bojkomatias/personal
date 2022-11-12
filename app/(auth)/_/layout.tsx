import {
    BookmarkSquareIcon,
    FireIcon,
    HomeIcon,
    InboxIcon,
    UserIcon,
} from '@heroicons/react/24/outline'
import { Button, Heading, NavItem } from '@ui/Base'
import AdminSidebar from './Sidebar'
import PocketBase from 'pocketbase'

const user = {
    name: 'Emily Selman',
    email: 'emily.selman@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    { name: 'Home', href: '/_', icon: HomeIcon },
    { name: 'Trending', href: '/_/trending', icon: FireIcon },
    { name: 'Bookmarks', href: '#', icon: BookmarkSquareIcon },
    { name: 'Messages', href: '#', icon: InboxIcon },
    { name: 'Profile', href: '/_/profile', icon: UserIcon },
]

import { cookies } from 'next/headers'
import SignIn from './SignIn'

async function AskForCookie() {
    const cook = cookies()

    console.log(cook.get('pb_auth')?.value)
    return cook.get('pb_auth')?.value
}

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const res = await AskForCookie()
    if (!res) {
        return <SignIn />
    }
    return (
        <div className="min-h-[80vh] relative">
            <AdminSidebar user={res} />
            <main className="md:pl-64">
                <div className="py-6">
                    <Heading title={'Holanda'} description={''} />
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                        {/* Replace with your content */}
                        {children}
                        {/* /End replace */}
                    </div>
                </div>
            </main>
        </div>
    )
}
