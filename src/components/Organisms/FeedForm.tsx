import { FaceSmileIcon, PhotoIcon } from '@heroicons/react/24/outline'
import TwitterIcon from '../Atoms/TwitterIcon'

const FeedForm = () => {
    return (
        <div className="flex flex-col border-b border-gray-200 p-3 space-x-3">


            <div className="flex flex-row">
                <TwitterIcon />
                <textarea rows={2} className="w-full" placeholder="What's happing?"></textarea>
            </div>


            <div className="flex flex-row">
                <PhotoIcon className="w-10"></PhotoIcon>
                <FaceSmileIcon className="w-10"></FaceSmileIcon>
                <button className="">tweet</button>
            </div>


        </div>
    )
}
export default FeedForm