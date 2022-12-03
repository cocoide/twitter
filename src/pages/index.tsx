import { GetServerSideProps, GetStaticProps } from 'next';
import Head from 'next/head'
import { FC } from 'react';
import Feed from '../components/Templates/Feed'
import Sidebar from '../components/Templates/Sidebar';
import Widgets from '../components/Templates/Widgets';
import { newsFetcher } from '../libs/fetcher';
import { articlesType } from '../models/news';

type WidgetsProps = {
  articles: articlesType[],
}

const Home: FC<WidgetsProps> = (props) => {
  return (
    <>
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/twitter.svg" />
      </Head>

      <main className="flex min-h-screen mx-auto">

        <Sidebar />
        <Feed />
        <Widgets articles={props.articles} />

      </main>
    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {

  const NEWS_API_URL = "https://saurav.tech/NewsAPI/top-headlines/category/business/in.json"
  const ResNewsAPI = await newsFetcher(NEWS_API_URL)
  const articles = ResNewsAPI?.articles

  return {
    props: {
      articles,
    },
    // revalidate: 60 * 10,
  };
};

export default Home