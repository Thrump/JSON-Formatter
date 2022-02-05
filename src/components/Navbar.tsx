import { Flex, Link } from "@chakra-ui/react";
import { Link as routerLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex bgColor={'black'} paddingY='10px' gap='30px'>
    <Link as={routerLink} to="/" color={'white'} fontSize='2xl' ml='16px'>Formatter</Link>
    <Link as={routerLink} to="/comparator" color={'white'} fontSize='2xl'>Comparator</Link>
    </Flex>
  );
};

export default Navbar;