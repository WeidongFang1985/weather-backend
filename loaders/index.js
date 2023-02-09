//module.exports
// const expressLoader = require('./express')
//
// const init = () => {
//     expressLoader()
// }
//
// module.exports = init;


// exports.init
const expressLoader = require('./express')

exports.init = () => {
    expressLoader()
}