import Image from 'next/image'
import Head from 'next/head'
import styled from 'styled-components'
import backgroundImage from '../public/assets/background.jpg'

// styles
const BackgroundLayout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
const ContentLayout = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
`
const TextLayout = styled.div`
  background-color: #ffffff;
  padding: 3rem 6rem;
  border-radius: 10px;
`

export default function Home() {
  return (
    <>
      {/* TODO: Separate out Head */}
      <Head>
        <title>AltJolly - Home</title>
        {/* TODO: Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BackgroundLayout>
        <Image src={backgroundImage} layout="fill" objectFit="cover" />
      </BackgroundLayout>

      <ContentLayout>
        <TextLayout>
          <Image
            src="/assets/logo.png"
            alt="AltJolly Logo"
            width={200}
            height={44}
          />
          <h1>Hello World</h1>
        </TextLayout>
      </ContentLayout>
    </>
  )
}
