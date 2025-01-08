import {useParams} from "react-router-dom";
import {useProductStore} from "@/store/productStore.js";
import ProductForm from "@/components/product/ProductForm.jsx";
import {Container, Card, Text} from "@chakra-ui/react";
import { useState} from "react";

const EditProduct = () => {
    const {id} = useParams();
    const {getSingleProducts} = useProductStore()
    const [product, setProduct] = useState(null)
    getSingleProducts(id).then((data) => {

        setProduct(data.data)
    })


    return (
        <Container display="flex" justifyContent="center" padding={2} marginTop={5}>
            <Card.Root w="50%">
                <Card.Header mb="2"><Text fontSize="lg">Create Product</Text></Card.Header>
                <Card.Body>
                    <ProductForm product={product}  />
                </Card.Body>
            </Card.Root>
        </Container>
    )
}
export default EditProduct