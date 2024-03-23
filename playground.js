let product ={
    lable : 'red notebook',
    price: 3,
    stock : 201,
    salePrice: undefined,
    rating: 4.3
}

// let {tipe: lable, width, height, color = "red"} = options;


const transaction = (options , {lable , price}) => {
    console.log(options , lable , price)
}

transaction("order" , product)