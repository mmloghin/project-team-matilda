const express = require('express');
const router = express.Router();
const db = require("../model/helper");

const sendAllCartItems = (req, res) => {
    db(`SELECT * FROM cart ORDER BY id ASC;`)
        .then(results => {
            res.send(results.data);
        })
        .catch(err => res.status(500).send(err));
};

// get all all from cart table
router.get("/", async (req, res) => {
    sendAllCartItems(req, res);
});

// get one order by id
router.get("/:id", async (req, res) => {
    let orderId = req.params.id;
    let sql = `SELECT * FROM cart WHERE id = ${orderId}`;
    try {
        let results = await db(sql);
        res.send(results.data[0]);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

// get cart by user id
router.get("/users/:id", async (req, res) => {
    let userId = req.params.id;
    let sql = `SELECT cart.*, cart_items.* FROM cart JOIN cart_items WHERE cart.id = cart_items.cart_id AND user_id = ${userId}`;
    try {
        let results = await db(sql);
        res.send(results.data[0]);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

//add to cart 
router.post("/", (req, res) => {
    db(`INSERT INTO cart (user_id) VALUES (${req.body.user_id});`)
        .then(() => {
            res.status(200).send({message: "Cart created"})
        })
        .catch(err => res.status(500).send(err));
});

// delete from cart table    
router.delete('/cart/:id', (req, res) => {
    let cartId = req.params.id;
    db(`DELETE FROM cart WHERE id = ${cartId};`)
        .then(() => {
            res.send({ message: "Cart deleted" });
        })
        .catch(err => res.status(500).send(err));
});

module.exports = router;