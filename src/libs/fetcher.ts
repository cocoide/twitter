
import { ResNewsType } from '../models/news'
import { ResRamdomUsersType } from '../models/users'


export const newsFetcher = async (arg: string): Promise<ResNewsType>=> {
    const res = await fetch(arg)
    return (await res.json()) as ResNewsType
  }
export const ramdomUsersFetcher = async (arg: string): Promise<ResRamdomUsersType>=> {
    const res = await fetch(arg)
    return (await res.json()) as ResRamdomUsersType
  }