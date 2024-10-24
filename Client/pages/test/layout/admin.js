import AdminLayout from '@/components/eddy_item/layout/admin-layout'

export default function Admin() {
  return (
    <>
      <article className="blog-post">
        <h2 className="display-5 link-body-emphasis mb-1">Sample blog post</h2>
        <hr />
        <p>
          This is some additional paragraph placeholder content. It has been
          written to fill the available space and show how a longer snippet of
          text affects the surrounding content. We'll repeat it often to keep
          the demonstration flowing, so be on the lookout for this exact same
          string of text.
        </p>
      </article>
    </>
  )
}

// 這裡代表要套用AdminLayout，取代原本的DefaultLayout
// 要寫在元件的函式之外
Admin.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
