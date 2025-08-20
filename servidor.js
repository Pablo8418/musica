const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

// Ruta para servir los archivos estáticos
app.use(express.static(path.join(__dirname)));

// Ruta para obtener la lista de canciones
app.get('/songs', (req, res) => {
    fs.readdir(path.join(__dirname, 'mp3'), (err, files) => {
        if (err) {
            return res.status(500).send('Error al leer el directorio de canciones.');
        }
        const songs = files.filter(file => file.endsWith('.mp3'));
        res.json(songs);
    });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});