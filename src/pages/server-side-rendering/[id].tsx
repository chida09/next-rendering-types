import { GetServerSideProps, GetServerSidePropsContext } from "next"

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

export const getServerSideProps: GetServerSideProps<PostProps> = async (context: GetServerSidePropsContext) => {
  const { id } = context.query
  if (typeof id !== 'string') {
    return { notFound: true }
  }

  const user = await fetchUser(id)

  return { props: { user } }
}

async function fetchUser(id: string): Promise<User> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return await response.json()
}
