import { FaceSmileIcon, PhotoIcon } from '@heroicons/react/24/outline'
import TwitterIcon from '../Atoms/TwitterIcon'

const FeedForm = () => {
    return (
        <div className="flex flex-col border-b border-gray-200 p-3 space-x-3">

            <div className="divide-y divide-gray-200">
                <div className="flex">
                <TwitterIcon />
                    <textarea className="w-full border-none focus:ring-0"
                        rows={2} placeholder="What's happing?"></textarea>
            </div>


                <div className="flex justify-between items-center pt-2">
                    <div className="flex">
                        <PhotoIcon className="w-10 hoverEffect p-2 text-sky-500"></PhotoIcon>
                        <FaceSmileIcon className="w-10 hoverEffect p-2 text-sky-500"></FaceSmileIcon>
                    </div>
                    <button className="bg-[#1DA1F2] rounded-full font-bold py-1.5 px-4 text-white shadow-md
                    hover:brightness-95 disabled:opacity-50"
                    >Tweet</button>
            </div>

            </div>
        </div>
    )
}
export default FeedForm