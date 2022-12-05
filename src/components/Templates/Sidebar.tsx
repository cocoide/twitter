import TweetButton from '../Atoms/TweetButton'
import TwitterIcon from '../Atoms/TwitterIcon';
import SidebarProfile from '../Organisms/SidebarProfile';
import SidebarButtonGroup from '../Organisms/Sidebars/SidebarButtonGroup';

const Sidebar = () => {
    return (
        <div className='hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24'>

            <TwitterIcon />
            <SidebarButtonGroup />
            <TweetButton />
            <SidebarProfile />

        </div>
    )
}
export default Sidebar