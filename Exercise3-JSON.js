// נניח ש-shopDataJSON התקבל ממקור חיצוני
// const parsedShopData = require('./shopDataJSON.json');
const shopDataJSON = `{"products":[{"id":"P001","name":"כיסא משרדי","price":499.99,"category":"ריהוט","inStock":true},{"id":"P002","name":"שולחן עבודה","price":799,"category":"ריהוט","inStock":false}],"categories":[{"id":"C001","name":"ריהוט","description":"כל הרהיטים"},{"id":"C002","name":"תאורה","description":"פתרונות תאורה"}],"customers":[{"id":"CU001","name":"יוסי כהן","email":"yossi@example.com"}],"lastUpdated":"2025-06-04T07:26:35.000Z"}`;

const parsedShopData = JSON.parse(shopDataJSON);

// גישה למערך המוצרים
console.log("מספר המוצרים:", parsedShopData.products.length); // 2

// מציאת מוצר ספציפי לפי ID
const productById = parsedShopData.products.find(product => product.id === "P001");
console.log("פרטי המוצר P001:", productById);

// סינון מוצרים שאינם במלאי
const outOfStockProducts = parsedShopData.products.filter(product => !product.inStock);
console.log("מוצרים שאזלו מהמלאי:", outOfStockProducts);

// גישה לרשימת הקטגוריות
console.log("שמות הקטגוריות:", parsedShopData.categories.map(cat => cat.name));
