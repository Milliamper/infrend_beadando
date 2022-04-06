import express from 'express'

const app = express()

app.get('/api/greet', (req,res) => {
    res.json({message: 'Hello World'})
})

app.listen(3000, () => {
    console.log('Szerver sikeresen elindítva')
})