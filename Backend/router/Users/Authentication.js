const mongoose = require('mongoose');
const Product = mongoose.model('registration');

const express = require("express");
const router = express.Router();

router.get(`/registration`, async(req, res) => {
    let products = await Product.find();
    return res.status(200).send(products);
});

router.post(`/registration`, async(req, res) => {
    let isEmailExists = await Product.findOne({ email: req.body.email });
    if (isEmailExists) {
        return res.status(200).send({
            error: true,
            message: 'email is exists',
        })
    }
    let product = await Product.create(req.body);
    return res.status(200).send({
        error: false,
        message: 'success',
        product
    })

})
router.post('/emailValidation', async(req,res)=>{
    console.log(req.body.email)
    let isEmailExists = await Product.findOne({ email: req.body.email });
    console.log(isEmailExists)
    return res.status(200).send({
        error: isEmailExists ? true : false,
        message: isEmailExists ? 'email is exists': '',
    })
})
router.put(`/api/product/:id`, async(req, res) => {
    const { id } = req.params;

    let product = await Product.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
        error: false,
        product
    })

});

router.delete(`/api/product/:id`, async(req, res) => {
    const { id } = req.params;

    let product = await Product.findByIdAndDelete(id);

    return res.status(202).send({
        error: false,
        product
    })

})


router.post('/login', async(req, res) => {
    console.log(req.body, 'node')
    let products = await Product.find(req.body);
    if (products.length) {
        return res.status(200).send({
            error: false,
            products
        })
    } else {
        return res.status(200).send({
            error: true,
            message: 'not exists',
            products
        })
    }


})

module.exports = router

// module.exports = (app) => {

//     app.get(`/api/product`, async(req, res) => {
//         let products = await Product.find();
//         return res.status(200).send(products);
//     });

//     app.post('/auth/login', async(req, res) => {
//         console.log(req.body, 'node')
//         let products = await Product.find(req.body);
//         if (products.length) {
//             return res.status(200).send({
//                 error: false,
//                 products
//             })
//         } else {
//             return res.status(200).send({
//                 error: true,
//                 message: 'not exists',
//                 products
//             })
//         }

//     })


//     app.put(`/api/product/:id`, async(req, res) => {
//         const { id } = req.params;

//         let product = await Product.findByIdAndUpdate(id, req.body);

//         return res.status(202).send({
//             error: false,
//             product
//         })

//     });

//     app.delete(`/api/product/:id`, async(req, res) => {
//         const { id } = req.params;

//         let product = await Product.findByIdAndDelete(id);

//         return res.status(202).send({
//             error: false,
//             product
//         })

//     })

// }