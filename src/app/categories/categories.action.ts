'use server'

export async function getProductsByCategory(id:string) {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`);
    if(res.ok){
        const data = await res.json();
        return data;
    }
    else{
        return null;
    }
}