import {Button, Card, GridItem, Heading, Image, Stack, Text} from "@chakra-ui/react";
import {CiEdit} from "react-icons/ci";
import {FaTrashRestore} from "react-icons/fa";
import {useProductStore} from "@/store/productStore.js";
import {toast} from "react-toastify";

const ProductItem = ({product}) => {
    const {deleteProducts} = useProductStore()
    const handleDelete = async(id) => {
        const {success, message} = await deleteProducts(id);
        if(success){
            toast.success({
                message: message,
                position: "top-right",
                duration: 3000,
            })
        } else {
            toast.error({
                message: message,
                position: "top-right",
                duration: 3000,
            })
        }
    }
    return (
        <GridItem w='100%'  >
            <Card.Root width={'full'} textAlign={'center'} marginBottom={4} padding={4}>
                <Image src={product.image} alt={product.name} />
                <Heading as={'h3'} marginTop={3}>{product.name}</Heading>
                <Text >${product.price.toFixed(2)}</Text>
                <Stack gap="2" align="flex-start">
                    <Stack    direction="row" gap="10">
                        <Button variant="subtle"><CiEdit /></Button>
                        <Button variant="subtle" onClick={()=>handleDelete(product._id)}><FaTrashRestore /></Button>
                    </Stack>
                </Stack>
            </Card.Root>
        </GridItem>
    );
}

export default ProductItem