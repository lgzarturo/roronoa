import { useRouter } from 'next/router'

function Page({ params }) {
  const router = useRouter()
  const { account, slug } = router.query

  return (
    <h1>
      Landing Page: {account}/{slug}
    </h1>
  )
}

export default Page
