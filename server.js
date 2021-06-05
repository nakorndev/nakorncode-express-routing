const express = require('express')

const app = express()

app.use('/users', require('./routes/users.js'))
app.use('/admin', require('./routes/admin.js'))

app.listen(3000, () => console.log('App listening on http://127.0.0.1:3000'))
