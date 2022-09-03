import {Box,Badge,Image} from '@chakra-ui/react'
import {StarIcon} from '@chakra-ui/icons'
import Link from 'next/link'

function ThemeCard(props) {
    return (
      <>
    <Link href={`category/${props.id}`}>
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' style={{
        cursor:"pointer"
      }}>
        <Image src={props.image} alt="Ss" />
  
        <Box p='6'>
          <Box display='flex' alignItems='baseline'>
            <Badge borderRadius='full' px='2' colorScheme='teal'>
              {props.name}
            </Badge>
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'
            >
            </Box>
          </Box>
  
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            {props.description}
          </Box>
  
        
        </Box>
      </Box>
      </Link>

      </>
    )
  }


  export default ThemeCard