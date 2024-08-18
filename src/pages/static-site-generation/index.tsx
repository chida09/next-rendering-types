import { GetStaticProps } from 'next'

type User = {
  userId: number
  id: number
  title: string
  body: string
}

type PostProps = {
  users: User[]
}

// Post: 記事
export default function Post({ users }: PostProps) {
  return (
    <div>
      <p>id: {users[0].id}</p>
      <p>title: {users[0].title}</p>
    </div>
  )
}

export const getStaticProps: GetStaticProps<PostProps> = async () => {
  const users = await fetchUser()
  return { props: { users } }
}

async function fetchUser(): Promise<User[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  return await response.json()
}
