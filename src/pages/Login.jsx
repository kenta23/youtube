import styled from "styled-components"
import { medium, mobile } from '../responsive'

const Container = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   background: linear-gradient(rgba(255, 255, 255, 0.5),
                               rgba(255, 255, 255, 0.5)),
                               url("login_cover.jpg") center;
   align-items: center;
   background-size: cover;
   justify-content: center;
  
`
const Wrapper = styled.div`
  background-color: #606166;
  display: flex;
  width: 25%;
  flex-direction: column;
  padding: 30px;
  color: #fff;

  ${mobile({width: '80%'})}
  ${medium({width: '90%'})}
`
const Form = styled.form`
   display: flex;
   flex-direction: column;
`
const Title = styled.h3`
  margin-bottom: 20px;
  font-weight: 300;
  font-size: clamp(1.25rem, 0.0781rem + 3.75vw, 2.1875rem);
  text-transform: uppercase;
`
const Input = styled.input`
  padding: 15px;
  text-indent: 3px;
  min-width: 40%;
  margin: 12px 0;
  flex: 1;
  
`
const Button = styled.button`
  color: #000;
  border: 2px solid #2d9c33;
  cursor: pointer;
  font-weight: 400;
  padding: 11px;
  transition: all 0.3s ease;
  width: 40%;

  &:hover {
    background-color: #2d9c33;
    color: #fff;
  }
  
`
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
`
const Link = styled.a`
     margin: 5px 0px;
     font-size: 14px;
     text-decoration: underline;
     cursor: pointer;
     text-transform: uppercase;
`
const Login = () => {
  return (
    <Container>
        <Wrapper>
         <Title>Sign in</Title>
            <Form>
                <Input placeholder='User name' />
                <Input placeholder='Password' />
                <Button>Log in</Button>
            </Form>
            <InfoContainer>
               <Link>Do not you remember the password?</Link>
               <Link>Create a new account</Link>
            </InfoContainer>
        </Wrapper> 
    </Container>
  )
}

export default Login
