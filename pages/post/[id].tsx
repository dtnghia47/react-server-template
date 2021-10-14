import type { NextPage } from 'next'
import Head from 'next/head'

const PostPage: NextPage = () => {
  return <div>
    <Head>
      <title>Post Page</title>
      <meta name="description" content="Post Detail page description" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1>Post Detail Page</h1>
  </div>
}

export default PostPage;