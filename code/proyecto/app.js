const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/dashboard', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión exitosa a MongoDB');
});

// Definir el esquema del usuario
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: String
});

const User = mongoose.model('User', userSchema);

app.use(express.json());

// Ruta de registro
app.post('/register', async (req, res) => {
  const { username, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    username,
    password: hashedPassword,
    role
  });

  await newUser.save();
  res.status(201).json({ message: 'Usuario registrado exitosamente' });
});

// Ruta de inicio de sesión
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Contraseña incorrecta' });
  }

  const token = jwt.sign({ username, role: user.role }, 'secretKey');
  res.json({ token });
});

// Rutas protegidas
const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.sendStatus(401);

  jwt.verify(token, 'secretKey', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

app.get('/dashboard', authenticateToken, (req, res) => {
  // Aquí puedes consultar la base de datos y devolver los datos necesarios para el dashboard
  // Por ejemplo, información de los sensores para los gráficos
  res.json({ message: 'Datos del dashboard aquí' });
});

app.listen(port, () => {
  console.log(`Servidor backend en ejecución en http://localhost:${port}`);
});
