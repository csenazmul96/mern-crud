import { Card, Text } from "@chakra-ui/react"
import ProductForm from "@/components/product/ProductForm.jsx";

const CreateProduct = () => {
    return (
        <>
            <Card.Root>
                <Card.Header mb="2"><Text fontSize="lg">Create Product</Text></Card.Header>
                <Card.Body>
                    <ProductForm />
                </Card.Body>
            </Card.Root>
        </>
    )
}
export default CreateProduct