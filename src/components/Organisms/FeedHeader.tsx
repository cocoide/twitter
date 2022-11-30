import { SparklesIcon } from '@heroicons/react/24/outline'

const FeedHeader = () => {
    return (
        <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
            <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>

            <div className="hoverEffect flex justify-center items-center ml-auto px-0 w-9 h-9">
                <SparklesIcon className='h-5' />
            </div>
        </div>
    )
}
export default FeedHeader