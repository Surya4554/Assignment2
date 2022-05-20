const productData = [
    
    {
        id: 1,
        image: "images/men1.jpg",
        name: "Renson Casual Shirt",
        category: "Men's",
        price: "Rs. 320",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nemo facere maiores dignissimos! Expedita eligendi qui aspernatur esse voluptate quaerat, inventore debitis at distinctio fugiat atque ducimus non beatae deleniti sint quibusdam."
    },
    
    
    
    {
        id: 6,
        image: "images/women1.jpg",
        name: "Renson Casual T-Shirt",
        category: "Women's",
        price: "Rs. 320",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nemo facere maiores dignissimos! Expedita eligendi qui aspernatur esse voluptate quaerat, inventore debitis at distinctio fugiat atque ducimus non beatae deleniti sint quibusdam."
    },
    {
        id: 12,
        image: "images/kid2.jpeg",
        name: "Renson Casual T-Shirt",
        category: "Kid's",
        price: "Rs. 320",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nemo facere maiores dignissimos! Expedita eligendi qui aspernatur esse voluptate quaerat, inventore debitis at distinctio fugiat atque ducimus non beatae deleniti sint quibusdam."
    },
    {
        id: 17,
        image: "images/mobile2.jpg",
        name: "Realme Mobile",
        category: "Mobile",
        price: "Rs. 320",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nemo facere maiores dignissimos! Expedita eligendi qui aspernatur esse voluptate quaerat, inventore debitis at distinctio fugiat atque ducimus non beatae deleniti sint quibusdam."
    },
    
    {
        id: 15,
        image: "images/kid5.jfif",
        name: "Renson Casual T-Shirt",
        category: "Kid's",
        price: "Rs. 320",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nemo facere maiores dignissimos! Expedita eligendi qui aspernatur esse voluptate quaerat, inventore debitis at distinctio fugiat atque ducimus non beatae deleniti sint quibusdam."
    },
    {
        id: 4,
        image: "images/men4.jpg",
        name: "Renson Casual Shirt",
        category: "Men's",
        price: "Rs. 320",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nemo facere maiores dignissimos! Expedita eligendi qui aspernatur esse voluptate quaerat, inventore debitis at distinctio fugiat atque ducimus non beatae deleniti sint quibusdam."
    },
    {
        id: 7,
        image: "images/women2.jpg",
        name: "Renson Casual T-Shirt",
        category: "Women's",
        price: "Rs. 320",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nemo facere maiores dignissimos! Expedita eligendi qui aspernatur esse voluptate quaerat, inventore debitis at distinctio fugiat atque ducimus non beatae deleniti sint quibusdam."
    },
    {
        id: 5,
        image: "images/men5.jpg",
        name: "Renson Casual Shirt",
        category: "Men's",
        price: "Rs. 320",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nemo facere maiores dignissimos! Expedita eligendi qui aspernatur esse voluptate quaerat, inventore debitis at distinctio fugiat atque ducimus non beatae deleniti sint quibusdam."
    },
    {
        id: 8,
        image: "images/women3.jpg",
        name: "Renson Casual T-Shirt",
        category: "Women's",
        price: "Rs. 320",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nemo facere maiores dignissimos! Expedita eligendi qui aspernatur esse voluptate quaerat, inventore debitis at distinctio fugiat atque ducimus non beatae deleniti sint quibusdam."
    },
    {
        id: 20,
        image: "images/mobile5.jpg",
        name: "Realme Mobile",
        category: "Mobile",
        price: "Rs. 320",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nemo facere maiores dignissimos! Expedita eligendi qui aspernatur esse voluptate quaerat, inventore debitis at distinctio fugiat atque ducimus non beatae deleniti sint quibusdam."
    },
    {
        id: 9,
        image: "images/women4.jfif",
        name: "Renson Casual T-Shirt",
        category: "Women's",
        price: "Rs. 320",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nemo facere maiores dignissimos! Expedita eligendi qui aspernatur esse voluptate quaerat, inventore debitis at distinctio fugiat atque ducimus non beatae deleniti sint quibusdam."
    },
    {
        id: 3,
        image: "images/men3.jpg",
        name: "Renson Casual Shirt",
        category: "Men's",
        price: "Rs. 320",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nemo facere maiores dignissimos! Expedita eligendi qui aspernatur esse voluptate quaerat, inventore debitis at distinctio fugiat atque ducimus non beatae deleniti sint quibusdam."
    },
    {
        id: 19,
        image: "images/mobile4.jpg",
        name: "Realme Mobile",
        category: "Mobile",
        price: "Rs. 320",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nemo facere maiores dignissimos! Expedita eligendi qui aspernatur esse voluptate quaerat, inventore debitis at distinctio fugiat atque ducimus non beatae deleniti sint quibusdam."
    },
    {
        id: 10,
        image: "images/women5.jpg",
        name: "Renson Casual T-Shirt",
        category: "Women's",
        price: "Rs. 320",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nemo facere maiores dignissimos! Expedita eligendi qui aspernatur esse voluptate quaerat, inventore debitis at distinctio fugiat atque ducimus non beatae deleniti sint quibusdam."
    },
    {
        id: 2,
        image: "images/men2.webp",
        name: "Renson Casual Shirt",
        category: "Men's",
        price: "Rs. 320",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nemo facere maiores dignissimos! Expedita eligendi qui aspernatur esse voluptate quaerat, inventore debitis at distinctio fugiat atque ducimus non beatae deleniti sint quibusdam."
    },
    {
        id: 11,
        image: "images/kid1.jpg",
        name: "Renson Casual T-Shirt",
        category: "Kid's",
        price: "Rs. 320",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nemo facere maiores dignissimos! Expedita eligendi qui aspernatur esse voluptate quaerat, inventore debitis at distinctio fugiat atque ducimus non beatae deleniti sint quibusdam."
    },
    
    {
        id: 13,
        image: "images/kid3.jpg",
        name: "Renson Casual T-Shirt",
        category: "Kid's",
        price: "Rs. 320",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nemo facere maiores dignissimos! Expedita eligendi qui aspernatur esse voluptate quaerat, inventore debitis at distinctio fugiat atque ducimus non beatae deleniti sint quibusdam."
    },
    
    
    {
        id: 16,
        image: "images/mobile1.jpg",
        name: "Realme Mobile",
        category: "Mobile",
        price: "Rs. 320",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nemo facere maiores dignissimos! Expedita eligendi qui aspernatur esse voluptate quaerat, inventore debitis at distinctio fugiat atque ducimus non beatae deleniti sint quibusdam."
    },
    
    {
        id: 18,
        image: "images/mobile3.jfif",
        name: "Realme Mobile",
        category: "Mobile",
        price: "Rs. 320",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nemo facere maiores dignissimos! Expedita eligendi qui aspernatur esse voluptate quaerat, inventore debitis at distinctio fugiat atque ducimus non beatae deleniti sint quibusdam."
    },
    {
        id: 14,
        image: "images/kid4.jpg",
        name: "Renson Casual T-Shirt",
        category: "Kid's",
        price: "Rs. 320",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nemo facere maiores dignissimos! Expedita eligendi qui aspernatur esse voluptate quaerat, inventore debitis at distinctio fugiat atque ducimus non beatae deleniti sint quibusdam."
    },
    
    
];

export default productData;