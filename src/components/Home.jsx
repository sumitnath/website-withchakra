import React from 'react'
import { Box,Container,Image,
    Text,Heading,Stack} from '@chakra-ui/react'
import {Carousel} from "react-responsive-carousel"
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from  '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from  '../assets/5.png'

 const headingOptions = {
    pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const MyCarousel = ()=>(
    <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
      Watch the new Era</Heading>
    </Box>
    <Box w='full' h={"100vh"}>
    <Image src={img2}/>
    <Heading
    bgColor={'whiteAlpha.600'}
    color={'black'} {...headingOptions}>Gaming new frontier</Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
      AI Power Future</Heading>
    </Box>
    <Box w='full' h={"100vh"}>
    <Image src={img4}/>
    <Heading
    bgColor={'blackAlpha.600'}
    color={'white'} {...headingOptions}>Machine New Intelligence</Heading>
    </Box>
    </Carousel>
)

const Home = () => {
  return (
    <Box>
      <MyCarousel/>
      <Container maxW={'container.xl'} minH={'100vh'} p="16">
      <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m="auto">
        Services</Heading>
     <Stack
     h={"full"}
     p={'4'}
     alignItems={'center'}
     direction={['column','row']}>
     <Image src={img5} h={['40','400']} 
     filter={'hue-rotate(-130deg)'} ></Image>
     <Text letterSpacing={'widest'}
     lineHeight={'190%'}
     p={['4','16']}
     textAlign={'center'}>
     Kong established fact that a reader will be distract
     ed by the readable content of a page when looking 
     at its layout. The point of using Lorem Ipsum is
     that it has a more-or-less normal distribution of 
     letters, as opposed to using 'Content here, content
     here', making it look like readable English. Many d
     esktop publishing packages and web page editors now
     use Lorem Ipsum as their default model text, and 
     a search for 'lorem ipsum' will uncover many web si
     tes still in their infancy.
      Various versions have evolved over the years,
       sometimes by

      
     </Text>
     </Stack>   
</Container>
    </Box>
  )
}

export default Home
