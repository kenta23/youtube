
import { Facebook, Instagram, MailOutline, Payment, Phone, Pinterest, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"
import { medium, mobile } from "../responsive"


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #a19f9d;
  padding: 30px 0;
  color: #24252a;

  ${mobile({flexDirection: 'column', fontSize: '13px'})}
  ${medium({width: 'fit-content'})}
`
const Logo = styled.h1`
  margin-bottom: 15px;
`
const Desc = styled.p`
  margin: 20px 0;
`
const Socials = styled.div`
  display: flex;
`
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  background-color: #${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0 8px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  ${mobile({width: '30px', height: '30px'})}
`
const Left = styled.div`
  flex: 1;
  padding: 20px;
  
`
const Center = styled.div`
  flex: 1; 
  padding: 20px;
 
`
const ListTitle = styled.h3`
  margin-bottom: 12px;
  font-size: 25px;
`
const List = styled.ul`
  margin: 0;
  pading: 0;
  list-style: none;
  display: grid;
  grid-template-columns: auto auto;
`
const ListItems = styled.li`
  margin: 6px 0;
`
const Right = styled.div`
  flex: 1;
  padding:  20px;
  
  
`
const ContactInfo = styled.div`
  display:flex;
  flex-direction: column;
  
`
const Location = styled.div`
  display: flex;
  align-items: center;
`
const MailAdd = styled.div`
  display: flex;
  align-items: center;
`
const ContactPhone = styled.div`
  display: flex;
  align-items: center;
`
const ContactItems = styled.div` 
  display:flex;
  align-items: center;
  margin: 7px 0;
`
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Shoplify</Logo>
            <Desc>Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Aut,inventore, vel animi
                 ex maxime praesentium aperiam vitae ducimus ea magni libero facere id perferendis
                 voluptate?</Desc>
        <Socials>
            <SocialIcon color="3B5999">
                <Facebook />
            </SocialIcon>
      
             <SocialIcon color="E4405F">
                <Instagram />
            </SocialIcon>
               
            <SocialIcon color="E60023">
                <Pinterest />
            </SocialIcon>

            <SocialIcon color="55ACEE">
                <Twitter />
            </SocialIcon>
        </Socials>
        </Left>

        <Center>
            <ListTitle>Links</ListTitle>
                <List>
                    <ListItems>Home</ListItems>
                    <ListItems>Men Fashion</ListItems>
                    <ListItems>Accessories</ListItems>
                    <ListItems>Order Tracking</ListItems>
                    <ListItems>Wishlist</ListItems>
                    <ListItems>Cart</ListItems>
                    <ListItems>Women Fashion</ListItems>
                    <ListItems>My Account</ListItems>
                    <ListItems>Wishlist</ListItems>
                    <ListItems>Terms</ListItems>
                </List>
        </Center>

        <Right>
            <ListTitle>Contact</ListTitle>
            <ContactInfo>
              <ContactItems>
                <Location><Room style={{marginRight: '7px'}}/> 622 Dixie Path , South Tobinchester 98336</Location>
             </ContactItems>
             <ContactItems>
                <ContactPhone><Phone style={{marginRight: '7px'}}/>+17 89492010</ContactPhone>
             </ContactItems>   
             <ContactItems>
                <MailAdd><MailOutline style={{marginRight: '7px'}}/>TriMall@onlineshop.com</MailAdd>
             </ContactItems>
                <Payment src='https://i.ibb.co/Qfvn4z6/payment.png'/>
             
            </ContactInfo>


        </Right>

    </Container>
  )
}

export default Footer