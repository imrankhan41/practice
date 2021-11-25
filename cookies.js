

const productPrice =() =>{
    const inputProduct = document.getElementById("inputName");
    const inputPrice =document.getElementById("inputPrice");
    const inputProductValue =inputProduct.value;
    const inputPriceValue =inputPrice.value;
    displayProductPrice(inputProductValue,inputPriceValue)
    inputProduct.value="";
    inputPrice.value="";
}

const displayProductPrice = (product,price)=>{
    console.log(product,price)
    const productPrice = document.getElementById("product-price");
    const li =document.createElement("li");
    li.classList.add("prodprice")
    li.innerHTML=`
    <p>ProductName:${product} ProductPrice:${price}</p>
    `
    console.log(li.innerHTML)
    productPrice.appendChild(li);
}
const getProduct=()=>{
    const product = localStorage("product");
    let productObj;
    if(product){
        productObj=JSON.parse(product);
    }else{
        productObj={};
    }
    return productObj;
}
const addProductToObj=(product,price)=>{
    const product = getProduct();
    
}