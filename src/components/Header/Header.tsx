import { Flex, Text } from '@chakra-ui/react'

export const Header = () => {
  return (
    <Flex backgroundColor={'orange'} padding='25px' justifyContent={'center'}>
        <Text fontSize={'3xl'} fontFamily={'cursive'} > 
        Dio Bank
        </Text>
    </Flex>
  )
}
