// נניח ש-shopDataJSON התקבל ממקור חיצוני
// let shopDataJSON = `{"products":[{"id":"P001","name":"כיסא משרדי","price":499.99,"category":"ריהוט","inStock":true},{"id":"P002","name":"שולחן עבודה","price":799,"category":"ריהוט","inStock":false}],"categories":[{"id":"C001","name":"ריהוט","description":"כל הרהיטים"},{"id":"C002","name":"תאורה","description":"פתרונות תאורה"}],"customers":[{"id":"CU001","name":"יוסי כהן","email":"yossi@example.com"}],"lastUpdated":"2025-06-04T07:26:35.000Z"}`;

const parsedShopData = require('./shopDataJSON_Exercise4.json');
// 1. המרת מחרוזת ה-JSON לאובייקט JavaScript
// const parsedShopData = JSON.parse(shopDataJSON);

// פונקציית עזר ליצירת אובייקט מוצר חדש עם בדיקת שדות
function createNewProduct(id, name, price, category, inStock = true) {
  if (!id || !name || !price || !category) {
    console.error("שגיאה: חסרים שדות חובה ליצירת מוצר חדש.");
    return null;
  }
  return {
    id: id,
    name: name,
    price: price,
    category: category,
    inStock: inStock
  };
}

// יצירת אובייקט מוצר חדש באמצעות פונקציית העזר
const newProduct = createNewProduct(
  "P003",
  "מנורת שולחן חכמה",
  199.90,
  "תאורה",
  true
);

if (newProduct) {
  // 2. הוספת האובייקט החדש למערך המוצרים
  parsedShopData.products.push(newProduct);

  // עדכון תאריך העדכון
  parsedShopData.lastUpdated = new Date().toISOString();

  // 3. המרת האובייקט המעודכן בחזרה למחרוזת JSON
  shopDataJSON = JSON.stringify(parsedShopData, null, 2);

  console.log("JSON מעודכן עם מוצר חדש:");
  console.log(shopDataJSON);
  /* פלט לדוגמה:
  {
    "products": [
      {
        "id": "P001",
        "name": "כיסא משרדי",
        "price": 499.99,
        "category": "ריהוט",
        "inStock": true
      },
      {
        "id": "P002",
        "name": "שולחן עבודה",
        "price": 799,
        "category": "ריהוט",
        "inStock": false
      },
      {
        "id": "P003",
        "name": "מנורת שולחן חכמה",
        "price": 199.9,
        "category": "תאורה",
        "inStock": true
      }
    ],
    "categories": [
      {
        "id": "C001",
        "name": "ריהוט",
        "description": "כל הרהיטים"
      },
      {
        "id": "C002",
        "name": "תאורה",
        "description": "פתרונות תאורה"
      }
    ],
    "customers": [
      {
        "id": "CU001",
        "name": "יוסי כהן",
        "email": "yossi@example.com"
      }
    ],
    "lastUpdated": "2025-06-04T..."
  }
  */
}

// דוגמה לניסיון הוספה עם שדות חסרים
const invalidProduct = createNewProduct("P004", "מוצר חסר", null, "קטגוריה");
console.log(invalidProduct); // פלט: null ושגיאה בקונסול
