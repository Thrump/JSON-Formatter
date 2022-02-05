import { Center, Heading, Link, VStack, Text } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <Center mt={"20px"}>
      <VStack>
      <Heading as="h1" mt={16} size={'2xl'}>
          Not Found
      </Heading>
      <Heading as="h2" size={'xl'}>
        <Link as={RouterLink} to='/'><Text as='u'>Home</Text></Link>
      </Heading>
      </VStack>
    </Center>
  );
};

export default NotFound;