import { StatusCodes } from "http-status-codes"

export default async (req, res) => {
    try {
        const selector = {}

        const productService = req.scope.resolve("productService")
        const products = await productService.list(selector);
        res.status(StatusCodes.OK).json({success : true, products, size : products.length});
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({success : false, error : error.message});
    }
}
