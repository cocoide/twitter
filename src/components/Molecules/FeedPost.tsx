import { BookmarkIcon, ChartBarIcon, ChatBubbleOvalLeftEllipsisIcon, EllipsisHorizontalIcon, HeartIcon, ShareIcon, TrashIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { FeedPostType } from '../../models/post'

const FeedPost = (props: FeedPostType) => {
    return (
        <div className="flex p-3 cursor-pointer border-b border-gray-200">

            {/* User image */}
            <Image src={props.userImage} alt='user-img' height={70} width={70}
                className="h-12 w-12 rounded-full mr-4" />

            {/* Right side start*/}
            <div className="">


                {/* Header*/}
                <div className="flex items-center justify-between">
                    {/* User Imformation */}
                    <div className="flex items-center space-x-2">
                        <h4 className="font-bold text-[15px} sm:text-[16px] hover:underline">{props.name}</h4>
                        <span className="text-sm sm:text-[16px]">@{props.username}</span>
                        <span className="text-sm sm:text-[16px] hover:underline">{props.timestamp}</span>
                    </div>


                    {/* Dot icon */}
                    <div className="hoverEffect h-10 w-10 hover:bg-sky-100 hover:text-sky-500">
                        <EllipsisHorizontalIcon className='h-10' />
                    </div>

                </div>

                {/* Post text */}
                <div className="text-gray-800 text-[15px} mb-2">{props.text}</div>

                {/* Post image*/}
                <Image src={props.img} alt='post-img' height={200} width={600} className="rounded-xl mr-2" />

                {/* Footer button */}
                <div className="flex justify-between p-2 text-gray-600">
                    <ChatBubbleOvalLeftEllipsisIcon className="h-9 w-9 p-2 hoverEffect hover:bg-sky-100 hover:text-sky-500" />
                    <TrashIcon className="h-9 w-9 p-2 hoverEffect hover:bg-red-100 hover:text-red-600" />
                    <HeartIcon className="h-9 w-9 p-2 hoverEffect hover:bg-red-100 hover:text-red-600" />
                    <ShareIcon className="h-9 w-9 hoverEffect p-2 hover:bg-sky-100 hover:text-sky-500" />
                    <ChartBarIcon className="h-9 w-9 p-2 hoverEffect hover:bg-sky-100 hover:text-sky-500" />
                </div>

                {/* Right side ended */}
            </div>

        </div >
    )
}
export default FeedPost