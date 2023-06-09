const Router = require('express')
const router = new Router()

const userRouter = require('./UserRouter')
const dishRouter = require('./DishRouter')

router.use('/user', userRouter)
router.use('/dish', dishRouter)

module.exports = router