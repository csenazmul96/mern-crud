import {Button, Input, Stack} from "@chakra-ui/react";
import { Field } from "@/components/ui/field"
import {useState} from "react";
import createProduct from "@/pages/CreateProduct.jsx";
import {useProductStore} from "@/store/productStore.js";
import {toast} from "react-toastify";

const ProductForm = () => {
    const [form, setForm] = useState({
        name: "",
        price: "",
        image: ""
    })
    const {createProduct, products} = useProductStore()

    const handleClick = async () => {
     const {message, success}   = await createProduct(form)

        if(success){
            toast.success(message, {
                position: 'top-right',
                duration: 3000,
            });
            setForm({name: "", price: "", image: ""})
        } else {
            toast.error(message, {
                position: 'top-right',
                duration: 3000,
            });
        }
    }
    return (
        <Stack>
            <Field label="Product Name" invalid errorText="This is an error text">
                <Input
                    placeholder="Name"
                    name="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
                />
            </Field>
            <Field label="Price">
                <Input
                    placeholder="Price"
                    type="number"
                    name="price"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
                />
            </Field>
            <Field label="Image">
                <Input
                    placeholder="Image"
                    name="image"
                    onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
                />
            </Field>
            <Button onClick={handleClick}>Click me</Button>
        </Stack>
    )
}

export default ProductForm