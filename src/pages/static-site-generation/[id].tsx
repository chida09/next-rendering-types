import { GetStaticPaths, GetStaticProps } from "next"

type User = {
  userId: number
  id: number
  title: string
  body: string
}

type PostProps = {
  user: User
}

export default function Post({ user }: PostProps) {
  return (
    <div>
      <p>id: {user.id}</p>
      <p>title: {user.title}</p>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data: User[] = await response.json();

  const paths = data.map((post: User) => ({
    params: { id: post.id.toString() },
  }))

  return { paths, fallback: false }
}


export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
  if (!params || typeof params.id !== 'string') {
    return { notFound: true }
  }

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  return { props: { user: await response.json() } }
}
