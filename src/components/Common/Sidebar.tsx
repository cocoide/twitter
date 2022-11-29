import Image from 'next/image'
import { BellIcon, BookmarkIcon, ClipboardIcon, EllipsisHorizontalCircleIcon, HashtagIcon, HomeIcon, InboxIcon, UserIcon } from '@heroicons/react/24/outline'
import SidebarItem from '../Atoms/SidebarItem'
import TweetButton from '../Atoms/TweetButton'
import MicroProfile from '../Atoms/MIcroProfile'

const Sidebar = () => {
    return (
        <div className='hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24'>
            <Image src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" alt="twitterIcon"
                height={58} width={58} className="mb-10 hover:bg-blue-100 rounded-full
                cursor-pointer" />

            <SidebarItem text={"Home"} Icon={HomeIcon} active={true} />
            <SidebarItem text={"Explore"} Icon={HashtagIcon} active={false} />
            <SidebarItem text={"Notifications"} Icon={BellIcon} active={false} />
            <SidebarItem text={"Messages"} Icon={InboxIcon} active={false} />
            <SidebarItem text={"BookmarkIcon"} Icon={BookmarkIcon} active={false} />
            <SidebarItem text={"Lists"} Icon={ClipboardIcon} active={false} />
            <SidebarItem text={"Profile"} Icon={UserIcon} active={false} />
            <SidebarItem text={"More"} Icon={EllipsisHorizontalCircleIcon} active={false} />

            <TweetButton />
            <MicroProfile />
        </div>
    )
}
export default Sidebar