import styled from "styled-components"
import Products from "./Products"
import { ProductData } from '../Data'

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  
`
const ProductContainer = () => {
  return (
    <Container>
        {ProductData.map(data => (
            <Products product={data} key={data.id}/>
        ))}
    </Container>
  )
}

export default ProductContainer