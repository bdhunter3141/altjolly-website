import Head from 'next/head'
import { Navigation } from '../components'

export default function Home() {
  return (
    <div>
      {/* TODO: Separate out Head */}
      <Head>
        <title>AltJolly - Home</title>
        {/* TODO: Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />

      <main>
      </main>
    </div>
  )
}
