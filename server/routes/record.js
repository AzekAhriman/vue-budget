/* eslint @typescript-eslint/no-var-requires: "off" */
const express = require('express');
const router = express.Router();

const Record = require('../models/Record');

router.get('/', async (req, res) => {
    //await Record.collection.drop(); - дропнуть базу
    res.json(await Record.find());
});

router.post('/', async (req, res) => {
    const record = new Record(req.body);
    await record.save();
    res.json({state: 'success'});
});

router.get('/:id', async (req, res) => {
    res.json(await Record.findOne({id: req.params.id}));
});

router.put('/:id', async (req, res) => {
    await Record.findOneAndUpdate({id: req.params.id}, req.body);
    res.json({state: 'updated'});
});

router.delete('/:id', async (req, res) => {
    await Record.findOneAndRemove({id: req.params.id});
    res.json({state: 'deleted'});
});

module.exports = router;