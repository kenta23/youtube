
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"
import { useState } from "react"
import {data} from '../Data'
import {mobile} from '../responsive'
import {medium} from '../responsive'

const Container = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   position: relative;  
   overflow-x: hidden;
   
`
const ArrowContainer = styled.div`
   display: flex;
   cursor: pointer;
   width: 50px;
   height: 50px;
   background-color: #edebeb;
   border-radius: 50%;
   justify-content: center;
   align-items: center;
   position: absolute;
   margin: auto;
   left: ${props => props.direction === "left" && "10px"};
   top: 0;
   right:  ${props => props.direction === "right" && "10px"};;
   bottom: 0;
   z-index: 2;

   ${mobile({width: '30px', height: '30px'})};
  

`
const Wrapper = styled.div`
   height: 100%; 
   width: 100%;
   display: flex;
   transform: translateX(${props => props.slides * -100}vw);
   transition: all 1s ease;
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  
  ${mobile({padding: '20px'})};
  ${medium({padding: '30px'})}
`
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  margin-left: 60px;
  width: 100vw;

  ${mobile({height: '60%', marginLeft: '30px'})};
  ${medium({height: '70%', marginLeft: '30px'})};
  
  
`
const Slide = styled.div`
   display: flex;
   align-items: center;
   width: 100vw;
   height: 100vh;
   background-color: ${props => props.bg};

   ${mobile({height: '80vh', width: '100%'})}
`
const Image = styled.img`
   height: 80%;
`
const Title = styled.h1`
   font-weight: 600;
   font-size: clamp(2.9375rem, 1.5313rem + 4.5vw, 4.0625rem);

   ${mobile({fontSize: '30px'})}
`
const Desc = styled.p`
  text-transform: uppercase;
  line-height: 40px;
  margin: 25px 0;
  font-size: clamp(0.9375rem, 0.1563rem + 2.5vw, 1.5625rem);
  letter-spacing: 4px;

  ${mobile({fontSize: '10px', lineHeight: '22px'})}
`
const Button = styled.button`
  padding: 15px;
  cursor: pointer;
  border-radius: 7px;
  outline: none;
  background: transparent;
  font-size: 17px;
  text-transform: uppercase;

  ${mobile({fontSize: '10px', padding: '10px'})}
`

const Slider = () => {

  const [sliderIndex, setSliderIndex] = useState(0)

  const handleClick = (direction) => {
    if(direction === "left") {
        setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 2)
    } else {
        setSliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0)
    }
  }
  return (
    <Container>
      <ArrowContainer direction="left" onClick={handleClick}>
          <ArrowLeftOutlined />
      </ArrowContainer>
 
       <Wrapper slides={sliderIndex}>
        
         {data.map(items => (
            <Slide bg={items.bg}>
            < ImgContainer>
                <Image src={items.image} />
             </ImgContainer>
             <InfoContainer>
                  <Title>{items.title}</Title>
                  <Desc>{items.desc}</Desc>
                  <Button>Shop Now!</Button>
             </InfoContainer>
            </Slide>     
         ))} 
       </Wrapper>
       
      <ArrowContainer direction="right" onClick={handleClick}>
          <ArrowRightOutlined />
      </ArrowContainer>
    </Container>
  )
}

export default Slider