[SSRはおまいらには早すぎた](https://qiita.com/ryokkkke/items/1bd858a5d6f261a9342a)
 - Next.js 9.3から getServerSideProps という仕組みが導入された
 - getInitialPropsをやめてgetServerSidePropsを使う
 - 認証が必要なページ（もっと言えばSEOを気にしないページ）ではSSR時に（=サーバサイドで）認証が必要なAPIコールをするのをやめよう
 - そうするとクライアントサイドでのAPIコールが重要になるから、Vercelが公式に支援してくれる。それがSWR
