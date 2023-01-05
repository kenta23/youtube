import styled from "styled-components"
import {mobile, medium} from '../responsive'


const Container = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   background: linear-gradient(rgba(255, 255, 255, 0.5),
                               rgba(255, 255, 255, 0.5)),
                               url("signup_cover.jpg") center;
   align-items: center;
   background-size: cover;
   justify-content: center;
`
const Wrapper = styled.div`
  background-color: #f5f2f2;
  display: flex;
  width: 50%;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 30px;

  ${mobile({width: '80%'})}
  ${medium({width: '90%'})}
`
const Title = styled.h3`
  margin-bottom: 20px;
  font-weight: 300;
  font-size: clamp(1.25rem, 0.0781rem + 3.75vw, 2.1875rem);
  text-transform: uppercase;
`
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`
const Input = styled.input`
  padding: 15px;
  text-indent: 3px;
  width: 40%;
  margin: 9px;

`
const Agreement = styled.p`
  margin: 20px;
  line-height: 25px;
  font-weight: 300;
`
const Button = styled.button`
  padding: 12px;
  width: 160px;
  background: #2d9c33;
  color: #fff;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 15px;

`
const Bold = styled.span`
  font-weight: bold;
  text-transform: uppercase;
`

const Signup = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Create an account</Title>
            <Form>
                <Input placeholder='First name' />
                <Input placeholder='Last name' />
                <Input placeholder='User name' />
                <Input placeholder='Email' />
                <Input placeholder='Password' />
                <Input placeholder='Confirm Password' />
            <Agreement>
               By creating an account. I consent to the processing of my personal data in accordance with the
             <Bold> Privacy Policy</Bold>
            </Agreement>
            <Button>Create</Button>
            </Form>
        </Wrapper>
      
    </Container>
  )
}

export default Signup
