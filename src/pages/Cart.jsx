import Announcement from "../Components/Announcement"
import styled from "styled-components"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import { Add, Remove } from "@material-ui/icons"
import {medium, mobile} from '../responsive'

const Container = styled.div`
 
`
const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   margin: 35px 0;
   ${mobile({width: '100%'})}
`
const TextCenter = styled.h1`
   font-weight: 300;
   font-size: clamp(1.5625rem, 0.3906rem + 3.75vw, 2.5rem);
   text-align: center;
   margin-bottom: 10px;
`
const TopContent = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin:  10px;
   padding: 20px;

`
const InfoCenter = styled.div`
   ${mobile({display: 'none'})}
`
const SpanText = styled.span`
  text-decoration: underline;
  margin: 0 12px;
  cursor: pointer;
`
const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  color: ${props => props.type === "filled" ? "#fff" : "#24252a"};
  background-color: ${props => props.type === "filled" ? "#000" : "#fff"};
  border: ${props => props.type === "filled" ? "1px solid grey" : "1px solid"};
  font-weight: 600;
  text-transform: uppercase;
  transition: all 0.3s ease;

  &:active {
    transform: scale(1.1);
  }
`
const BottomContent = styled.div`
  margin: 45px 55px 0 20px;
  display: flex;
  justify-content: space-between;

  ${mobile({flexDirection: 'column'})}
  ${medium({width: '100%', flexDirection: 'column'})}
`
const Products = styled.div`
  display: flex;
  margin: 25px 0;

  ${mobile({flexDirection: 'column', width: '100%'})}
  
`
const ProductItem = styled.div`
  flex: 2;
  display: flex;
  column-gap: 40px;
  flex-direction: row;
  justify-content: space-around;

  ${medium({width: 'fit-content'})}
`
const ImageItem = styled.img`
  width: 200px;
  height: 200px;
`
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  width: 400px;
  text-transform: uppercase;
  
`
const ProductName = styled.span`
  
`
const ProductId = styled.span` 
`
const ProductColor = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${props => props.color};
  border-radius: 50%;
  cursor: pointer;
`
const ProductSizes = styled.span`
`
const Price = styled.div`
   text-align: center;
   font-size: 25px;
   margin-left: 60px;

   ${mobile({width: '100%', marginLeft: '0'})};
   ${medium({width: '20%', marginRight: '65px'})};

`
const Summary = styled.div`
   border: 1px solid #d4d4d4;
   width: 350px;
   height: 350px;
   padding: 20px;
   border-radius: 10px;

   ${mobile({width: '100%',marginTop: '30px'})}
   ${medium({width: '80%',marginTop: '50px', margin: '0 auto'})}
`

const Bold = styled.span` 
  font-weight: bold;
`
const Checkouts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
`
const ProductAmount = styled.div`
`
const Prices = styled.span`
  font-size: 37px;
  font-weight: 300;
`
const Hr = styled.div`
  background-color: #eee;
  border: none;
  height: 1px;
`
const SummaryTitle = styled.h1`
  font-weight: 300;
  margin-bottom: 20px;
`
const InfoSummary = styled.div`
`
const SummaryItems = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 10px;
  padding: 10px 0;
  font-weight: ${(props) => props.type === "total" && "500" };
  font-size: ${(props) => props.type === "total" && "24px"};
`
const PricesSummary = styled.div`
`
const PriceInfo = styled.span`
  
`
const ShipPrice = styled.span`
`
const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  ${mobile({width: '100%'})}
`
const CheckButton = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 20px;
  background-color: #000;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 13px;
`
const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
     <Wrapper>
        <TextCenter>Your Bag</TextCenter>
        <TopContent>
            <Button>Continue Shopping</Button>
            <InfoCenter>
                <SpanText>Shopping Bag (2)</SpanText>
                <SpanText>Your Wishlist (0)</SpanText>
            </InfoCenter>
            <Button type="filled">Checkout Now!</Button>
        </TopContent>
        
        <BottomContent>
          <ProductContainer>
            <Products>
                <ProductItem>
                    <ImageItem src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
                        <ProductInfo>
                            <ProductName><Bold>Product: </Bold>Thunder shoes</ProductName>
                            <ProductId><Bold>ID: </Bold>2435425455</ProductId>
                            <ProductColor color="black"></ProductColor>
                            <ProductSizes><Bold>Sizes: </Bold> 37.5</ProductSizes>
                        </ProductInfo>
                </ProductItem>
           
                 <Price>
                   <Checkouts>
                     <Remove />
                      <ProductAmount>2</ProductAmount>
                     <Add />
                   </Checkouts>
                   <Prices>$10</Prices>
                 </Price>
            </Products>

       <Hr/>

            <Products>
                <ProductItem>
                <ImageItem src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                        <ProductInfo>
                            <ProductName><Bold>Product: </Bold>Philz T-shirt</ProductName>
                            <ProductId><Bold>ID: </Bold>3445654664</ProductId>
                            <ProductColor color="grey"></ProductColor>
                            <ProductSizes><Bold>Sizes: </Bold> 35.6</ProductSizes>
                        </ProductInfo>
                </ProductItem>   
                 <Price>
                   <Checkouts>
                     <Remove />
                      <ProductAmount>1</ProductAmount>
                     <Add />
                   </Checkouts>
                   <Prices>$7</Prices>
                 </Price>
             
            </Products>
      </ProductContainer>

            <Summary>
                    <SummaryTitle>Order Summary</SummaryTitle>
                     <InfoSummary>
                        <SummaryItems>
                                <PriceInfo>Subtotal</PriceInfo>
                                <ShipPrice>$10</ShipPrice>                           
                        </SummaryItems>
                        <SummaryItems>
                                <PriceInfo>Estimated Shipping</PriceInfo>
                                <ShipPrice>$5.90</ShipPrice>                           
                        </SummaryItems>
                        <SummaryItems>
                                <PriceInfo>Shipping Discount</PriceInfo>
                                <ShipPrice>$$ -5.90</ShipPrice>                           
                        </SummaryItems>
                        <SummaryItems type="total">
                                <PriceInfo>Total</PriceInfo>
                                <ShipPrice>$80</ShipPrice>                           
                        </SummaryItems>
                     </InfoSummary>
                      <CheckButton>Checkout now</CheckButton>
                 </Summary>
              
        </BottomContent>
   </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart
