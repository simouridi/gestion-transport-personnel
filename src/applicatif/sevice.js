import axios from "axios";


export const authApi =axios.create({
    baseURL:"http://localhost:9000"
});

export const getUserByEmail=(email)=>{
    return authApi.get(`/users?email=${email}`);
}
/*
export const getProductList=(keyword="", page=1, size=3)=>{
    return productsApi.get(`/products?name_like=${keyword}&_page=${page}&_limit=${size}`);
}

export const deleteProduct=(product)=>{
    return productsApi.delete(`/products/${product.id}`);
}

export const getProduct=(id)=>{
    return productsApi.get(`/products/${id}`);
}

export const addProduct=(product)=>{
    return productsApi.post(`/products`, product);
}

export const checkProduct=(product)=>{
    return productsApi.patch(`/products/${product.id}`,{checked:!product.checked});
}

export const updateProduct=(product)=>{
    return productsApi.put(`/products/${product.id}`, product);
}
*/