
const express = require('express');
require('dotenv').config();
const path = require('path');
const hbs = require('hbs');
const mysql = require('mysql2');
const nodemailer = require('nodemailer');
const app = express();
const PORT = process.env.PORT;

//Conexión a la Base de Datos
const conexion = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});


//Configurar Middelwares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//Configuración del Motor de plantillas
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));


app.get('/', (req, res, next) => {
    res.render('index', {
        titulo: 'Bienvenidos al PortFolio de David Arce'
    })
});

app.get('/formulario', (req, res) => {
    res.render('formulario', {
        titulo: 'Formulario para Contacto'
    })
});

app.get('/trabajos', (req, res) => {

    let sql = 'SELECT * FROM l4urqgyfmmtjdc8q.contacto';
    conexion.query(sql,(err, result) => {
        if (err) throw err;
    res.render('trabajos', {
        titulo: 'Lista de Contactos',
        results: result,
        });
    });
});


app.post('/formulario', (req, res) => {

    const { nombre, apellido, telefono, email, mensaje } = req.body;

    if (nombre == '' || apellido == '' || telefono == '' || email == '' || mensaje == '') {
        let validacion = 'Rellene los campos correctamente..';
        res.render('formulario', {
            titulo: 'Formulario para Contacto',
            validacion
        });
    } else {

        let datos = {
            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
            email: email,
            mensaje: mensaje
        };

        let sql = 'INSERT INTO l4urqgyfmmtjdc8q.contacto SET ?';

        conexion.query(sql, datos, (err, result) => {
            let envioDatos = 'Datos Enviados Con Éxito'
            if (err) throw err;
            res.render('formulario', {
                titulo: 'Formulario para Contacto',
                envioDatos
            });
        });
    }
});


app.get('/contacto', (req, res) => {
    res.render('contacto', {
        titulo: 'Suscripcion'
    })
});

app.post('/contacto', (req, res) => {

    const { nombre, email } = req.body;
    let fecha = new Date();
    style = 'index.css'

    if (nombre == '' || email == '') {
        let validacion = 'Rellene la Suscripción correctamente..';
        res.render('contacto', {
            titulo: 'Formulario para Suscripción',
            validacion
        });
    } else {

        
        async function envioMail() {

            let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: process.env.USEREMAIL,
                    pass: process.env.PASS
                }
            });

            let envio = await transporter.sendMail({
                from: process.env.USEREMAIL,
                to: `${email}`,
                subject: 'Gracias por Suscribirse a nuestro Canal',
                html: `Muchas gracias por contactar con nosotros, estaremos en contato con usted ${nombre} <br>
                Todas nuestras promociones ya estarán a su disposición. <br>
                ${fecha}`
            });

            res.render('enviado', {
                titulo: 'Mail Enviado',
                nombre,
                email
            })
        }
        envioMail();
    }
})

app.listen(PORT, () => {

});
