import styled from "styled-components";
import { medium, mobile} from '../responsive'

const Container = styled.div`
   flex: 1;
   margin-top: 55px;
   position: relative;

   
`
const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 70%;

  ${mobile({height: '60vh'})}
  
`  
const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: absolute;
  top: -45px;
  left: 0;
  justify-content: center;
  align-items: center;

  ${medium({})}
`
const Title = styled.h1` 
  color: #fff;
  font-weight: 600;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-size: 38px;

  ${mobile({fontSize: '30px'})};
  ${medium({fontSize: 'clamp(0.75rem, -0.4219rem + 3.75vw, 1.6875rem)'})}
`
const Button = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  color: grey;

  &:active{
    border: 1px solid black;
    color: black;
  }
`

const CategoryItem = ({item}) => {
  return (
    <Container>
         <Image src={item.image}/>
         <Info>
           <Title>{item.title}</Title> 
           <Button>SHOP NOW</Button>
         </Info> 
    </Container>
  )
}

export default CategoryItem
