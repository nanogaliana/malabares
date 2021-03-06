import React from 'react'
import {getProducts} from '../database/firebase'

const populateProductsInFirestore = () => {
    const PRODUCTS = [
        {
            "id": 1,
            "name": "Pelota N64",
            "category": "pelotas",
            "description": "Pelota de malabares pequeña",
            "material": "Vinilo",
            "size": "64mm",
            "weight": "110gr",
            "price": 700,
            "img": "/images/pelota-vinilo-64mm.jpg",
            "stock": 80
        },
        {
            "id": 2,
            "name": "Pelota N70",
            "category": "pelotas",
            "description": "Pelota de malabares mediana",
            "material": "Vinilo",
            "size": "70mm",
            "weight": "130gr",
            "price": 900,
            "img": "/images/pelota-vinilo-70mm.jpg",
            "stock": 60
        },
        {
            "id": 3,
            "name": "Pelota N76",
            "category": "pelotas",
            "description": "Pelota de malabares grande",
            "material": "Vinilo",
            "size": "76mm",
            "weight": "150gr",
            "price": 1000,
            "img": "/images/pelota-vinilo-76mm.jpg",
            "stock": 50
        },
        {
            "id": 4,
            "name": "Pelota de cuero",
            "category": "pelotas",
            "description": "Pelota de malabares pequeña",
            "material": "Cuero",
            "size": "64mm",
            "weight": "110gr",
            "price": 700,
            "img": "/images/pelora-cuero.jpg",
            "stock": 142
        },
        {
            "id": 5,
            "name": "Pelota de Contact",
            "category": "esferas",
            "description": "Pelota entrenamiento de Contact",
            "material": "PVC Flexible",
            "size": "100mm",
            "weight": "200gr",
            "price": 3150,
            "img": "/images/pelota-contact-100mm.jpg",
            "stock": 10
        },
        {
            "id": 6,
            "name": "Esfera de Acrílico",
            "category": "esferas",
            "description": "Esfera para Contact",
            "material": "Acrilico",
            "size": "80mm",
            "weight": "360gr",
            "price": 4500,
            "img": "/images/esfera-contact-cristal.jpg",
            "stock": 5
        },
        {
            "id": 10,
            "name": "Clava Tango",
            "category": "clavas",
            "description": "Clava para Malabares",
            "material": "Plástico",
            "size": "52cm largo, 97mm diámetro",
            "weight": "225gr",
            "price": 2700,
            "img": "/images/clava-tango.jpg",
            "stock": 40
        },
        {
            "id": 11,
            "name": "Clava Lotus",
            "category": "clavas",
            "description": "Clava para Malabares",
            "material": "Plástico",
            "size": "52cm largo, 84mm diámetro",
            "weight": "210gr",
            "price": 2400,
            "img": "/images/clava-lotus.jpg",
            "stock": 30
        },
        {
            "id": 12,
            "name": "Clava Escher",
            "category": "clavas",
            "description": "Clava para Malabares, edición limitada",
            "material": "Nylon",
            "size": "52cm largo, 84mm diámetro",
            "weight": "210gr",
            "price": 3450,
            "img": "/images/clava-escher.jpg",
            "stock": 9
        },
        {
            "id": 13,
            "name": "Clava Clown",
            "category": "clavas",
            "description": "Clava para Malabares, edición limitada",
            "material": "Nylon",
            "size": "52cm largo, 84mm diámetro",
            "weight": "210gr",
            "price": 3000,
            "img": "/images/clava-clown.jpg",
            "stock": 17
        },
        {
            "id": 14,
            "name": "Clava Grinch",
            "category": "clavas",
            "description": "Clava para Malabares",
            "material": "Nylon",
            "size": "52cm largo, 84mm diámetro",
            "weight": "220gr",
            "price": 3000,
            "img": "/images/clava-grinch.jpg",
            "stock": 12
        }
    ];
    
    const productsCollection = getProducts();
    PRODUCTS.forEach((product) => {
        productsCollection.add(product)
            .then((rta) => console.log('producto id:' + rta.id + ' ' + product.name))
    })
}

const AdminPage = () => {
  return (
    <div>
        <h2>Mantenimiento</h2>
        <button onClick={() => populateProductsInFirestore()}>Crear productos</button>
    </div>
  )
}

export default AdminPage