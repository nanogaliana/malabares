export const PRODUCTS = [
    {
      id: 1,
      name: "Pelota N64",
      description: "Pelota de malabares pequeña",
      material: "Vinilo",
      size: "64mm",
      weight: "110gr",
      price: 700,
      img: "/images/pelota-vinilo-64mm.jpg",
    },
    {
      id: 2,
      name: "Pelota N70",
      description: "Pelota de malabares mediana",
      material: "Vinilo",
      size: "70mm",
      weight: "130gr",
      price: 900,
      img: "/images/pelota-vinilo-70mm.jpg",
    },
    {
      id: 3,
      name: "Pelota N76",
      description: "Pelota de malabares grande",
      material: "Vinilo",
      size: "76mm",
      weight: "150gr",
      price: 1000,
      img: "/images/pelota-vinilo-76mm.jpg",
    },
    {
      id: 4,
      name: "Pelota de cuero",
      description: "Pelota de malabares pequeña",
      material: "Cuero",
      size: "64mm",
      weight: "110gr",
      price: 700,
      img: "/images/pelora-cuero.jpg",
    },
    {
      id: 5,
      name: "Pelota de Contact",
      description: "Pelota entrenamiento de Contact",
      material: "PVC Flexible",
      size: "100mm",
      weight: "200gr",
      price: 3150,
      img: "/images/pelota-contact-100mm.jpg",
    },
    {
      id: 6,
      name: "Esfera de Acrílico",
      description: "Esfera para Contact",
      material: "Acrilico",
      size: "80mm",
      weight: "360gr",
      price: 4500,
      img: "/images/esfera-contact-cristal.jpg",
    },
  ];
  
  export function getProductos(categoryId) {
    console.log('categoria:' + categoryId);

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(PRODUCTS), 3000);
    });
  }
  
  export function getProducto(productId) {
    return new Promise((resolve, reject) => {
      //PRODUCTS.forEach(function(item) { console.log(item) });
      //if (typeof productId == 'string') console.log(typeof productId);
      let item = PRODUCTS.find(o => o.id === Number(productId));
      setTimeout(() => resolve(item), 1500);
    });
  }