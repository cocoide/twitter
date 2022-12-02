import FeedHeader from '../Organisms/FeedHeader';
import FeedForm from '../Organisms/FeedForm';
import FeedPostGroup from '../Organisms/FeedPostGroup';


const Feed = () => {

    return (
        <div className="xl:ml-[370px] border-l border-r border-gray-200 
        xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">

            <FeedHeader />
            <FeedForm />
            <FeedPostGroup />
            
        </div>
    )
}
export default Feed