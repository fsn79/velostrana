const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')

//все что относится к кукам и сессиям
const cookieParser = require('cookie-parser')
const session = require('express-session')
const FileStore = require('session-file-store')(session)

const PORT = process.env.PORT || 3000

//routes >>>>>>>>>>>>
const regRouter = require('./routes/registr')
const mainRouter = require('./routes/main')
const homeRouter = require('./routes/home')
const loginRouter = require('./routes/login')
const logoutRouter = require('./routes/logout')
//>>>>>>>>>>>>>

//hbs on
app.set('view engine', 'hbs')

//public, body, json, cookie on
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())

//partials
hbs.registerPartials(__dirname + '/views/partials', function (err) {})

//session>>>>>>>>>>
app.use(
  session({
    store: new FileStore(),
    // key: 'velostrana',
    secret: 'youInSession',
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 1000 * 60 * 15, // жизнь сессии 15 минут
      httpOnly: true,
    },
  })
)
//>>>>>>>>>>>>>>

// call routes >>>>>>>>>>
app.use('/registration', regRouter)
app.use('/', mainRouter)
app.use('/home', homeRouter)
app.use('/login', loginRouter)
app.use('/logout', logoutRouter)
app.use('/auth/:name', mainRouter)
//>>>>>>>>>>>>>

app.listen(PORT, () => {
  console.log(`>> server app on ${PORT}`)
})
