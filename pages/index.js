import Image from 'next/image'
import Head from 'next/head'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'
import backgroundImage from '../public/assets/background.jpg'
import { Container } from '../components'

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
  border-radius: 10px;
  max-width: 768px;
  margin: 1rem;
  padding: 2rem;

  ${up('md')} {
    margin: 3rem 6rem;
    padding: 3rem 6rem;
  }
`
const SignatureLayout = styled.p`
  font-family: 'La Belle Aurore', cursive;
  font-size: 1.2rem;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>AltJolly - Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=La+Belle+Aurore&display=swap" rel="stylesheet" />
      </Head>

      <BackgroundLayout>
        <Image src={backgroundImage} layout="fill" objectFit="cover" />
      </BackgroundLayout>

      <Container>
        <ContentLayout>
          <TextLayout>
            <Image
              src="/assets/logo.png"
              alt="AltJolly Logo"
              width={200}
              height={44}
            />

            {/* <h1>We are currently undergoing maintenance</h1>

            <p>Thank you so much for your patience! We will be back online as soon as we can.</p> */}
            <h1>Thank you!</h1>
            <p>
              We sincerely thank you for being a customer of AltJolly and we appreciate your support.
              Our amazing customers are the reason that we do what we do.
            </p>
            <p>
              Unfortunately, we have recently had some trouble remaining profitable and have been forced to close our doors.
              We are so sad to have to say goodbye but we have had such an incredible experience serving you and all of our
              incredible customers and wouldn't trade that time for the world.
            </p>
            <p>
              Wishing you nothing but the best!
            </p>
            <p>
              Lots of love,
            </p>

            <SignatureLayout>The AltJolly Family</SignatureLayout>
          </TextLayout>
        </ContentLayout>
      </Container>
    </>
  )
}
