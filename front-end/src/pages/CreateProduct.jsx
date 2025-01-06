import { Card } from "@chakra-ui/react"
import ProductForm from "@/components/product/ProductForm.jsx";

const CreateProduct = () => {
    return (
        <>
            <Card.Root>
                <Card.Header mb="2">Create Product </Card.Header>
                <Card.Body>
                    <ProductForm />
                </Card.Body>
            </Card.Root>
        </>
    )
}
export default CreateProduct