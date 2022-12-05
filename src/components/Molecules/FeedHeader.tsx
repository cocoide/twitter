import { SparklesIcon } from '@heroicons/react/24/outline'
import { scrollTop } from '../../utils/scrollTop'

const FeedHeader = () => {
    return (
        <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200
        backdrop-blur bg-white/80">
            <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>

            <button className="hoverEffect flex justify-center items-center ml-auto px-0 w-9 h-9">
                <SparklesIcon className='h-5'
                    onClick={() => scrollTop()} />
            </button>
        </div>
    )
}
export default FeedHeader