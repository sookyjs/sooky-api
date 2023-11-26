import mongoose from "mongoose"
import _ from "lodash"
import SookyError from "../core-utils/errors.js"
import BaseService from "../interfaces/base-service.js"

/**
 * Provides layer to manipulate products.
 * @implements BaseService
 */
class ProductService extends BaseService {
  /** @param { productModel: (ProductModel) } */
  constructor({ productModel, eventBusService }) {
    super()

    /** @private @const {ProductModel} */
    this.productModel_ = productModel

    /** @private @const {EventBus} */
    this.eventBus_ = eventBusService
  }

  /**
   * @param {Object} selector - the query object for find
   * @return {Promise} the result of the find operation
   */
  list(selector) {
    return this.productModel_.find(selector)
  }
}

export default ProductService
