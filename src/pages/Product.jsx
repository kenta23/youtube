import Announcement from "../Components/Announcement";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div`
   
`
const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  justify-content: space-between;
  ${mobile({flexDirection: 'column', padding: '10px'})}
`
const ImageContainer = styled.div`
   flex: 1;
    
`
const Image = styled.img`
   width: 450px;
   height: 90vh;
   object-fit: cover;

   ${mobile({width: 'max-content', height: '400px'})}
`
const InfoContainer = styled.div`
   flex: 1;
   padding: 0 50px;
   
   ${mobile({padding: '18px', width: '100%'})}
`
const Title = styled.h1`
  font-weight: 200;
  font-size: clamp(1.25rem, 0.0781rem + 3.75vw, 2.1875rem);
`
const Desc = styled.p`
  margin: 20px 0;
`
const Price = styled.span`
  font-weight: 100;
  font-size: clamp(2.1875rem, 0.625rem + 5vw, 3.4375rem);
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 20px 0;
`
const Filter = styled.div`
  display: flex;
  align-items: center;
`
const FilterTitle = styled.span`
  margin-right: 10px;
  font-weight: 500;
`
const FilterColor = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${props => props.color};
  margin-right: 7px;
  border-radius: 50%;
  cursor: pointer;
`
const Select = styled.select`
  cursor: pointer;
`
const Option = styled.option`
  cursor: pointer;
`
const CartContainer = styled.div`
  margin: 40px 0;
  display: flex;
  justify-content: space-between;
  width: 90%;

  ${mobile({width: '100%'})}
`
const AddOrRemove = styled.div`
  display: flex;
  align-items: center;
`
const Number = styled.span`
  border: 1px solid #2d9c33;
  border-radius: 10px;
  padding: 8px;
  width: 17px;
  display:flex;
  justify-content: center;
`
const Button = styled.button`
  color: #000;
  border: 2px solid #2d9c33;
  cursor: pointer;
  font-weight: 400;
  padding: 11px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2d9c33;
    color: #fff;
  }

  ${mobile({padding: '9px', marginRight: '17px'})}
  
`

const Product = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />

        <Wrapper>

         <ImageContainer>
            <Image src="dress.jpg"/>
         </ImageContainer>


           <InfoContainer>
               <Title>Denim Jumpsuit</Title>
               <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium commodi neque autem labore, consequatur sit animi exercitationem minus rem eveniet.</Desc>
               <Price>$20</Price>

               <FilterContainer>
                 <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color="blue"></FilterColor>
                    <FilterColor color="black"></FilterColor>
                    <FilterColor color="grey"></FilterColor>
                 </Filter>
                 <Filter>
                   <FilterTitle>Size</FilterTitle>
                   <Select>
                      <Option>XS</Option>
                      <Option>S</Option>
                      <Option>M</Option>
                      <Option>L</Option>
                      <Option>XL</Option>
                      <Option>XXL</Option>
                   </Select>
                 </Filter>
               </FilterContainer>

               <CartContainer>
                   <AddOrRemove>
                      <Remove />
                      <Number>1</Number>
                      <Add />
                   </AddOrRemove>

                   <Button>Add to Cart</Button>
               </CartContainer>
           </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product
