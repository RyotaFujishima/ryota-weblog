import type { GetStaticProps, NextPage } from 'next'
/* Client */
import { client } from '@/libs/microCMS'
/* Const */
import { API } from '@/const/index'
/* Layouts */
import DefaultLayout from '@/components/layouts/DefaultLayout'
/* Components */
import BlogCardList from '@/components/assembles/BlogCardList'
/* Types */
import { IBlogsApiResponse, IBlog } from '@/types/index'

interface IHome {
  contents: IBlog[]
}

const Home: NextPage<IHome> = ({ contents }) => {
  return (
    <DefaultLayout>
      <BlogCardList contents={contents} />
    </DefaultLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await client.get<IBlogsApiResponse>({
    endpoint: API.BLOG.END_POINT,
    queries: API.BLOG.QUERY,
  })

  return {
    props: {
      contents: blogs.contents,
    },
  }
}

export default Home
