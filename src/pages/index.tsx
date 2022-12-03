import { GetStaticProps } from 'next';
import Head from 'next/head'
import { FC } from 'react';
import Feed from '../components/Templates/Feed'
import Sidebar from '../components/Templates/Sidebar';
import Widgets from '../components/Templates/Widgets';
import { newsFetcher, ramdomUsersFetcher } from '../libs/fetcher';
import { articlesType } from '../models/news';
import { RamdomUserType } from '../models/users';

type Props = {
  articles: articlesType[],
  ramdomUser: RamdomUserType[]
}

const Home: FC<Props> = (props) => {
  return (
    <>
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/twitter.svg" />
      </Head>

      <main className="flex min-h-screen mx-auto">

        <Sidebar />
        <Feed />
        <Widgets articles={props.articles} results={props.ramdomUser} />

      </main>
    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {

  const NewsAPI_URL = "https://saurav.tech/NewsAPI/top-headlines/category/business/in.json"
  const ResNewsAPI = await newsFetcher(NewsAPI_URL)
  const articles = ResNewsAPI?.articles

  const RamdomUsersAPI_URL = "https://randomuser.me/api/?results=30&inc=name,login,picture"
  const ResRamdomUsersAPI = await ramdomUsersFetcher(RamdomUsersAPI_URL)
  const ramdomUser = ResRamdomUsersAPI?.results

  return {
    props: {
      articles,
      ramdomUser,
    },
    // revalidate: 60 * 10,
  };
};

export default Home