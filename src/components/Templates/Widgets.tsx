import { FC } from 'react'
import { ResNewsType } from '../../models/news';
import { ResRamdomUsersType } from '../../models/ramdomUser';
import SearchWidget from '../Molecules/Widgets/SearchWidget'
import NewsWidget from '../Organisms/Widgets/NewsWidget';
import UserWidget from '../Organisms/Widgets/UserWidget';


const Widgets: FC<ResNewsType & ResRamdomUsersType> = ({ articles, results }) => {

    return (
        <div className="xl:w-[600px] hidden lg:inline ml-8 space-y-5">
            <SearchWidget />
            <NewsWidget articles={articles} />
            <UserWidget results={results} />
        </div>
    )
}
export default Widgets