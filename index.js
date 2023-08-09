import express from 'express'

const app = express()
const PORT = process.env.PORT || 8080

app.get('/', (req,res)=>{
    res.json({msg:'hello'})
})

app.get('/hospitals', (req, res) =>{
    res.json ([
        {
            id: 1,
            name: "Boston Children's hospital",
            address: "233 selrijse road",
            phone: '12324345645'
        },{
            id: 2,
            name: "Boston Women's hospital",
            address: "42 ssese road",
            phone: '7298573645'
        },{
            id: 3,
            name: "Women's hospital",
            address: "423 ssese road",
            phone: '724398573645'
        }
    ])
})

app.get('/hospitals/:id',(req, res)=>{
    const id = req.params.id;
    res.json({
        id:id,
        services: 12,
        notes: `hospital ${id} has public accessible data.`
    })
})

app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`)})

