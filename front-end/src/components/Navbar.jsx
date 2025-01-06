import {
    Box,
    Flex,
    Text,
    DrawerBackdrop,
    DrawerContent,
    DrawerRoot,
    HStack, Button, Icon
} from '@chakra-ui/react'

import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings
} from 'react-icons/fi'

import {CloseButton} from "@/components/ui/close-button.jsx";
import {ColorModeButton, useColorModeValue} from "@/components/ui/color-mode.jsx";
import React, { useState } from "react"
import {IoMdMenu} from "react-icons/io";
import {Md3dRotation} from "react-icons/md";
import {Link} from "react-router-dom";



const LinkItems = [
    { name: 'Home', icon: FiHome, url:'/' },
    { name: 'Create', icon: FiTrendingUp, url:'/create' },
    { name: 'Trending', icon: FiTrendingUp, url:'/' },
    { name: 'Explore', icon: FiCompass, url:'/' },
    { name: 'Favourites', icon: FiStar, url:'/' },
    { name: 'Settings', icon: FiSettings, url:'/' },
]

const SidebarContent = ({ onClose, ...rest }) => {
    return (
        <Box
            transition="3s ease"
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            {...rest}>
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    Logo1
                </Text>
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose}  />
            </Flex>

            {LinkItems.map((link, i) => (
                <NavItem key={link.name} icon={link.icon} url={link.url}>
                    {link.name}
                </NavItem>
            ))}
        </Box>
    )
}

const NavItem = ({ icon, url, children, ...rest }) => {
    return (
        <Box
            as="a"
            href={url}
            style={{ textDecoration: 'none' }}
            _focus={{ boxShadow: 'none' }}>
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'cyan.400',
                    color: 'white',
                }}
                {...rest}>
                {children}
            </Flex>
        </Box>
    )
}

const MobileNav = ({ onOpen, open, ...rest }) => {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 4 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue('white', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent={{ base: 'space-between', md: 'flex-end' }}
            {...rest}>
            <Button variant="plain" onClick={()=>onOpen(!open)}>
                <IoMdMenu />
            </Button>

            <Text
                display={{ base: 'flex', md: 'none' }}
                fontSize="2xl"
                fontFamily="monospace"
                fontWeight="bold">
                Mobile2
            </Text>

            <HStack spacing={{ base: '0', md: '6' }}>
                <ColorModeButton  variant="subtle"/>
            </HStack>
        </Flex>
    )
}

const SidebarWithHeader = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <SidebarContent onClose={() => setOpen} display={{ base: 'none', md: 'block' }} />
            <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)} placement={'start'}  size={'sm'}>
                <DrawerBackdrop />
                <DrawerContent>
                    <SidebarContent onClose={()=>setOpen(!open)} />
                </DrawerContent>
            </DrawerRoot>
            <MobileNav onOpen={setOpen} open={open}   />
        </>
    )
}

export default SidebarWithHeader