const datalize = require('datalize')
const isPagingOptionsValidator = require('./validators/isPagingOptionsValidator')
const dateValidator = require('./validators/dateValidator')

datalize.Field.prototype.isPagingOptions = isPagingOptionsValidator
datalize.Field.prototype.date = dateValidator

module.exports = datalize
