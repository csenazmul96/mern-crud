import {Button, Input, Stack} from "@chakra-ui/react";
import { Field } from "@/components/ui/field"
import {useState} from "react";

const ProductForm = () => {
    const [form, setForm] = useState({
        name: "",
        price: "",
        image: ""
    })
    const handleClick = () => {
      console.log(form)
    }
    return (
        <Stack gap="5" maxW="full" css={{ "--field-label-width": "96px" }} >
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