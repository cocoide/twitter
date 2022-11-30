import { buttonNameType } from '../Templates/Sidebar';
import { useState } from 'react';
import SidebarButtonItem from '../Molecules/SidebarButtonItem';

import HomeIconActive from 'public/IconActive/HomeActive.svg'
import BellIconActive from "public/IconActive/BellActive.svg"
import InboxIconActive from "public/IconActive/InboxActive.svg"
import BookmarkIconActive from "public/IconActive/BookmarkActive.svg"
import ClipboardIconActive from "public/IconActive/ClipboardActive.svg"
import UsericonActive from "public/IconActive/UserActive.svg"
import EllipsisHorizontalCircleIconActive from "public/IconActive/EllipsisHorizontalCircleActive.svg"
import HashtagiconActive from "public/IconActive/HashtagActive.svg"

import {
    BellIcon,
    BookmarkIcon,
    ClipboardIcon,
    EllipsisHorizontalCircleIcon,
    HashtagIcon, HomeIcon,
    InboxIcon,
    UserIcon
} from '@heroicons/react/24/outline'


const SidebarButtonGroup = () => {
    const [btnActive, setBtnActive] = useState<buttonNameType>("Home");
    return (
        <div>
            <SidebarButtonItem buttonName={"Home"} Icon={HomeIcon} IconActive={HomeIconActive}
                btnActice={btnActive} setBtnActive={setBtnActive} />
            <SidebarButtonItem buttonName={"Explore"} Icon={HashtagIcon} IconActive={HashtagiconActive}
                btnActice={btnActive} setBtnActive={setBtnActive} />
            <SidebarButtonItem buttonName={"Notifications"} Icon={BellIcon} IconActive={BellIconActive}
                btnActice={btnActive} setBtnActive={setBtnActive} />
            <SidebarButtonItem buttonName={"Messages"} Icon={InboxIcon} IconActive={InboxIconActive}
                btnActice={btnActive} setBtnActive={setBtnActive} />
            <SidebarButtonItem buttonName={"Bookmarks"} Icon={BookmarkIcon} IconActive={BookmarkIconActive}
                btnActice={btnActive} setBtnActive={setBtnActive} />
            <SidebarButtonItem buttonName={"Lists"} Icon={ClipboardIcon} IconActive={ClipboardIconActive}
                btnActice={btnActive} setBtnActive={setBtnActive} />
            <SidebarButtonItem buttonName={"Profile"} Icon={UserIcon} IconActive={UsericonActive}
                btnActice={btnActive} setBtnActive={setBtnActive} />
            <SidebarButtonItem buttonName={"More"} Icon={EllipsisHorizontalCircleIcon} IconActive={EllipsisHorizontalCircleIconActive}
                btnActice={btnActive} setBtnActive={setBtnActive} />
        </div>
    )
}
export default SidebarButtonGroup