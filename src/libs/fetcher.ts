import { NewsResType } from '../models/news'


export const newsFetcher = async (arg: string): Promise<NewsResType>=> {
    const res = await fetch(arg)
    return (await res.json()) as NewsResType
  }