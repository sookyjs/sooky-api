import { StatusCodes } from "http-status-codes"

export default async (req, res) => {
    try {
        const productModel = req.scope.resolve("productModel")
        const product = await productModel.create({...req.body})
        res.status(StatusCodes.CREATED).json({success : true, product, msg : 'Successfully Created'});
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({success : false, error : error.message});
    }
}