var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var product = [
    new product({
        imagePath: 'http://img.wennermedia.com/920-width/rs-221101-AP_404246784589.jpg',
        title: 'Blue Dream',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate vitae dignissimos nam, numquam excepturi suscipit neque eos velit alias accusantium labore quasi possimus cumque illo!',
        price: 48
    }),
    new product({
        imagePath: 'http://img.wennermedia.com/920-width/rs-221101-AP_404246784589.jpg',
        title: 'Northern Lights',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate vitae dignissimos nam, numquam excepturi suscipit neque eos velit alias accusantium labore quasi possimus cumque illo!',
        price: 48
    }),
    new product({
        imagePath: 'http://img.wennermedia.com/920-width/rs-221101-AP_404246784589.jpg',
        title: 'Pineapple Express',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate vitae dignissimos nam, numquam excepturi suscipit neque eos velit alias accusantium labore quasi possimus cumque illo!',
        price: 48
    }),
    new product({
        imagePath: 'http://img.wennermedia.com/920-width/rs-221101-AP_404246784589.jpg',
        title: 'Green Crack',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate vitae dignissimos nam, numquam excepturi suscipit neque eos velit alias accusantium labore quasi possimus cumque illo!',
        price: 40
    }),
    new product({
        imagePath: 'http://img.wennermedia.com/920-width/rs-221101-AP_404246784589.jpg',
        title: 'White Widow',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate vitae dignissimos nam, numquam excepturi suscipit neque eos velit alias accusantium labore quasi possimus cumque illo!',
        price: 25
    }),
    new product({
        imagePath: 'http://img.wennermedia.com/920-width/rs-221101-AP_404246784589.jpg',
        title: 'Sour Diesel',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate vitae dignissimos nam, numquam excepturi suscipit neque eos velit alias accusantium labore quasi possimus cumque illo!',
        price: 35
    }),
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}