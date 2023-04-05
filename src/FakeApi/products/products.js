const products = [
    {
        id: 1,
        title: "GRILLED HALLOUMI CROISSANT",
        description: "كروسون، زعتر، جبنة حلوم و زيت زيتون",
        price: 3000,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "OneMore",
        category: "الفطور",
        quantity: 0,
        thumbnail: "https://slsmenu.com/admin/public/storage/product/images/9XBYSLKqC6WZLnWleXYPDO3zVI24KuSFTCgrms6W.jpg",

    },
    {
        id: 2,
        title: "PISTACHIO CROISSANT",
        description: "",
        price: 15000,
        discountPercentage: 17.94,
        rating: 4.44,
        stock: 34,
        brand: "OneMore",
        category: "معجنات",
        quantity: 0,
        thumbnail: "https://slsmenu.com/admin/public/storage/product/images/bJ3vqK9H3I3caBmxmgX2pXqgHIOUSQPIZ8j05yuU.jpg",

    },
    {
        id: 3,
        title: "BURGER SALAD",
        description: "",
        price: 25000,
        discountPercentage: 15.46,
        rating: 4.09,
        stock: 36,
        brand: "OneMore",
        category: "سلطة",
        quantity: 0,
        thumbnail: "https://slsmenu.com/admin/public/storage/product/images/6QXIjz68CW2vAXzBTj8j2YYK4Nn7fh1hjLpV9DTs.jpg",

    },
    {
        id: 4,
        title: "HASH BROWN",
        description: "",
        price: 12000,
        discountPercentage: 17.91,
        rating: 4.3,
        stock: 123,
        brand: "oneMore",
        category: "ابيتيزر",
        quantity: 0,
        thumbnail: "https://slsmenu.com/admin/public/storage/product/images/RUEufamylBM7WV2J1FI0X9LyBgce36A176zDs3fs.jpg",

    },
    {
        id: 5,
        title: "TIRAMISU LATTE",
        description: "",
        price: 25000,
        discountPercentage: 10.58,
        rating: 4.09,
        stock: 32,
        brand: "Huawei",
        category: "القهوة الساخنة",
        quantity: 0,
        thumbnail: "https://slsmenu.com/admin/public/storage/product/images/1BK4Qx1ttkFO44lB0TEuZJoB0VFtjRXCxvtZevVZ.jpg",

    },
    {
        id: 6,
        title: "ICE SPANISH LATTE",
        description: "",
        price: 16000,
        discountPercentage: 11.02,
        rating: 4.57,
        stock: 83,
        brand: "OneMore",
        category: "قهوة باردة",
        quantity: 0,
        thumbnail: "https://slsmenu.com/admin/public/storage/product/images/ocn0DfnKj5p5lkUIeVJGfJzqZB4SekAnXtRLede8.jpg",
    },
    {
        id: 7,
        title: "CLUB OMELET SANDWICH",
        description: "",
        price: 9000,
        discountPercentage: 11.02,
        rating: 4.57,
        stock: 83,
        brand: "OneMore",
        category: "الاطباق الرئيسيه",
        quantity: 0,
        thumbnail: "https://slsmenu.com/admin/public/storage/product/images/MOiJiuDDo9smNHSAhfZ9cgEfqt7dXbIxm8LfcDRL.jpg",
    },
    {
        id: 8,
        title: "CREPE",
        description: "",
        price: 8000,
        discountPercentage: 11.02,
        rating: 4.57,
        stock: 83,
        brand: "OneMore",
        category: "الحلو",
        quantity: 0,
        thumbnail: "https://slsmenu.com/admin/public/storage/product/images/bDeCyG4Zv5bFYMLN35voLQC6rXvO5jKfzLklChSz.jpg",
    },
    {
        id: 9,
        title: "LEMON ICE TEA",
        description: "",
        price: 2000,
        discountPercentage: 11.02,
        rating: 4.57,
        stock: 83,
        brand: "OneMore",
        category: " الشاي",
        quantity: 0,
        thumbnail: "https://slsmenu.com/admin/public/storage/product/images/RRvwpdemFLkfHUalfrFQYFivtiLSYQb6OyHzgbrf.jpg",
    }
]

export const getProducts = () => {
    return products;
}

const categorizedData = products.reduce((acc, curr, index) => {
    const { id, category, title, price, quantity, thumbnail } = curr;

    if (!acc[category]) {
        acc[category] = {
        };
    }
    acc[category];

    return acc;
}, {});

export const categories = Object.keys(categorizedData);
