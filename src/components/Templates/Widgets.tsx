
import { FC } from 'react'
import { NewsResType } from '../../models/news'
import SearchWidget from '../Molecules/SearchWidget'
import NewsWidgets from '../Organisms/NewsWidgets';

const Widgets: FC<NewsResType> = ({ articles }) => {

    return (
        <div className="xl:w-[600px] hidden lg:inline ml-8 space-y-5">
            <SearchWidget />
            <NewsWidgets articles={articles} />
        </div>
    )
}
export default Widgets