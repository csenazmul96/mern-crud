import {Box} from "@chakra-ui/react";
import {Route, Routes} from "react-router-dom";
import HomePage from "@/pages/HomePage";
import CreateProduct from "@/pages/CreateProduct.jsx";
import SidebarWithHeader from "@/components/Navbar.jsx";
import {useColorModeValue} from "@/components/ui/color-mode.jsx";
import {ToastContainer} from "react-toastify";

function App() {

    return (
        <>
            <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
                <SidebarWithHeader />
                <Box ml={{ base: 0, md: 60 }} p="4">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/create" element={<CreateProduct />} />
                    </Routes>
                </Box>
            </Box>
            <ToastContainer />
        </>
    )
}

export default App
