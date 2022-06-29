const express = require('express');
const router = express.Router();
const db = require("../model/helper");

const sendAllItems = (req, res) => {
    db(`SELECT * FROM cart_items ORDER BY id ASC;`)
        .then(results => {
            res.send(results.data);
        })
        .catch(err => res.status(500).send(err));
};

// get all items from product table
router.get("/", async (req, res) => {
    sendAllItems(req, res);
});

// get one product by id
router.get("/item/:id", async (req, res) => {
    let itemId = req.params.id;
    let sql = `SELECT * FROM cart_items WHERE id = ${itemId}`;
    try {
        let results = await db(sql);
        res.send(results.data[0]);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

//add item to cartitems table
router.post("/item", (req, res) => {
    db(`INSERT INTO cart_items (cart_id, book_id, quantity) VALUES ("${req.body.cart_id}", "${req.body.book_id}", ${req.body.quantity});`)
        .then(() => {
            res.send({ message: "Item added" });
        })
        .catch(err => res.status(500).send(err));
});

// // edit product
// router.patch("/item/:id", async (req, res) => {
// }
// );

// delete item from cartitems table    
router.delete('/item/:id', (req, res) => {
    let itemId = req.params.id;
    db(`DELETE FROM cart_items WHERE id = ${itemId};`)
        .then(() => {
            res.send({ message: "Item deleted" });
        })
        .catch(err => res.status(500).send(err));
});

module.exports = router;