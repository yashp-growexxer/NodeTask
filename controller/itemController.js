const Item = require('../models/itemModel');

exports.createItems = async(req , res) => {
    try {
        const item = await Item.create(req.body);
        res.status(201).json({
            status : 'true',
            message : 'Item created successfully',
            data : {item}
        })
    } catch(err){
        res.status(400).json({
            status : 'false',
            message : err
        })
    }
};

exports.getAllItems = async(req , res) => {
    try {
        const items = await Item.find();
        res.status(200).json({
            success : 'true',
            data : {items}
        })
    } catch(err){
        res.status(404).json({
            success : false,
            message : 'No items found',
            error : err
        })
    }
};

exports.getItem = async(req ,res) => {
    try{
        const items = await Item.findById(req.params.id)
        res.status(200).json({
            success : 'true',
            data : {items}
        })  
    } catch(err){
        res.status(404).json({
            success : false,
            message : 'No items found',
            error : err
        })
    }
}

exports.updateItem = async (req,res) => {
    try{
        const items = await Item.findByIdAndUpdate(req.params.id , req.body)
        res.status(200).json({
            success : 'true',
            message : 'Item updated successfully',
            data : {items}
        })
    }catch(err){
    res.status(404).json({
            success : false,
            message : 'No items found',
            error : err
        })
    }
}

exports.deleteItem = async(req , res) =>{
    try{
    const items = await Item.findByIdAndDelete(req.params.id)
    res.status(200).json({
        success : 'true',
        message : 'Item deleted successfully',
    })
    }catch(err){
        res.status(404).json({
            success : false,
            message : 'No item found',
        })
    }
}