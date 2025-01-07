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

import {FaTrashRestore} from "react-icons/fa";
import {CiEdit} from "react-icons/ci";

const HomePage = () => {
  const {getProducts, products} = useProductStore()
  useEffect(() => {
    getProducts()
  }, [getProducts])

  console.log(products)
  return (
      <Container fluid>
        <Stack direction="row">
          <Card.Root width={'full'} textAlign={'center'} marginBottom={4} padding={4}>
            <Heading size={"4xl"}>Products</Heading>
          </Card.Root>
        </Stack>

        <Stack direction="column" display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Box p={4} color='white' textAlign={'center'}>
            <Text fontSize={'xl'}> No Product Found!</Text>
            <Link type={'button'} to={'/create'}><Button colorScheme='teal' variant='solid'>Create Product</Button></Link>
          </Box>
        </Stack>

        <Stack direction="row" marginTop={5}>
          <Grid templateColumns='repeat(4, 1fr)' gap={6} width={'full'}>
            {products.map((product) => (
                <GridItem w='100%' key={product.id}>
                  <Card.Root width={'full'} textAlign={'center'} marginBottom={4} padding={4}>
                    <Image src={product.image} alt={product.name} />
                    <Heading as={'h3'} marginTop={3}>{product.name}</Heading>
                    <Text >${product.price.toFixed(2)}</Text>
                    <Stack gap="2" align="flex-start">

                      <Stack    direction="row" gap="10">
                        <Button variant="subtle"><CiEdit /></Button>
                        <Button variant="subtle"><FaTrashRestore /></Button>
                      </Stack>

                    </Stack>
                  </Card.Root>
                </GridItem>
            ))}

          </Grid>

        </Stack>


      </Container>
  );

}

export default HomePage;