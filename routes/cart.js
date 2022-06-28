const express = require('express');
const router = express.Router();
const db = require("../model/helper");

const sendAllCartItems = (req, res) => {
    db("SELECT * FROM cart ORDER BY cart_id ASC;")
        .then(results => {
            res.send(results.data);
        })
        .catch(err => res.status(500).send(err));
};

// get items from cart table
router.get("/cart", async (req, res) => {
    sendAllCartItems(req, res);
});

//add to cart
router.post("/cart", (req, res) => {
    db(`INSERT INTO cart (cart_id, order_total) VALUES ("${req.body.cart_id}", ${req.order_total});`)
        .then(() => {
            sendAllCartItems(req, res);
        })
        .catch(err => res.status(500).send(err));
});

// delete from cart table    
router.delete('/cart/:id', (req, res) => {
    let cartId = req.params.id;
    db(`DELETE FROM cart WHERE cart_id = ${cartId};`)
        .then(() => {
            sendAllCartItems(req, res);
        })
        .catch(err => res.status(500).send(err));
});

module.exports = router;