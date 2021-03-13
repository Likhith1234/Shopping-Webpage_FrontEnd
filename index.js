let products = [
    {
        id : 1,
        name : "Brown Jacket",
        size : "L",
        price : 1200,
        colour : "Brown",
        image : "https://product.koovs.com/home-MW-2-7U3dGr.jpg",
        description : "A Good-looking Brown Jacket for Mens"
    },

    {
        id : 2,
        name : "Kancheepuram Saree",
        size : "L",
        price : 2100,
        colour : "Red",
        image : "https://cpimg.tistatic.com/04553411/b/4/tr:w-300/extra-04553411.jpg",
        description : "A Good-looking Red Saree for Womens"
    },

    {
        id : 3,
        name : "Pink Top",
        size : "M",
        price : 1200,
        colour : "Pink",
        image : "https://p.kindpng.com/picc/s/761-7610384_transparent-classy-model-png-girl-png-download.png",
        description : "A Good-looking Pink Top for ladies"
    },

    {
        id : 4,
        name : "Brown Royal Jacket",
        size : "L",
        price : 2000,
        colour : "Brown",
        image : "https://www.pinpng.com/pngs/m/116-1167600_male-model-png-image-free-download-men-model.png",
        description : "A Good-looking Brown Jacket for Mens"
    },

    {
        id : 5,
        name : "Grey Jacket",
        size : "XL",
        price : 1100,
        colour : "Grey",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlWLTioOSYldiY4sm5paKppBATgA6_tPBd_g&usqp=CAU",
        description : "A Good-looking Grey Jacket for Mens"
    },

    {
        id : 6,
        name : "Black Jacket",
        size : "S",
        price : 1000,
        colour : "Black",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQandvVIOBriQn9rrZd27s4BitBwk08HgRVMw&usqp=CAU",
        description : "A Good-looking Black Jacket for Mens"
    },

    {
        id : 7,
        name : "Blue T-Shirt and Blue Torn Jeans Combo",
        size : "M",
        price : 2500,
        colour : "Blue and Blue",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ484DLRoTvpIbs1yIrU21bIgLOqmr51FtGGA&usqp=CAU",
        description : "A Good-looking Blue Combo for Mens"
    },

    {
        id : 8,
        name : "White T-Shirt",
        size : "M",
        price : 800,
        colour : "White",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHuI82dWpGtA4WM0Z07kWEv2O5dmWP1Zmn7Q&usqp=CAU",
        description : "A Good-looking White T-Shirt for Mens"
    },

    {
        id : 9,
        name : "Red Checked Shirt",
        size : "L",
        price : 1500,
        colour : "Red",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQKOxEH1e1mLQTEb7RvycA7JKanRl8IW2VFA&usqp=CAU",
        description : "A Good-looking Casual Red Shirt for Mens"
    },

    {
        id : 10,
        name : "Black Jacket",
        size : "L",
        price : 2000,
        colour : "Black",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRC1JbR180UoN-0w_C0qORW03UzY_7oyYN4UA&usqp=CAU",
        description : "A Good-looking Black Jacket for Mens"
    },

    {
        id : 11,
        name : "White Formal Shirt",
        size : "M",
        price : 1500,
        colour : "White",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTr4FvEaZQzZ6MxmAZ0BiqcxIErFYv421U_Wg&usqp=CAU",
        description : "A Good-looking White Formal Shirt for Mens"
    },

    {
        id : 12,
        name : "Rowdy Blue Shirt",
        size : "S",
        price : 1300,
        colour : "Blue",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTL2lZDtJDuPrgyhcJAgo3_EOHp5vY_ybVObQ&usqp=CAU",
        description : "Massy Blue Shirt for Mens"
    }
];

cart = [];

function displayProducts(thing, place="shopping")
{
    if (place == "shopping")
    {
        let productstring = "";
        thing.forEach(function(element) {
            let {id, name, size, price, colour, image, description} = element;
            let currentproduct = `<div class="product">
            <img class="image" src="${image}">
            <h3>${name}</h3>
            <p>Size : ${size}</p>
            <p>Price : ${price}</p>
            <p>Colour : ${colour}</p>
            <p>Description : ${description}</p>
            <p><button onclick="addToCart(${id})">Add To Cart</button></p>
            </div>`;
            productstring += currentproduct;
        });
        document.getElementById("product").innerHTML = productstring;
    }
    else if (place == "cart")
    {
        let productstring = "";
        thing.forEach(function(element) {
            let {id, name, size, price, colour, image, description} = element;
            let currentproduct = `<div class="product">
            <img class="image" src="${image}">
            <h3>${name}</h3>
            <p>Size : ${size}</p>
            <p>Price : ${price}</p>
            <p>Colour : ${colour}</p>
            <p>Description : ${description}</p>
            <p><button onclick="removeFromCart(${id})">Remove From Cart</button></p>
            </div>`;
            productstring += currentproduct;
        });
        document.getElementById("cart").innerHTML = productstring;
    }
    let cart_items = `Number of items in the cart is: ${cart.length}`;
    document.getElementById("cart_occupency").innerHTML = cart_items;
}
displayProducts(products);

function getProductById(array, id)
{
    let p = array.find(function(item) {
        //console.log(item.id == id);
        return item.id == id;
    });
    //console.log(p);
    return p;
}

function addToCart(id)
{
    let product = getProductById(products, id);
    //console.log(product);
    let result = cart.includes(product);
    if(result == true)
    {
        alert(`${product.name} product is already added in the cart`);
    }
    else
    {
        cart.push(product);
    }
    displayProducts(cart, "cart");
}

function removeFromCart(id)
{
    let index = cart.findIndex(function(e) {
        return e.id==id;
    });
    cart.splice(index, 1);
    displayProducts(cart, "cart");
}

function searchBox(value)
{
    let searchValue = products.filter(function(item) {
        let searchstring = item.name + " " + item.colour + " " + item.description;
        return searchstring.toLowerCase().indexOf(value.toLowerCase()) != -1;
    });
    displayProducts(searchValue);
}

let filter_products = [];
function filterPrices(e)
{
    e.preventDefault();
    let max_price = document.getElementsByClassName("price")[0].value;
    let min_price = document.getElementsByClassName("price")[1].value;
    products.forEach(function(element){
        if (element.price <= Number(max_price) && element.price >= Number(min_price))
        {
            //console.log(element);
            filter_products.push(element);
        }
    })
    displayProducts(filter_products);
    filter_products = []
}