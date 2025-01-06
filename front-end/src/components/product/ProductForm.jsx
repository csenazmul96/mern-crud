import {Button, Input, Stack} from "@chakra-ui/react";
import { Field } from "@/components/ui/field"

const ProductForm = () => {
    return (
        <Stack gap="5" maxW="full" css={{ "--field-label-width": "96px" }} >
            <Field label="Product Name" invalid errorText="This is an error text">
                <Input placeholder="Name" />
            </Field>
            <Field label="Price">
                <Input placeholder="Price" type="number"  />
            </Field>
            <Field label="Image">
                <Input placeholder="Image" type="file"  />
            </Field>
            <Button>Click me</Button>
        </Stack>
    )
}

export default ProductForm