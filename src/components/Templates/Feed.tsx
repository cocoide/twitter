import FeedForm from '../Organisms/FeedForm'
import FeedHeader from '../Organisms/FeedHeader'



const Feed = () => {

    return (
        <div className="xl:ml-[370px] border-l border-r border-gray-200  
        xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
            <FeedHeader />
            <FeedForm />
        </div>
    )
}
export default Feed