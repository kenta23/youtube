import styled from "styled-components"
import Navbar from "../Components/Navbar"
import Announcement from "../Components/Announcement"
import Product from "../Components/ProductComponent"
import Newsletter from "../Components/Newsletter"
import Footer from "../Components/Footer"
import { mobile } from '../responsive'
import ProductContainer from "../Components/ProductComponent"

const Container = styled.div`
  
`
const Title = styled.h2`
  margin: 30px;
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px;
`
const Filter = styled.span`
  font-weight: 500;

  ${mobile({display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'})}
  
`
const Select = styled.select`
  margin-left: 10px;
  padding: 8px 2px;
  cursor: pointer;

  ${mobile({margin: '7px 0'})}
`
const Option = styled.option`
  ${mobile({margin: '10px 0'})} 
`

const ProductList = () => {
  return (
    <Container>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
              Filter Products
              <Select>
                <Option disabled selected>Color</Option>
                <Option>White</Option>
                <Option>Black</Option>
                <Option>Gold</Option>
                <Option>Blue</Option>
                <Option>Green</Option>
                <Option>Purple</Option>
                <Option>Red</Option>
              </Select>
              <Select>
                <Option disabled selected>Sizes</Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
                <Option>XXL</Option>
              </Select>
            </Filter>
            <Filter>
             Sort Products
            <Select>
                <Option disabled selected>Newest</Option>
                <Option>Price (asc)</Option>
                <Option>Price (desc)</Option>
              </Select>
            </Filter>
        </FilterContainer>  
        <ProductContainer />
        <Footer />
    </Container>
  )
}

export default ProductList