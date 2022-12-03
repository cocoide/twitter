import Link from 'next/link'
import { articlesType } from '../../../models/news'




const Article = (articles: articlesType) => {
    return (
        <Link href={articles.url} target="_blank"
            className="flex items-center justify-between px-4 py-2 space-x-1 hover:bg-gray-200 transition duration-500 ease-out">

            <div className="space-y-0.5">
                <h6 className="font-bold text-sm"> {articles.title}</h6>
                <p className='text-xs font-medium text-gray-500'>{articles.source?.name}</p>
            </div>

            <img src={articles.urlToImage} alt="" width={130} height={150} className="rounded-xl" />
        </Link>
    )
}
export default Article