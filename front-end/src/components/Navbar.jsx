import {Button, Container, Flex, HStack,  Link, Text} from "@chakra-ui/react";
import {CiSquarePlus} from "react-icons/ci";
import React from "react";
import {FaShoppingCart} from "react-icons/fa";
import {ColorModeButton} from "@/components/ui/color-mode.jsx";

const Navbar = () => {
    return (
        <Container padding={4} width="80%"    bg={{ base: "#eceaea", _dark: "#1c1c1c" }}>
            <Flex alignItems={"center"}  justifyContent="space-between" flexDirection={{base: 'column',   sm: 'row'}}>
                <Text
                    bgGradient="to-r"
                    gradientFrom="cyan.400"
                    gradientTo="blue.500"
                    fontColor="white"
                    fontSize={{base: '22px', sm: '28px'}}
                    fontWeight="bold"
                    textTransform="uppercase"
                    textAlign="center"
                    bgClip="text"
                    >
                    Product Store
                    <FaShoppingCart />

                </Text>
                <HStack spacing={2} alignItems="center" >
                    <Link to="/create">
                        <Button variant="subtle">
                            <CiSquarePlus  />
                        </Button>
                    </Link>
                    <ColorModeButton  variant="subtle"/>

                </HStack>
            </Flex>
        </Container>
    )
}

export default Navbar