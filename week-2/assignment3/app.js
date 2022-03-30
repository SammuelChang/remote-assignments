function avg(data){
    let sum = 0;
    for ( let i = 0; i < data.products.length; i++){
        sum += data.products[i].price;
        len = data.products.length;
    }
    console.log(sum/len);
} 
    
avg({
    size:3, products:[
                        {
                            name:"Product 1",
                            price:100 },
                        {
                            name:"Product 2",
                            price:700 },
                        {
                            name:"Product 3",
                            price:250 }
                    ]
    }); // show the average price of all products
