import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li data-type="product" data-name="${product.name}" data-price="${product.price.toFixed(2)}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener("click", (clickEvent)=>{
    const itemClicked = clickEvent.target;
    const productName = itemClicked.dataset.name;
    const productPrice = itemClicked.dataset.price;
    if (itemClicked.dataset.type === "product") {
   
        window.alert(`${productName} costs\n$${productPrice}`)
        
    }
    

})

