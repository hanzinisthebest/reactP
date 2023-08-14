import { Card,Image,Stack,CardBody,Heading,Text,CardFooter,Button, HStack, Box, Divider, VStack, background, useBreakpointValue, useMediaQuery} from '@chakra-ui/react';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

interface Props {
  
}

const Title: React.FC<Props> = () => {
  const notToShow = useBreakpointValue({ base: true, md: false });
  const [isMobile] = useMediaQuery("(max-width: 768px)")
  return (
    <HStack display={'grid'} placeItems={'center'} maxWidth={'1170px'} margin={'0 auto'} minHeight={'60vh'}  gap={8} h={'calc(100vh - 5rem)'} 
    gridTemplateColumns={'1fr 1fr'}  >
      <VStack alignItems={'start'} >
      <Box marginBottom={'2rem'} >
      <Heading as='h1'  noOfLines={1}>
      Design Your
      </Heading>
     <Divider/>
     <Heading as='h1'  noOfLines={1}>
     Comfort Zone
      </Heading>
      </Box>
      <Text fontSize={ isMobile ? '1rem':'1.25rem'} lineHeight={2} maxWidth={'45rem'} marginBottom={'2rem'} color={'#617d98'}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, culpa laboriosam. Explicabo assumenda illum ex architecto pariatur sunt iusto optio id at accusamus impedit, iste nam est odit? Modi, quod?</Text>
      <Button cursor={'pointer'}  as={Link} to={'/products'} borderRadius={'0.25rem'} 
      boxShadow={isMobile ? '0 1px 3px rgba(0,0,0,.2)' :'0 1px 3px rgba(0,0,0,.8)'} color={'#eaded7'}
      background={'#ab7a5f'} display={'inline-block'} fontWeight={400} 
      borderColor={'transparent'} fontSize={isMobile ? '.875rem': '1rem'} padding={isMobile ? '.375rem .75rem':'0.75rem 1.5rem'} 
      transition={'all 0.3s linear'} textTransform={'uppercase'} _hover={{background:'#c5a49',color:'#453227',}} >SHOP NOW</Button>
      </VStack>
      <HStack display={isMobile? 'none':'block'} position={'relative'} >
        <Image width={'100%'} height={'550px'}  borderRadius={'0.25rem'} display={'block'} objectFit={'cover'} src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f6786a3aca992.jpeg"/>
        <Image position={'absolute'} width={'250px'} bottom={'0px'} left={'0px'} margin={0} padding={0} transform={'translateX(-50%)'}   src='https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg-2.789918645915c8acb36f.jpeg'/>
      </HStack>
    </HStack>
  );
};

export default Title;