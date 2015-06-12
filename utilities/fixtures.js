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

restaurantList = [
    {
        _id: "1",
        name: "Gazebo",
        latitude: 10.239823,
        longtitude: 20.33322
    },
    {
        _id: "2",
        name: "Kamat",
        latitude: 121.1212,
        longtitude: 211121
    },
    {
        _id: "3",
        name: "Sushi Counter",
        latitude: 25.0925363,
        longtitude: 55.1565171
    },
    {
        _id: "4",
        name: "Set Widad",
        latitude: 25.09378, 
        longtitude: 55.160787
    },
    {
        _id: "5",
        name: "Beach Bar & Grill",
        latitude: 25.09378, 
        longtitude: 55.160787
    },

    ]

menuList = [{
    restaurantID: 1,
    name: "Fruit Punch",
    rating: 25,
    price: 20,
    category: "drink",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    },

    {
    restaurantID: 1,
    name: "Pina Colada",
    rating: 15,
    price: 20,
    category: "drink",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 

    {
    restaurantID: 1,
    name: "Anchovies",
    rating: 28,
    price: 25,
    category: "main dish",
    filter: ["halal"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg",
    halal: true
    }, 

    {
    restaurantID: 1,
    name: "Fried Cod",
    rating: 39,
    price: 30,
    category: "main dish",
    filter: ["halal"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg",
    halal: true
    }, 

    {
    restaurantID: 1,
    name: "King Fish",
    rating: -25 ,
    price: 15,
    category: "main dish",
    filter: ["halal"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg",
    halal: true
    }, 
    {
    restaurantID: 1,
    name: "Mackerel",
    rating: 27 ,
    price: 39,
    category: "main dish",
    filter: ["halal"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg",
    halal: true
    }, 

    {
    restaurantID: 1,
    name: "Mango Milk Shake",
    rating: 5,
    price: 19,
    category: "drink",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 1,
    name: "Orange Juice",
    rating: 14,
    price: 17,
    category: "drink",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 1,
    name: "Pineapple Juice",
    rating: 13,
    price: 17,
    category: "drink",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 1,
    name: "Lassi",
    rating: 25,
    price: 13,
    category: "drink",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 1,
    name: "Cocum Sherbet",
    rating: 19,
    price: 11,
    category: "drink",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 1,
    name: "Fattoush",
    rating: -10,
    price: 18,
    category: "salad",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"

    }, 
    {
    restaurantID: 1,
    name: "Moutabel",
    rating: 30,
    price: 18,
    category: "salad",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 

    {
    restaurantID: 1,
    name: "Tabouleh",
    rating: 20,
    price: 18,
    category: "salad",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 

    {
    restaurantID: 1,
    name: "Arabic Salad",
    rating: 40,
    price: 17,
    category: "salad",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 

    {
    restaurantID: 1,
    name: "Shabi Bagh",
    rating: 50,
    price: 16,
    category: "salad",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 

    {
    restaurantID: 1,
    name: "Hara Bhara Salad",
    rating: 5,
    price: 10,
    category: "salad",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 1,
    name: "Kachumber Salad",
    rating: 25,
    price: 10,
    category: "salad",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 

    {
    restaurantID: 1,
    name: "Paya Yakhni Shorba",
    rating: 25,
    price: 14,
    category: "shorba",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 

    {
    restaurantID: 1,
    name: "Dum Murgh Shorba",
    rating: 45,
    price: 14,
    category: "shorba",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 1,
    name: "Tamtar Shorba",
    rating: 7,
    price: 13,
    category: "shorba",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 1,
    name: "Shorba Dil Pasand",
    rating: 14,
    price: 13,
    category: "shorba",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"

    }, 
    {
    restaurantID: 1,
    name: "Afghani Murgh",
    rating: 44,
    price: 27,
    category: "main dish",
    filter: ["kabab", "chicken"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    { 
    restaurantID: 1,
    name: "Tandoori Murgh",
    rating: 57,
    price: 24,
    category: "main dish",
    filter: ["kabab", "chicken"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    { 
    restaurantID: 1,
    name: "Murgh Chatpata Kabab",
    rating: 64,
    price: 32,
    category: "main dish",
    filter: ["kabab", "chicken"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    { 
    restaurantID: 1,
    name: "Hari Mirch Murgh Ke Tikke",
    rating: 38,
    price: 28,
    category: "main dish",
    filter: ["kabab", "chicken"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 1,
    name: "Kesri Murgh Tikka",
    rating: 37,
    price: 32,
    category: "main dish",
    filter: ["kabab", "chicken"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 1,
    name: "Murgh Malai Kabab",
    rating: 53,
    price: 31,
    category: "main dish",
    filter: ["kabab", "chicken"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"

    }, 
   

    {
    restaurantID: 1,
    name: "Lobster Tandoori",
    rating: 54,
    price: 86,
    category: "main dish",
    filter: ["kabab", "sea food"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    },
    {
    restaurantID: 1,
    name: "Jhinga Tandoori",
    rating: 26,
    price: 63,
    category: "main dish",
    filter: ["kabab", "sea food"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    },
    {
    restaurantID: 1,
    name: "Mahi Tikka",
    rating: 23,
    price: 42,
    category: "main dish",
    filter: ["kabab", "sea food"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    },
    {
    restaurantID: 1,
    name: "Shahi Paneer Tikka",
    rating: 37,
    price: 28,
    category: "main dish",
    filter: ["kabab", "vegetarian"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    },
    {
    restaurantID: 1,
    name: "Paneer Tikka",
    rating: 56,
    price: 28,
    category: "main dish",
    filter: ["kabab", "vegetarian"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    },
    {
    restaurantID: 1,
    name: "Shahi Mushroom",
    rating: 28,
    price: 28,
    category: "main dish",
    filter: ["kabab", "vegetarian"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    },
    {
    restaurantID: 1,
    name: "Saundhe Aloo",
    rating: 25,
    price: 25,
    category: "main dish",
    filter: ["kabab", "vegetarian"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    },

    

    {
    restaurantID: 2,
    name: "Idli",
    rating: 15,
    price: 8,
    category: "appetizer",
    filter: ["appetizer"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 2,
    name: "Sada Dosa",
    rating: 25, 
    price: 7,
    category: "appetizer",
    filter: ["appetizer"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 2,
    name: "Paper Sada Dosa",
    rating: 43,
    price: 14,
    category: "appetizer",
    filter: ["appetizer"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 2,
    name: "Cheese Dosa",
    rating: 14,
    price: 11,
    category: "appetizer",
    filter: ["appetizer"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 2,
    name: "Andhra Masala Dosa",
    rating: 27,
    price: 11,
    category: "appetizer",
    filter: ["appetizer"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 2,
    name: "Tomato Rice",
    rating: 27,
    price: 15,
    category: "main dish",
    filter: ["rice"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 2,
    name: "Curd Rice",
    rating: 38,
    price: 15,
    category: "main dish",
    filter: ["rice"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 2,
    name: "Lemon Rice",
    rating: 15,
    price: 15,
    category: "main dish",
    filter: ["rice"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 2,
    name: "Paneer Chatpata",
    rating: 49,
    price: 22,
    category: "main dish",
    filter: ["kabab"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 2,
    name: "Palak Paneer Makai Seekh",
    rating: 12,
    price: 20,
    category: "main dish",
    filter: ["kabab"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 2,
    name: "Hara Bhara Kabab",
    rating: 38,
    price: 19,
    category: "main dish",
    filter: ["kabab"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 2,
    name: "Baby Corn Mushroom",
    rating: 19,
    price: 20,
    category: "main dish",
    filter: ["vegetarian"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg",
    vegetarian: true
    }, 
    {
    restaurantID: 2,
    name: "Veg. Lahori",
    rating: 59,
    price: 19,
    category: "main dish",
    filter: ["vegetarian"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg",
    vegetarian: true
    }, 
    {
    restaurantID: 2,
    name: "Malai Kofta",
    rating: 29,
    price: 19,
    category: "main dish",
    filter: ["vegetarian"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg",
    vegetarian: true
    }, 
    {
    restaurantID: 2,
    name: "Navratan Korma",
    rating: 51,
    price: 20,
    category: "main dish",
    filter: ["vegetarian"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg",
    vegetarian: true
    }, 
    {
    restaurantID: 2,
    name: "Veg, Achari",
    rating: 27,
    price: 19,
    category: "main dish",
    filter: ["vegetarian"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg",
    vegetarian: true
    }, 
    {
    restaurantID: 2,
    name: "Mushroom Soup",
    rating: 19,
    price: 11,
    category: "soup",
    filter: ["soup"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 2,
    name: "Talumein Soup",
    rating: 49,
    price: 11,
    category: "soup",
    filter: ["soup"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 2,
    name: "Lemon Coriander Soup",
    rating: 38,
    price: 10,
    category: "soup",
    filter: ["soup"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 2,
    name: "Stired Fried Veg. Soup",
    rating: 29,
    price: 10,
    category: "soup",
    filter: ["soup"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 2,
    name: "Tomato Soup",
    rating: 36,
    price: 10,
    category: "soup",
    filter: ["soup"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 2,
    name: "Grill Beef",
    rating: 49,
    price: 35,
    category: "main dish",
    filter: ["halal"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg",
    halal: true
    }, 
    {
    restaurantID: 2,
    name: "Grilled Chicken",
    rating: -18,
    price: 25,
    category: "main dish",
    filter: ["halal"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg",
    halal: true
    }, 
    {
    restaurantID: 2,
    name: "Beef Stir",
    rating: 39,
    price: 30,
    category: "main dish",
    filter: ["halal"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg",
    halal: true
    }, 
    {
    restaurantID: 2,
    name: "Beef Salad",
    rating: 15,
    price: 15,
    category: "main dish",
    filter: ["halal"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg",
    halal: true
    }, 

    {
    restaurantID: 3,
    name: "Salmon Tartare",
    rating: 39,
    price: 40,
    category: "main",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 3,
    name: "Beef Tenderloin Tartare",
    rating: 59,
    price: 70,
    category: "main",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 3,
    name: "White Fish Tartare",
    rating: 19,
    price: 40,
    category: "main",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 3,
    name: "Tuna Tartare",
    rating: -10,
    price: 40,
    category: "main",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 3,
    name: "Eel",
    rating: -15,
    price: 18,
    category: "main",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 3,
    name: "Scallop",
    rating: 39,
    price: 18,
    category: "main",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 3,
    name: "Octopus",
    rating: -20,
    price: 12,
    category: "main",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 3,
    name: "Meat Lovers",
    rating: 29,
    price: 75,
    category: "main",
    filter: ["halal"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg",
    halal: true
    }, 
    {
    restaurantID: 3,
    name: "Salmon Lovers",
    rating: 10,
    price: 105,
    category: "main",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 3,
    name: "Traditional Sushi",
    rating: 49,
    price: 78,
    category: "main",
    filter: ["halal"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg",
    halal: true
    }, 
    {
    restaurantID: 3,
    name: "Chicken Avocado Roll",
    rating: 37,
    price: 25,
    category: "main",
    filter: ["halal"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg",
    halal: true
    }, 
    {
    restaurantID: 3,
    name: "Salmon Spicy",
    rating: 49,
    price: 26,
    category: "main",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 3,
    name: "Soft Drink",
    rating: 2,
    price: 6,
    category: "drink",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 3,
    name: "Iced Green Tea",
    rating: 19,
    price: 9,
    category: "main",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 3,
    name: "Orange Juice",
    rating: 15,
    price: 12,
    category: "drink",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 3,
    name: "Cheese Cake",
    rating: 49,
    price: 26,
    category: "desert",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 3,
    name: "Avocado Roll",
    rating: 19,
    price: 26,
    category: "main dish",
    filter: ["vegetarian"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg",
    vegetarian: true
    }, 
    {
    restaurantID: 3,
    name: "Cucumber Roll",
    rating: 28,
    price: 19,
    category: "main dish",
    filter: ["vegetarian"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg",
    vegetarian: true
    }, 
    {
    restaurantID: 3,
    name: "Oklahoma Roll",
    rating: 59,
    price: 39,
    category: "main dish",
    filter: ["vegetarian"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg",
    vegetarian: true
    }, 
    {
    restaurantID: 3,
    name: "Japanese Roll",
    rating: 26,
    price: 17,
    category: "main dish",
    filter: ["vegetarian"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg",
    vegetarian: true
    }, 

    {
    restaurantID: 4,
    name: "Fattoush",
    rating: 37,
    price: 15,
    category: "appetizer",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 4,
    name: "Tabbouleh",
    rating: 5,
    price: 15,
    category: "appetizer",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 4,
    name: "Chicken Ceazar Salad",
    rating: -10,
    price: 20,
    category: "drink",
    filter: ["halal"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg",
    halal: true
    }, 
    {
    restaurantID: 4,
    name: "Mix Grill",
    rating: 25,
    price: 40,
    category: "main dish",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 4,
    name: "Shish Tawook",
    rating: 15,
    price: 33,
    category: "main dish",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 4,
    name: "Meat Cube",
    rating: -13,
    price: 38,
    category: "main dish",
    filter: ["halal"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg",
    halal: true
    },     {
    restaurantID: 4,
    name: "Eggplant",
    rating: 39,
    price: 40, 
    category: "main dish",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    },     {
    restaurantID: 4,
    name: "Boneless Chicken",
    rating: 15,
    price: 19,
    category: "main dish",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    },     {
    restaurantID: 4,
    name: "Lamp Chop",
    rating: 17,
    price: 45,
    category: "main dish",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    },     
    {
    restaurantID: 4,
    name: "Grilled Wings",
    rating: -10,
    price: 28,
    category: "main dish",
    filter: ["halal"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg",
    halal: true
    }, 
    {
    restaurantID: 4,
    name: "Lemonade",
    rating: 15,
    price: 12,
    category: "drink",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 4,
    name: "Sweetmelon",
    rating: 26,
    price: 12,
    category: "drink",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 4,
    name: "Avocado",
    rating: 29,
    price: 16,
    category: "drink",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 4,
    name: "Mango",
    rating: 39,
    price: 19,
    category: "drink",
    filter: ["halal"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg",
    halal: true
    }, 

    {
    restaurantID: 5,
    name: "Fried Calamari",
    rating: 27,
    price: 58,
    category: "appetizer",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 5,
    name: "Crab Cake",
    rating: 17,
    price: 85,
    category: "appetizer",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 5 ,
    name: "Poached Egg",
    rating: 49,
    price: 85,
    category: "appetizer",
    filter: ["halal"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg",
    halal: true
    }, 
    {
    restaurantID: 5, 
    name: "Caesar Salad",
    rating: 30,
    price: 68,
    category: "appetizer",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 5,
    name: "Greek Style Salad",
    rating: -15,
    price: 68,
    category: "appetizer",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 5,
    name: "Australian Wagyu",
    rating: 39,
    price: 280,
    category: "main dish",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 5,
    name: "Grilled Lamb Chop",
    rating: 45,
    price: 140,
    category: "main dish",
    filter: ["halal"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg",
    halal: true
    }, 
    {
    restaurantID: 5,
    name: "Grilled Veal Chop",
    rating: 39,
    price: 200,
    category: "main dish",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 5,
    name: "Grilled Chicken Escalope",
    rating: 46,
    price: 95,
    category: "main dish",
    filter: [],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg"
    }, 
    {
    restaurantID: 5,
    name: "Vegetable Plate",
    rating: 39,
    price: 35,
    category: "main dish",
    filter: ["vegetarian"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg",
    vegetarian: true
    }, 
    {
    restaurantID: 5,
    name: "Mixed Salad & Nuts",
    rating: -15,
    price: 25,
    category: "main dish",
    filter: ["vegetarian"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg",
    vegetarian: true
    }, 
    {
    restaurantID: 5,
    name: "Hummus & Bread",
    rating: 46,
    price: 95,
    category: "main dish",
    filter: ["vegetarian"],
    description: "This is a wonderful dish that combines teriyaki sauce and beautiful beautifl honey sauce.",
    image: "http://www.kingpitaandrice.com/wp-content/uploads/2013/11/king-pita-butter-chicken-oshawa-halal-.jpg",
    vegetarian: true
    }, 

]