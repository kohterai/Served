//To load fixtures inside the browser, run Meteor.call("fixtures")

Meteor.methods({
    'fixtures': function() {
        Foods.remove({})
        Restaurants.remove({})
        console.log("database dropped")
        for (i = 0; i < menuList.length; i++) {
            Foods.insert(menuList[i]);
        }
        for (i = 0; i < restaurantList.length; i++) {
            Restaurants.insert(restaurantList[i]);
        }
        console.log("fixtures inserted")
    }
});

restaurantList = [{
        _id: "1",
        name: "Gazebo",
        latitude: 10.239823,
        longtitude: 20.33322
    },
    {
        _id: "2",
        name: "Quans Aweoms.",
        latitude: 121.1212,
        longtitude: 211121
    }]

menuList = [{
    restaurantID: 1,
    name: "Fruit Punch",
    rating: 25,
    price: 20,
    category: "drink",
    filter: []
    },

    {
    restaurantID: 1,
    name: "PIna Colada",
    rating: 15,
    price: 20,
    category: "drink",
    filter: []
    }, 

    {
    restaurantID: 1,
    name: "Mango Milk Shake",
    rating: 5,
    price: 19,
    category: "drink",
    filter: []
    }, 
    {
    restaurantID: 1,
    name: "Orange Juice",
    rating: 14,
    price: 17,
    category: "drink",
    filter: []
    }, 
    {
    restaurantID: 1,
    name: "Pineapple Juice",
    rating: 13,
    price: 17,
    category: "drink",
    filter: []
    }, 
    {
    restaurantID: 1,
    name: "Lassi",
    rating: 25,
    price: 13,
    category: "drink",
    filter: []
    }, 
    {
    restaurantID: 1,
    name: "Cocum Sherbet",
    rating: 19,
    price: 11,
    category: "drink",
    filter: []
    }, 
    {
    restaurantID: 1,
    name: "Fattoush",
    rating: -10,
    price: 18,
    category: "salad",
    filter: []

    }, 
    {
    restaurantID: 1,
    name: "Moutabel",
    rating: 30,
    price: 18,
    category: "salad",
    filter: []
    }, 

    {
    restaurantID: 1,
    name: "Tabouleh",
    rating: 20,
    price: 18,
    category: "salad",
    filter: []
    }, 

    {
    restaurantID: 1,
    name: "Arabic Salad",
    rating: 40,
    price: 17,
    category: "salad",
    filter: []
    }, 

    {
    restaurantID: 1,
    name: "Shabi Bagh",
    rating: 50,
    price: 16,
    category: "salad",
    filter: []
    }, 

    {
    restaurantID: 1,
    name: "Hara Bhara Salad",
    rating: 5,
    price: 10,
    category: "salad",
    filter: []
    }, 
    {
    restaurantID: 1,
    name: "Kachumber Salad",
    rating: 25,
    price: 10,
    category: "salad",
    filter: []
    }, 

    {
    restaurantID: 1,
    name: "Paya Yakhni Shorba",
    rating: 25,
    price: 14,
    category: "shorba",
    filter: []
    }, 

    {
    restaurantID: 1,
    name: "Dum Murgh Shorba",
    rating: 45,
    price: 14,
    category: "shorba",
    filter: []
    }, 
    {
    restaurantID: 1,
    name: "Tamtar Shorba",
    rating: 7,
    price: 13,
    category: "shorba",
    filter: []
    }, 
    {
    restaurantID: 1,
    name: "Shorba Dil Pasand",
    rating: 14,
    price: 13,
    category: "shorba",
    filter: []

    }, 
    {
    restaurantID: 1,
    name: "Afghani Murgh",
    rating: 44,
    price: 27,
    category: "main dish",
    filter: ["kabab", "chicken"]
    }, 
    { 
    restaurantID: 1,
    name: "Tandoori Murgh",
    rating: 57,
    price: 24,
    category: "main dish",
    filter: ["kabab", "chicken"]
    }, 
    { 
    restaurantID: 1,
    name: "Murgh Chatpata Kabab",
    rating: 64,
    price: 32,
    category: "main dish",
    filter: ["kabab", "chicken"]
    }, 
    { 
    restaurantID: 1,
    name: "Hari Mirch Murgh Ke Tikke",
    rating: 38,
    price: 28,
    category: "main dish",
    filter: ["kabab", "chicken"]
    }, 
    {
    restaurantID: 1,
    name: "Kesri Murgh Tikka",
    rating: 37,
    price: 32,
    category: "main dish",
    filter: ["kabab", "chicken"]
    }, 
    {
    restaurantID: 1,
    name: "Murgh Malai Kabab",
    rating: 53,
    price: 31,
    category: "main dish",
    filter: ["kabab", "chicken"]

    }, 
    {
    restaurantID: 1,
    name: "Murgh Kastoori Kabab",
    rating: 29,
    price: 31,
    category: "main dish",
    filter: ["kabab", "chicken"]
    }]