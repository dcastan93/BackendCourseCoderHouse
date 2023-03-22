import express from "express"
import { engine } from 'express-handlebars'
//esto se monta un servidor de forma màs facil
const app = express();

app.use('/static', express.static('./static'))

app.engine('handlebars', engine())
app.set('views', './views')

// api rest!!!
app.get('/api/contenido', async (req, res, next) => {
    res.json({ contenido: 'hola mundoooooo!' })
})

// web server!!!
app.get('/', async (req, res, next) => {
    res.render('inicio.handlebars', { titulo: 'Inicio', encabezado: 'Inicio' })
})

app.get('/contacto', async (req, res, next) => {
    res.render('inicio.handlebars', { titulo: 'Contacto', encabezado: 'Contacto' })
})

app.get('/about', async (req, res, next) => {
    // const listado = ['comer', 'dormir']
    const listado = []
    res.render('listado.handlebars', {
        titulo: 'About',
        encabezado: 'Acerca de mí',
        listado,
        hayListado: listado.length > 0
    })
})

app.listen(8080, () =>
  console.log('Example app listening on port 8080!'),
);