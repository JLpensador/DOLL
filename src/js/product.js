const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isTaken: {
        type: Boolean,
        default: false
    },
    image: String
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;

    function searchProducts() {
        var input = document.getElementById('form-control me-2').value.toLowerCase();
        var productList = document.getElementById('navbar-nav');
        var products = productList.getElementsByTagName('li');
        
        for (var i = 0; i < product.length; i++) {
            var productName = products[i].innerText.toLowerCase();
            if (productName.indexOf(input) > -1) {
                products[i].style.display = '';
            } else {
                products[i].style.display = 'none';
            }
        }
    }

    document.getElementById('form-control me-2').addEventListener('input', Pesquisar);
    document.getElementById('btn btn-outline-success').addEventListener('click', Pesquisar);
