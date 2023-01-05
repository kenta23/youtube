import styled from "styled-components"
import { CategoryData } from '../Data'
import CategoryItem from './CategoryItem'
import { mobile} from '../responsive'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    column-gap: 10px;

    ${mobile({display: "flex", flexDirection: 'column'})}
`
const Category = () => {
  return (
    <Container>
         {CategoryData.map(items => (
            <CategoryItem item={items} key={items.id}/>
         ))}
    </Container>
  )
}

export default Category
