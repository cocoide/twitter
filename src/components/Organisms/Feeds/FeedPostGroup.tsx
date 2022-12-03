

import { FeedPostType } from '../../../models/post';
import FeedPost from '../../Molecules/FeedPost';

const FeedPostGroup: React.FC<any> = ({ FeedPostLists }) => {
    return (
        <div className="">
            {FeedPostLists.map((post: FeedPostType) => (
                <div key={post.id}>
                    <FeedPost
                        id={post.id}
                        name={post.name}
                        username={post.username}
                        userImage={post.userImage}
                        img={post.img}
                        text={post.text}
                        timestamp={post.timestamp} />
                </div>
            ))
            }

        </div>
    )
}
export default FeedPostGroup;