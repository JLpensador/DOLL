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

// pesquisa
function searchProducts() {
        var input = document.getElementById('main').value.toLowerCase();
        var productList = document.getElementById('form-control me-2');
        var products = productList.getElementsByTagName('li');
        
        for (var i = 0; i < products.length; i++) {
            var productName = products[i].innerText.toLowerCase();
            if (productName.indexOf(input) > -1) {
                products[i].style.display = '';
            } else {
                products[i].style.display = 'none';
            }
        }
    }
    document.getElementById('search-box').addEventListener('input', searchProducts);
