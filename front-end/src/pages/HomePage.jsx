import {
    Box,
    Button,
    Card,
    Container,
    Grid,
    GridItem,
    Heading,  Image,
    Stack,
    Text
} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {useProductStore} from "@/store/productStore.js";
import ProductItem from "@/components/product/ProductItem.jsx";


const HomePage = () => {
    const {getProducts, products} = useProductStore()
    useEffect(() => {
        getProducts()
    }, [getProducts])

    return (
        <Container fluid>
            <Stack direction="row">
                <Card.Root width={'full'} textAlign={'center'} marginBottom={4} padding={4}>
                    <Heading size={"4xl"}>Products</Heading>
                </Card.Root>
            </Stack>

            {!products.length && (
                <Stack direction="column" display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Box p={4} color='white' textAlign={'center'}>
                        <Text fontSize={'xl'}> No Product Found!</Text>
                        <Link type={'button'} to={'/create'}><Button colorScheme='teal' variant='solid'>Create Product</Button></Link>
                    </Box>
                </Stack>
            )}

            {products.length && (
                <Stack direction="row" marginTop={5}>
                    <Grid templateColumns='repeat(4, 1fr)' gap={6} width={'full'}>
                        {products.map((product) => (
                            <ProductItem product={product} key={product.id} />
                        ))}
                    </Grid>
                </Stack>
            )}
        </Container>
    );

}

export default HomePage;