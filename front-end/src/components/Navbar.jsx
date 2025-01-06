import {
    Box,
    Flex,
    Text,
    useDisclosure,
    DrawerActionTrigger,
    DrawerBackdrop,
    DrawerBody,
    DrawerCloseTrigger,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerRoot,
    DrawerTitle,
    DrawerTrigger
} from '@chakra-ui/react'

import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
} from 'react-icons/fi'


import {CloseButton} from "@/components/ui/close-button.jsx";
import {useColorModeValue} from "@/components/ui/color-mode.jsx";
import { Button } from "@/components/ui/button"
import { useState } from "react"


const LinkItems = [
    { name: 'Home', icon: FiHome },
    { name: 'Trending', icon: FiTrendingUp },
    { name: 'Explore', icon: FiCompass },
    { name: 'Favourites', icon: FiStar },
    { name: 'Settings', icon: FiSettings },
]

const SidebarContent = ({ onClose, ...rest }) => {
    const [open, setOpen] = useState(false)
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
                    Logo
                </Text>
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />

            </Flex>

        </Box>
    )
}



const SidebarWithHeader = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
            <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
            <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
                <DrawerBackdrop />
                <DrawerTrigger asChild>
                    <Button variant="outline" size="sm">
                        Open Drawer
                    </Button>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Drawer Title</DrawerTitle>
                    </DrawerHeader>
                    <DrawerBody>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </DrawerBody>
                    <DrawerFooter>
                        <DrawerActionTrigger asChild>
                            <Button variant="outline">Cancel</Button>
                        </DrawerActionTrigger>
                        <Button>Save</Button>
                    </DrawerFooter>
                    <DrawerCloseTrigger />
                </DrawerContent>
            </DrawerRoot>

            <Box ml={{ base: 0, md: 60 }} p="4">
                {/* Content */}
            </Box>
        </Box>
    )
}

export default SidebarWithHeader