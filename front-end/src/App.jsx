import {Box} from "@chakra-ui/react";
import {Route, Routes} from "react-router-dom";
import HomePage from "@/pages/HomePage";
import CreateProduct from "@/pages/CreateProduct.jsx";
import Navbar from "@/components/Navbar.jsx";
import SidebarWithHeader from "@/components/Navbar.jsx";

function App() {

  return (
    <>
        <Box minHeight="100vh">
            <SidebarWithHeader />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/create" element={<CreateProduct />} />
            </Routes>
        </Box>
    </>
  )
}

export default App
