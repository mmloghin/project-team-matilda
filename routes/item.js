const express = require('express');
const router = express.Router();
const db = require("../model/helper");

const sendItem = (req, res) => {
    db("SELECT * FROM cart_item;")
        .then(results => {
            res.send(results.data);
        })
        .catch(err => res.status(500).send(err));
};

// get items from cart_items table
router.get("/item", async (req, res) => {
    sendItem(req, res);
});

//add cart item
router.post("/item", (req, res) => {
    db(`INSERT INTO cart_item (cart_id, book_id, quantity) VALUES ("${req.body.cart_id}", "${req.body.book_id}", "${req.body.quantity})";`)
        .then(() => {
            sendItem(req, res);
        })
        .catch(err => res.status(500).send(err));
});

// router.get("/item", async (req, res, next) => {
// 	try {
// 		const results = await db(`SELECT * FROM cart_item`);      
// 		if (results.data.length) {›
// 			res.status(200).send(results.data);
// 		} else {›
// 			res.status(404).send({ error: "Not found" });
// 		}
// 	} catch (err) {
// 		res.status(500).send({ error: err });
// 	}
// });

module.exports = router;