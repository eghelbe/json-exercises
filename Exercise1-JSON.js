const students = [
  {
    id: 1,
    name: "אנה כהן",
    age: 22,
    major: "מדעי המחשב"
  },
  {
    id: 2,
    name: "דוד לוי",
    age: 24,
    major: "מתמטיקה"
  }
];

const studentsJSON = JSON.stringify(students, null, 2);
console.log(studentsJSON);

const products = [
  { id: "P001", name: "כיסא משרדי", price: 499.99, category: "ריהוט", inStock: true },
  { id: "P002", name: "שולחן עבודה", price: 799.00, category: "ריהוט", inStock: false }
];

const categories = [
  { id: "C001", name: "ריהוט", description: "כל הרהיטים" },
  { id: "C002", name: "תאורה", description: "פתרונות תאורה" }
];

const customers = [
  { id: "CU001", name: "יוסי כהן", email: "yossi@example.com" }
];

const shopData = {
  products: products,
  categories: categories,
  customers: customers,
  lastUpdated: new Date().toISOString()
};

const shopDataJSON = JSON.stringify(shopData, null, 2);
console.log(shopDataJSON);
