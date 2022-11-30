import { BellIcon, BookmarkIcon, ClipboardIcon, EllipsisHorizontalCircleIcon, HashtagIcon, HomeIcon, HomeModernIcon, InboxIcon, UserIcon } from '@heroicons/react/24/outline'
import SidebarItem from '../Atoms/SidebarItem'
import TweetButton from '../Atoms/TweetButton'
import { useState } from 'react';
import TwitterIcon from '../Atoms/TwitterIcon';
import MicroProfile from '../Atoms/MicroProfile';

import HomeIconActive from 'public/IconActive/HomeActive.svg'
import BellIconActive from "public/IconActive/BellActive.svg"
import InboxIconActive from "public/IconActive/InboxActive.svg"
import BookmarkIconActive from "public/IconActive/BookmarkActive.svg"
import ClipboardIconActive from "public/IconActive/ClipboardActive.svg"
import UsericonActive from "public/IconActive/UserActive.svg"
import EllipsisHorizontalCircleIconActive from "public/IconActive/EllipsisHorizontalCircleActive.svg"
import HashtagiconActive from "public/IconActive/HashtagActive.svg"

export type buttonNameType = "Home" | "Explore" | "Notifications"
    | "Messages" | "Bookmarks" | "Lists" | "Profile" | "More"

const Sidebar = () => {
    const [btnActive, setBtnActive] = useState<buttonNameType>("Home");
    return (
        <div className='hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24'>

            <TwitterIcon mb={"10"} />

            <SidebarItem buttonName={"Home"} Icon={HomeIcon} IconActive={HomeIconActive}
                btnActice={btnActive} setBtnActive={setBtnActive} />
            <SidebarItem buttonName={"Explore"} Icon={HashtagIcon} IconActive={HashtagiconActive}
                btnActice={btnActive} setBtnActive={setBtnActive} />
            <SidebarItem buttonName={"Notifications"} Icon={BellIcon} IconActive={BellIconActive}
                btnActice={btnActive} setBtnActive={setBtnActive} />
            <SidebarItem buttonName={"Messages"} Icon={InboxIcon} IconActive={InboxIconActive}
                btnActice={btnActive} setBtnActive={setBtnActive} />
            <SidebarItem buttonName={"Bookmarks"} Icon={BookmarkIcon} IconActive={BookmarkIconActive}
                btnActice={btnActive} setBtnActive={setBtnActive} />
            <SidebarItem buttonName={"Lists"} Icon={ClipboardIcon} IconActive={ClipboardIconActive}
                btnActice={btnActive} setBtnActive={setBtnActive} />
            <SidebarItem buttonName={"Profile"} Icon={UserIcon} IconActive={UsericonActive}
                btnActice={btnActive} setBtnActive={setBtnActive} />
            <SidebarItem buttonName={"More"} Icon={EllipsisHorizontalCircleIcon} IconActive={EllipsisHorizontalCircleIconActive}
                btnActice={btnActive} setBtnActive={setBtnActive} />

            <TweetButton />

            <MicroProfile />
        </div>
    )
}
export default Sidebar