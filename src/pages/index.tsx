import Head from 'next/head'
import Feed from '../components/Templates/Feed'
import Sidebar from '../components/Templates/Sidebar';
import Widgets from '../components/Templates/Widgets';

export default function Home() {
  return (
    <>
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/twitter.svg" />
      </Head>

      <main className="flex min-h-screen mx-auto">

        <Sidebar />
        <Feed />
        <Widgets />

      </main>
    </>
  )
}
