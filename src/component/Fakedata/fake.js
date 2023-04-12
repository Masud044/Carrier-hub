const addTodb = id=>{
       
    let shopingCart = getShopingCart();
    const quantity = shopingCart[id];
    if(!quantity){
        shopingCart[id]=1;
    }
    localStorage.setItem('shoping-cart',JSON.stringify(shopingCart));
}
const getShopingCart =()=>{
      let shopingCart={};
      const storedCart = localStorage.getItem('shoping-cart');
      if(storedCart){
         shopingCart=JSON.parse(storedCart);
      }
      return shopingCart;
}

export{
    addTodb,
    getShopingCart
}