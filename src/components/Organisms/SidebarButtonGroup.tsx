import { useState } from 'react';
import { SidebarButtonType } from '../../models/button';

import ActiveHomeIcon from 'public/ActiveIcons/ActiveHome.svg'
import ActiveBellicon from 'public/ActiveIcons/ActiveBell.svg'
import ActiveInboxIcon from "public/ActiveIcons/ActiveInbox.svg"
import ActiveBookmarkIcon from "public/ActiveIcons/ActiveBookmark.svg"
import ActiveClipboardIcon from "public/ActiveIcons/ActiveClipboard.svg"
import ActiveUserIcon from "public/ActiveIcons/ActiveUser.svg"
import ActiveEllipsisHorizontalCircleIcon from "public/ActiveIcons/ActiveEllipsisHorizontalCircle.svg"
import ActiveHashtagIcon from "public/ActiveIcons/ActiveHashtag.svg"
import SidebarButton from '../Molecules/SidebarButton';
import { BellIcon, BookmarkIcon, ClipboardIcon, EllipsisHorizontalCircleIcon, HashtagIcon, HomeIcon, InboxIcon, UserIcon }
    from '@heroicons/react/24/outline'

const SidebarButtonGroup = () => {
    const [btnActive, setBtnActive] = useState<SidebarButtonType>("Home");
    return (
        <div>
            <SidebarButton ButtonName={"Home"} Icon={HomeIcon} ActiveIcon={ActiveHomeIcon}
                btnActice={btnActive} setBtnActive={setBtnActive} />
            <SidebarButton ButtonName={"Explore"} Icon={HashtagIcon} ActiveIcon={ActiveHashtagIcon}
                btnActice={btnActive} setBtnActive={setBtnActive} />
            <SidebarButton ButtonName={"Notifications"} Icon={BellIcon} ActiveIcon={ActiveBellicon}
                btnActice={btnActive} setBtnActive={setBtnActive} />
            <SidebarButton ButtonName={"Messages"} Icon={InboxIcon} ActiveIcon={ActiveInboxIcon}
                btnActice={btnActive} setBtnActive={setBtnActive} />
            <SidebarButton ButtonName={"Bookmarks"} Icon={BookmarkIcon} ActiveIcon={ActiveBookmarkIcon}
                btnActice={btnActive} setBtnActive={setBtnActive} />
            <SidebarButton ButtonName={"Lists"} Icon={ClipboardIcon} ActiveIcon={ActiveClipboardIcon}
                btnActice={btnActive} setBtnActive={setBtnActive} />
            <SidebarButton ButtonName={"Profile"} Icon={UserIcon} ActiveIcon={ActiveUserIcon}
                btnActice={btnActive} setBtnActive={setBtnActive} />
            <SidebarButton ButtonName={"More"} Icon={EllipsisHorizontalCircleIcon} ActiveIcon={ActiveEllipsisHorizontalCircleIcon}
                btnActice={btnActive} setBtnActive={setBtnActive} />
        </div>
    )
}
export default SidebarButtonGroup