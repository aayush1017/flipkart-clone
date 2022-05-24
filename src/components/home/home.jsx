
//Components
import NavBar from './navbar'
import Banner from './banners'
import { Box, styled } from '@mui/material'

const Component = styled(Box)`
    padding: 10px;
    background-color: #f2f2f2;
`

function Home() {
  return (
    <>
        <NavBar />
        <Component>
            <Banner />
        </Component>
    </>
  )
}

export default Home