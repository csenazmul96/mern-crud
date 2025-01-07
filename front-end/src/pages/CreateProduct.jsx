import {Box, Card, Container, Stack, Text} from "@chakra-ui/react"
import ProductForm from "@/components/product/ProductForm.jsx";

const CreateProduct = () => {
    return (
        <Container display="flex" justifyContent="center" padding={2} marginTop={5}>
            <Card.Root w="50%">
                <Card.Header mb="2"><Text fontSize="lg">Create Product</Text></Card.Header>
                <Card.Body>
                    <ProductForm />
                </Card.Body>
            </Card.Root>
        </Container>
    )
}
export default CreateProduct