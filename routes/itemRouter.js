const express = require('express');
const itemController = require('../controller/itemController');
const itemRouter = express.Router();

itemRouter.route('/').post(itemController.createItems).get(itemController.getAllItems);
itemRouter.route('/:id').get(itemController.getItem).put(itemController.updateItem).delete(itemController.deleteItem);

module.exports = itemRouter;