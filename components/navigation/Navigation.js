// imports
import { motion } from "framer-motion"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { up } from 'styled-breakpoints'
import { useBreakpoint } from 'styled-breakpoints/react-styled'
import styled from 'styled-components'
import { Container } from '../'

// styled components
const Layout = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({theme}) => theme.zIndex.med};
`
const NavLayout = styled.div`

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
  }
`
const LinkLayout = styled(motion.div)`
  display: ${({navOpen}) => navOpen ? 'block' : 'none'};
  text-transform: uppercase;
  cursor: pointer;
  padding: 15px;
  margin: 0 5px;
  font-weight: 600;
  ${up('md')} {
    display: block;
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
const MobileNavLinksLayout = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: ${({theme}) => theme.transition.easeOut};
  z-index: ${({theme}) => theme.zIndex.low};
  background-color: ${({theme}) => theme.color.lightGreyGreen};
  position: absolute;
  top: 0;
  left: 25%;
  right: 0;
  bottom: 0;
  ${up('md')} {
    display: none;
  }
`


// component definition
export function Navigation() {

  // initialize state
  const [navOpen, setNavOpen] = useState(false)
  const isDesktop = useBreakpoint(up('md'))

  // render
  return (
    <>
      <Layout>
        <Container>
          <NavLayout>
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
              {renderNavLinks(isDesktop, navOpen)}
            </NavLinksLayout>

            {/* Mobile Hamburger Menu */}
            <HamburgerLayout
              navOpen={navOpen}
              onClick={() => setNavOpen(!navOpen)}
            >
              <LineLayout/>
              <LineLayout/>
              <LineLayout/>
            </HamburgerLayout>
          </NavLayout>
        </Container>
      </Layout>

      {/* Mobile Navigation */}
      <MobileNavLinksLayout
        animate={{ left: navOpen ? '25%' : '100%' }}
        initial={{ left: '100%' }}
        navOpen={navOpen}
      >
        {renderNavLinks(isDesktop, navOpen)}
      </MobileNavLinksLayout>
    </>
  )
}


// Helpers

const links = [
  { title: 'Our Story', url: '/our-story' },
  { title: 'Discount Club', url: '/discount-club' },
  { title: 'Contact', url: '/contact' },
]

function renderNavLinks(isDesktop, navOpen) {

  // animations
  const transition = (i) => {
    return {
      delay: navOpen ? (i + 1) * 0.2 : 0,
      duration: navOpen ? 0.5 : 0.2
    }
  }
  const visible = {
    opacity: 1
  }
  const invisible = {
    opacity: 0
  }

  return links.map((link, i) => {
    return (
      <LinkLayout
        animate={navOpen || isDesktop ? visible : invisible}
        exit={invisible}
        initial={invisible}
        navOpen={navOpen}
        transition={transition(i)}
      >
        <Link href={link.url}>
          <a>{link.title}</a>
        </Link>
      </LinkLayout>
    )
  })
}
