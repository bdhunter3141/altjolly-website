// imports
import styled from 'styled-components'
import { up } from 'styled-breakpoints'

// styled components
const Layout = styled.div`
  max-width: ${({theme}) => theme.responsive.sm};
  margin: 0 auto;
  ${up('xs')} {
    padding: ${({fullWidth}) => !fullWidth && '0 1rem'};
  }
  ${up('md')} {
    max-width: ${({theme}) => theme.responsive.md};
    padding: ${({padding}) => padding && '0 1rem'};
  }
  ${up('lg')} {
    max-width: ${({theme}) => theme.responsive.lg};
  }
  ${up('xl')} {
    max-width: ${({theme}) => theme.responsive.xl};
  }
`


// component definition
export function Container({ children }) {
  return (
    <Layout>
      {children}
    </Layout>
  )
}
