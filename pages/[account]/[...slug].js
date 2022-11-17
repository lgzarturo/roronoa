export default function Page(props) {
  const { slug, account } = props
  return (
    <h1>
      Landing page {slug} - {account}
    </h1>
  )
}
