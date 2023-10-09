const Product =require('../model/product')
exports.getaddproduct=(req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  }
 exports.postaddproduct= (req, res, next) => {
    // products.push({ title: req.body.title });
    const product=new Product(req.body.title);
    product.save();    //add in project also
    res.redirect('/');
  }
  exports.shopproduct=(req, res, next) => {
    Product.fetchall(products=>{
        res.render('shop', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
          });

    });
    // const products = adminData.products;
   
  }