// imports
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { down, up } from 'styled-breakpoints'
import styled from 'styled-components'
import { Container } from '../'

// styled components
const Layout = styled.nav`
  margin: 25px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const NavLinksLayout = styled.div`
  display: none;
  ${up('md')} {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    & a {
      padding: 15px;
      margin: 0 5px;
      font-weight: 600;
    }
  }
`
const HamburgerLayout = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: 10px;
  transition: ${({theme}) => theme.transition.easeOut};

  /* Rotate Into X With Menu Lines */
  ${({navOpen}) => {
    return navOpen && `
    transform: rotate(180deg);

    // Line 1 - Rotate
    & div:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    // Line 2 - Hide
    & div:nth-child(2) {
      opacity: 0;
    }
    // Line 3 - Rotate
    & div:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -6px);
    }
    `
  }}

  ${up('md')} {
    display: none;
  }
`
const LineLayout = styled.div`
  width: 28px;
  height: 3px;
  margin: 0 0 5px 0;
  background: ${({theme}) => theme.color.darkGreen};
  transition: ${({theme}) => theme.transition.easeOut};
`


// component definition
export function Navigation() {

  // initialize state
  const [navOpen, setNavOpen] = useState(false)

  return (
    <Container>
      <Layout>
        <Link href="/">
          <a>
            <Image
              src="/assets/logo.png"
              alt="AltJolly Logo"
              width={200}
              height={44}
            />
          </a>
        </Link>

        {/* Desktop Navigation */}
        <NavLinksLayout>
          <Link href="/our-story"><a>Our Story</a></Link>
          <Link href="/discount-club"><a>Discount Club</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
        </NavLinksLayout>

        {/* Mobile Navigation */}
        <HamburgerLayout
          navOpen={navOpen}
          onClick={() => setNavOpen(!navOpen)}
        >
          <LineLayout/>
          <LineLayout/>
          <LineLayout/>
        </HamburgerLayout>
      </Layout>
    </Container>
  )
}
