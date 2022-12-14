export type ResNewsType = {
    status?: string,
    totalResults?: number,
    articles: articlesType[],
}

export type articlesType = {
    title:string,
    url:string,
    urlToImage:string,
   source?: {
    name: string,
   }
}