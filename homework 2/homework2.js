function Product(name, category, hasDiscount, price){
    this.name = name;
    this.category = category;
    this.hasDiscount = hasDiscount;
    this.price = price;
}

let products = [
    new Product("Strawberries", "Food", true, 15),
    new Product("Chocholate", "Food", false, 10),
    new Product("Laptop", "Electronics", true, 600),
    new Product("Cheese", "Food", true, 10),
    new Product("TV", "Electronics", false, 500),
    new Product("Orange", "Food", false, 12),
    new Product("Phone", "Electronics", false, 600),
    new Product("Milk", "Food", true, 8),
    new Product("Headphones", "Electronics", true, 50),
    new Product("Yogurt", "Food", true, 6),
    new Product("Jacket", "Clothing", false, 100),
    new Product("Jeans", "Clothing", true, 70),
    new Product("Eggs", "Food", false, 4),
    new Product("Hat", "Clothing", true, 50),
    new Product("Shoes", "Clothing", false, 80)
];

let expensiveProducts = products
    .filter(p => p.price > 20)
    .map(p => `${p.name} - $${p.price}`); 
console.log("======= Products with price > 20 =======");
console.log(expensiveProducts);

let discountedFoodNames = products
    .filter(p => p.category === "Food" && p.hasDiscount)
    .map(p => p.name);
console.log("======= Discounted Food Products =======");
console.log(discountedFoodNames);

let discountedPrices = products
    .filter(p => p.hasDiscount)
    .map(p => p.price);
console.log("======= Prices of Discounted Products =======");
console.log(discountedPrices);

let vowelProducts = products
    .filter(p => {
        let firstLetter = p.name[0]; 
        let vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]; 
        return vowels.includes(firstLetter) && !p.hasDiscount;
    })
    .map(p => `${p.name} - $${p.price}`);
console.log("======= Products with Name Starting with a Vowel (No Discount) =======");
console.log(vowelProducts);