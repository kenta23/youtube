
import { Send } from '@material-ui/icons'
import styled from 'styled-components'
import {mobile} from '../responsive'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 75px;
  background-color: #f7f6f5;
  padding: 55px 0;
  row-gap: 15px;
  height: 250px;

  ${mobile({padding: '20px'})}
`
const Title = styled.h1`
   font-size: clamp(1.875rem, -0.8594rem + 8.75vw, 4.0625rem);
`
const Description = styled.div`
   font-size: 20px;
   font-weight: 300;
`
const Input = styled.input`
   height: 27px;
   flex: 8;
   border: none;
   text-indent: 12px;
`
const InputContainer = styled.div`
   background-color: white;
   width: 50%;
   height: 35px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   border: 1px solid lightgray;
   margin-top: 12px;
  
   &:active ${Input}{
    border: none;
    outline: none;
 }

 ${mobile({width: '80%'})}
` 

const Button = styled.button`
   flex: 1;
   border: none;
   cursor: pointer;
   background-color: #2d9c33;
   color: #fff;
   padding: 4px;
  
`

const Newsletter = () => {
  return (
    <Container>
           <Title>Newsletter</Title>
           <Description>Get timely updates from your favorite products</Description>
           <InputContainer>
               <Input placeholder='Your email' />
               <Button>
                  <Send />
               </Button>
           </InputContainer>
    </Container>
  )
}

export default Newsletter