export const PRODUCTS = [
    {
      id: 1,
      name: "Pelota N64",
      description: "Pelota de vinilo 64mm",
      material: "Vinilo",
      size: "64mm",
      weight: 110,
      price: 700,
      img: "/images/pelota-vinilo-64mm.jpg",
    },
    {
      id: 2,
      name: "Pelota N70",
      description: "Pelota de vinilo 70mm",
      material: "Vinilo",
      size: "70mm",
      weight: 130,
      price: 900,
      img: "/images/pelota-vinilo-70mm.jpg",
    },
    {
      id: 3,
      name: "Pelota N76",
      description: "Pelota de vinilo 76mm",
      material: "Vinilo",
      size: "76mm",
      weight: 150,
      price: 1000,
      img: "/images/pelota-vinilo-76mm.jpg",
    },
    {
      id: 4,
      name: "Pelota de cuero",
      description: "Pelota de cuero 64mm",
      material: "Cuero",
      size: "64mm",
      weight: 110,
      price: 700,
      img: "/images/pelora-cuero.jpg",
    },
    {
      id: 5,
      name: "Pelota de Contact",
      description: "Pelota de Contact 100mm",
      material: "PVC Flexible",
      size: "100mm",
      weight: 200,
      price: 3150,
      img: "/images/pelota-contact-100mm.jpg",
    },
    {
      id: 6,
      name: "Esfera de Acrilico",
      description: "Esfera de Contact 80mm",
      material: "Acrilico",
      size: "80mm",
      weight: 360,
      price: 4500,
      img: "/images/esfera-contact-cristal.jpg",
    },
  ];
  
  export function getProductos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(PRODUCTS), 3000);
    });
  }
  