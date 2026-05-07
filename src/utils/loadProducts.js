// src/utils/loadProducts.js

const allModules = {
  fruits: import.meta.glob("../assets/fruits/*.{jpg,png,jpeg}", { eager: true }),
  vegetables: import.meta.glob("../assets/vegetables/*.{jpg,png,jpeg}", { eager: true }),
  dairy: import.meta.glob("../assets/dairy/*.{jpg,png,jpeg}", { eager: true }),
};

export function loadProducts(category, basePrice = 50) {
  const modules = allModules[category];

  if (!modules) {
    console.error("Invalid category:", category);
    return [];
  }

  return Object.entries(modules).map(([path, module], index) => {
    const fileName = path.split("/").pop().split(".")[0];

    return {
      id: index + 1,
      name: fileName.charAt(0).toUpperCase() + fileName.slice(1),
      image: module.default,
      price: basePrice + index * 10,
      category,
    };
  });
}