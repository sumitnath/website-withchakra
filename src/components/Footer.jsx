import { Box,HStack,Heading,Stack, VStack,Button,Text } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={"white"} 
    > 
<Stack direction={["column","row"]}>
<VStack alignItems={"stretch"} w={"full"} px={'4'}>
<Heading size="md" textTransform={'uppercase'} 
textAlign={['center','left']}>
Subscribe to get updates
</Heading>
<HStack borderBottom={'2px solid white'} py={'2'}>
<input type="text"
borderRadius={'none'}
border={'none'}
outline={"none"}
focusBorderColor ="none"
placeholder='Enter your email here'/>
<Button p={'0'} colorScheme={'purple'}
variant={'ghost'} borderRadius={'0 20px 20px 0'}>
<AiOutlineSend size={20}/> 
</Button>
</HStack>
</VStack>
<VStack w={"full"}
borderLeft={["none"," !px solid white"]}
borderRight={["none"," !px solid white"]}
>
<Heading
textTransform={'uppercase'}
textAlign={"center"}>
Video Hub</Heading>
<Text> All right reserved</Text>
</VStack>
<VStack w={"full"}
borderLeft={["none"," !px solid white"]}
borderRight={["none"," !px solid white"]}
>
<Heading size={'md'} textTransform={'uppercase'}>
Social Media
</Heading>
<Button target={'_blank'} variant={'link'} colorScheme={'white'}>
<a href="youtube.com"> Youtube</a>
</Button>
<Button target={'_blank'} variant={'link'} colorScheme={'white'}>
<a href="instagtam.com"> Instagram</a>
</Button>
<Button target={'_blank'} variant={'link'} colorScheme={'white'}>
<a href="git.com"> Githum</a>
</Button>
</VStack>

</Stack>
 </Box>

  )
}

export default Footer
