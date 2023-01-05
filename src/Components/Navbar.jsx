import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'
import {medium} from '../responsive'

const iconStyle = {
    position: 'absolute',
    right: '10px',
    color: 'gray',
    fontSize: '18px'
};

const Container = styled.div
`
    height: 60px;
    ${medium({width: '100%'})}
`
const Wrapper = styled.div`
   padding: 10px 25px;
   display: flex;
   justify-content: space-between;
   text-align: center;
   align-items: center;

   ${mobile ({padding: '7px'})}
`
const Left = styled.div`
    flex: 1; 
    display: flex;
    align-items: center;
`
const Center = styled.div`
    flex: 1;   
    text-align: center;
`
const Right = styled.div` 
    flex: 1;
    display: flex;
    column-gap: 9px;
    align-items: center;
    justify-content: flex-end;

    ${mobile ({flex: "2", justifyContent: 'center'})}
    
`
const Language = styled.span`
   font-size: 14px;
   cursor: pointer;

   ${mobile ({display: "none"})}
`
const SearchContainer = styled.div`
   display: flex;
   align-items: center; 
   margin-left: 20px;
   padding: 7px;
   position: relative;

   ${mobile ({maginLeft: "7px"})}
`
const Input = styled.input`
   border: 1px solid grey;
   outline: none;
   padding: 5px;
   border-radius: 10px;
   
   ${mobile ({width: "65px"})}
`
const Logo = styled.h1`
   font-weight: bold;
   text-transform: uppercase;

   ${mobile ({fontSize: "23px"})}
`
const MenuItem = styled.div`
   font-size: 14px;
   cursor: pointer;

   ${mobile({fontSize: '12px'})}
`
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
            <Language>EN</Language>
            <SearchContainer>
               <Input></Input>
                <Search style={iconStyle}/>
            </SearchContainer>
         </Left>
        <Center>
            <Logo>Logo</Logo>
        </Center>

        <Right>
            <MenuItem>Register</MenuItem>
            <MenuItem>Sign in</MenuItem>
            <MenuItem>
              <Badge badgeContent={4} color="error">
                  <ShoppingCartOutlined />
              </Badge>
            </MenuItem>

        </Right>

      </Wrapper>
   </Container>
  )
}

export default Navbar