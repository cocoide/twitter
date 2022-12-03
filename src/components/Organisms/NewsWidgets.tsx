import { useState } from 'react'
import { NewsResType } from '../../models/news'
import Article from '../Molecules/Article'

const NewsWidgets = (props: NewsResType) => {

    const [articlesNum, setArticlesNum] = useState<number>(3)

    return (
        <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 
        w-[90%] xl:w-[75%]" >

            <div className="font-bold text-xl px-4 ">Whats happening?</div>

            {props.articles.slice(0, articlesNum).map((article) => (
                <Article key={article.title} title={article.title} url={article.url} urlToImage={article.urlToImage} source={article.source} />
            ))}

            <button className="h-10 text-blue-300 pl-4 pb-3 hover:text-blue-400"
                onClick={() => setArticlesNum(articlesNum + 3)}>Show more</button>

        </div>
    )
}
export default NewsWidgets