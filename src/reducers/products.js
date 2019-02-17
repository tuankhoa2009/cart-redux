var initialState = [
    {
        id:1,
        name:'Iphone 7S',
        image:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/rosegold/iphone7-rosegold-select-2016?wid=470&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1472430205982',
        description:'Sản phẩm do Apple sản xuất',
        price:500,
        inventory:10,
        rating:4
    },
    {
        id:2,
        name:'Samsung Galaxy S10',
        image:'https://www.soyacincau.com/wp-content/uploads/2019/02/190202-samsung-galaxy-s10e-01.jpg',
        description:'Sản phẩm do Hàn Quốc sản xuất',
        price:300,
        inventory:5,
        rating:5

    },
    {
        id:3,
        name:'Huawei e3',
        image:'https://didongviet.vn/pub/media/catalog/product//h/u/huawei-nova-3e-didongviet.jpg',
        description:'Sản phẩm do China sản xuất',
        price:100,
        inventory:3,
        rating:3

    }
]


const products  = (state = initialState , action )=>
{
    switch(action.type)
    {
        default:return state;
    }
}

export default products;