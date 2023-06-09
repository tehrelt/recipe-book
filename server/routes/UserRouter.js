const Router = require('express')
const router = new Router()

router.post('/signup')  // Регистрация
router.post('/signin')  // Логин
router.get('/auth')     
router.get('/:id')

module.exports = router