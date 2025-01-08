import {create} from 'zustand'

export const useProductStore = create((set) =>({
    products: [],
    setProducts: (products) => set({products}),
    createProduct: async (newProduct) => {
        if(!newProduct.name || !newProduct.price || !newProduct.image) {
            return {success: false, message: "Please fill in all fields."};
        }
        const res = await fetch(`/api/products`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct)
        })

        if (res.status === 200) {
            const data = await res.json()
            set((state) => ({products:[...state.products, data.data]}))
            return {success: true, message: "Please has been created."};
        } else {
            return {success: false, message: "Something went wrong."};
        }


    },
    getProducts: async() => {
        const res = await fetch(`/api/products`,{
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }
        })

        if(res.status === 200) {
            const data = await res.json()
            set({products:data.data})
        } else {
            return {success: false, message: "Something went wrong."};
        }
    },
    deleteProducts: async(id) => {
        const res = await fetch(`/api/products/${id}`,{
            method: 'Delete'
        })

        if(res.status === 200) {
            set((state) => ({products:state.products.filter((item)=>item._id !== id)}))
            return {success: true, message: "Product deleted successfully."};
        } else {
            return {success: false, message: "Something went wrong."};
        }
    },
    getSingleProducts: async(id) => {
        const res = await fetch(`/api/products/${id}`,{
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }
        })

        if(res.status === 200) {
            const data = await res.json()
            console.log('data')
            return {success: true, message: "Product Found.", data: data.data};
        } else {
            return {success: false, message: "Something went wrong.", data: null};
        }
    },

}))