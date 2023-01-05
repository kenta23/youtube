
import styled from 'styled-components'
import {mobile} from '../responsive'

const Announcement = () => {

const Container = styled.div`
    height: 30px;
    background-color: #2d9c33;
    font-weight: 400;
    padding: 3px;
    color: #fff;
    display:flex;
    align-items: center;
    justify-content: center;

    ${mobile({fontSize: '12px'})}
`
  return (
    <Container>
       <p>Enjoy 35% off on Christmas Sale</p>
    </Container>
  )
}

export default Announcement