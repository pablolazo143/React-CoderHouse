import { addDoc, collection } from 'firebase/firestore';
import { db } from './services/firebase';


const products = [
    {
        name: "Chivas 12 años",
        alt: "chivas-12",
        image: 'https://i.ibb.co/HH3PFFQ/chivas-12.jpg',
        precio: 500,
        category: 'blend',
        stock: 10,
        id: 1
    },
    {
        name: "Chivas 18 años",
        alt: "chivas-18",
        image: 'https://i.ibb.co/pPRyHrh/chivas-18.jpg',
        precio: 500,
        category: 'blend',
        stock: 10,
        id: 2
    },
    {
        name: "Chivas Regal Extra 13 años",
        alt: "chivas-extra",
        image: 'https://i.ibb.co/x5VRFGp/chivas-extra.jpg',
        precio: 500,
        category: 'blend',
        stock: 5,
        id: 3
    },
    {
        name: "Chivas Mizurana",
        alt: "chivas-mizurana",
        image: 'https://i.ibb.co/fQvkhkf/chivas-mizurana.jpg',
        precio: 500,
        category: 'blend',
        stock: 4,
        id: 4
    },
    {
        name: "Johnnie Blue Label",
        alt: "johnnie-blue",
        image: 'https://i.ibb.co/0MzJhfG/johnnie-blue.jpg',
        precio: 500,
        category: 'blend',
        stock: 9,
        id: 5
    },
    {
        name: "Johnnie Gold Label",
        alt: "johnnie-gold",
        image: 'https://i.ibb.co/fXMZm8N/johnnie-gold.jpg',
        precio: 500,
        category: 'blend',
        stock: 7,
        id: 6
    },
    {
        name: "Johnnie Green Label",
        alt: "johnnie-green",
        image: 'https://i.ibb.co/n1Jx2XC/johnnie-green.jpg',
        precio: 500,
        category: 'blend',
        stock: 10,
        id: 7
    },
    {
        name: "Johnnie Red Label",
        alt: "johnnie-red",
        image: 'https://i.ibb.co/k3gF42m/johnnie-red.jpg',
        precio: 500,
        category: 'blend',
        stock: 0,
        id: 8
    },
    {
        name: "Jack Daniels",
        alt: "jack-daniels",
        image: 'https://i.ibb.co/frf6hVc/jack-daniels.jpg',
        precio: 500,
        category: 'bourbon',
        stock: 3,
        id: 9
    },
    {
        name: "Jack Daniels Honey",
        alt: "jack-daniels-honey",
        image: 'https://i.ibb.co/Bwnq0yp/jack-daniels-honey.jpg',
        precio: 500,
        category: 'bourbon',
        stock: 12,
        id: 10
    },
    {
        name: "Jim Beam Black",
        alt: "jim-beam",
        image: 'https://i.ibb.co/c3NvHtf/jim-beam-black.jpg',
        precio: 500,
        category: 'bourbon',
        stock: 1,
        id: 11
    },
    {
        name: "Jim Beam Honey",
        alt: "jim-beam-honey",
        image: 'https://i.ibb.co/TvhSjkN/jim-beam-honey.jpg',
        precio: 500,
        category: 'bourbon',
        stock: 0,
        id: 12
    },
    {
        name: "Jim Beam White Label",
        alt: "jim-beam-white",
        image: 'https://i.ibb.co/YjLzZrV/jim-beam-white-label.jpg',
        precio: 500,
        category: 'bourbon',
        stock: 1,
        id: 13
    },
    {
        name: "Jameson Black Barrel",
        alt: "jameson-black-barrel",
        image: 'https://i.ibb.co/SVN01N9/jameson-black-barrel.jpg',
        precio: 500,
        category: 'irish',
        stock: 13,
        id: 14
    },
    {
        name: "Teeling Single Grain",
        alt: "teeling-single-grain",
        image: 'https://i.ibb.co/dfFYdDr/teeling-single-grain.jpg',
        precio: 500,
        category: 'irish',
        stock: 9,
        id: 15
    },
    {
        name: "Teeling Single Malt",
        alt: "teeling-single-malt",
        image: 'https://i.ibb.co/sw7HQ3z/teeling-single-malt.jpg',
        precio: 500,
        category: 'irish',
        stock: 12,
        id: 16
    },
    {
        name: "Tullamore Dew",
        alt: "teeling-single-grain",
        image: 'https://i.ibb.co/XzMFjWs/tullamore-dew.jpg',
        precio: 500,
        category: 'irish',
        stock: 11,
        id: 17
    },
    {
        name: "Yamazaki 12 años",
        alt: "yamazaki-12",
        image: 'https://i.ibb.co/f2xKVDc/yamazaki-12.jpg',
        precio: 500,
        category: 'japones',
        stock: 2,
        id: 18
    },
    {
        name: "Yamazaki 18 años",
        alt: "yamazaki-18",
        image: 'https://i.ibb.co/C7K5bYk/yamazaki-18.jpg',
        precio: 500,
        category: 'japones',
        stock: 1,
        id: 19
    },
    {
        name: "Yamazaki 25 años",
        alt: "yamazaki-25",
        image: 'https://i.ibb.co/T4M9nV7/yamazaki-25.jpg',
        precio: 500,
        category: 'japones',
        stock: 0,
        id: 20
    },
    {
        name: "Aberlour 12 años",
        alt: "aberlour-12",
        image: 'https://i.ibb.co/hXZpJsz/aberlour-12.jpg',
        precio: 500,
        category: 'singlemalt',
        stock: 2,
        id: 21
    },
    {
        name: "Cardhu 12 años",
        alt: "cardhu-12",
        image: 'https://i.ibb.co/YbZwSDc/cardhu-12.jpg',
        precio: 500,
        category: 'singlemalt',
        stock: 5,
        id: 22
    },
    {
        name: "Glendfiddich 12 años",
        alt: "glendfiddich-12",
        image: 'https://i.ibb.co/yq8djWR/glenfiddich-12.jpg',
        precio: 500,
        category: 'singlemalt',
        stock: 1,
        id: 23
    },
    {
        name: "Glendfiddich 15 años",
        alt: "glendfiddich-15",
        image: 'https://i.ibb.co/GTQq1F2/glenfiddich-15.jpg',
        precio: 500,
        category: 'singlemalt',
        stock: 7,
        id: 24
    },
    {
        name: "The Glenlivet 12 años",
        alt: "glenlivet-12",
        image: 'https://i.ibb.co/kXMBs8g/glenlivet-12.jpg',
        precio: 500,
        category: 'singlemalt',
        stock: 9,
        id: 25
    },
    {
        name: "The Glenlivet 15 años",
        alt: "glenlivet-15",
        image: 'https://i.ibb.co/0DK4HnQ/glenlivet-15.jpg',
        precio: 500,
        category: 'singlemalt',
        stock: 8,
        id: 26
    },
    {
        name: "The Glenlivet 18 años",
        alt: "glenlivet-18",
        image: 'https://i.ibb.co/Wn1SK4V/glenlivet-18.jpg',
        precio: 500,
        category: 'singlemalt',
        stock: 7,
        id: 27
    },
    {
        name: "Highland Park 18 años",
        alt: "highland-park-18",
        image: 'https://i.ibb.co/CHyPvHJ/highland-park-18.jpg',
        precio: 500,
        category: 'singlemalt',
        stock: 7,
        id: 28
    },
    {
        name: "Macallan 12 años Triple Cask",
        alt: "macallan-12",
        image: 'https://i.ibb.co/z6kzff0/macallan-12.jpg',
        precio: 500,
        category: 'singlemalt',
        stock: 4,
        id: 29
    },
    {
        name: "The Singleton 12 años",
        alt: "the-singleton-12",
        image: 'https://i.ibb.co/7jT4JcN/singleton-12.jpg',
        precio: 500,
        category: 'singlemalt',
        stock: 3,
        id: 30
    }
];

export const getProducts = (categoryId)=>{
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve(categoryId? products.filter(product => product.category === categoryId) : products);
        }, 2000);
    });
};

export const getProduct = (id)=>{
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(products.find(product => product.id == id));
        },2000);
    });
}

export const cargarFirebase = ()=>{
    products.forEach(element => {
        const product = {
            name: element.name,
            alt: element.alt,
            image: element.image,
            precio: element.precio,
            category: element.category,
            stock: element.stock
        }
        const collectionReference = collection(db, 'products')
        addDoc(collectionReference, product)
    });
};