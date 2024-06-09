import { addDoc, collection } from "firebase/firestore";
import db from "../db/db.js";
const products = [
    // Remeras
   {
     id: "remera-01",
     title: "Remera Madness - Negra",
     image: "/image/remera.webp",
     category: "Remeras",
     price: 1000
   },
  
  //  Pantalones
   {
    id: "pantalon-01",
    title: "Pantalon Mora - Amarillo",
    image: "/image/pantalon.jpg",
    category:"Pantalones",
    price: 2000
  },
  // Buzos
  {
    id: "buzo-01",
    title: "Buzo Falling Star - Negro",
    image: "/image/buzo.webp",
    category: "Buzos",
    price: 3000
  },
  
  // Zapatillas
  {
    id: "zapatilla-01",
    title: "Zapatilla Union LA - Azul",
    image: "/image/zapatilla.jpg",
    category: "Zapatillas",
    price: 4000
  
  }
  
  ];

  const seedProducts = () => {
  products.map(({ id, ...rest }) =>{
    addDoc (collection (db, "products"), rest)
  
  });
 
  }

  seedProducts()