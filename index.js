const express = require('express');
const pool = require('./db'); // Aquí importa tu archivo db.js
const app = express();

app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API funcionando');
});

// La ruta que te pide la Parte 3
app.get('/alumnos', async (req, res) => {
  try {
    const resultado = await pool.query('SELECT * FROM alumno');
    res.json(resultado.rows);
  } catch (error) {
    console.error('Error al consultar alumnos:', error);
    res.status(500).json({ error: 'Error al obtener los alumnos' });
  }
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});