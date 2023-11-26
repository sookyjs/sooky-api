import BaseModel from '../interfaces/base-model.js';

class ProductModel extends BaseModel {
    static modelName = "Product"
    static schema = {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            default: "",
        },
        handle: {
            type: String,
            required: true,
            unique: true
        },
        price: {
            type: Number,
            required: true,
        },
        published: { 
            type: Boolean, 
            default: false 
        },
        createdAt: { 
            type: Date, 
            default: Date.now 
        },
    }
  }
  
  export default ProductModel