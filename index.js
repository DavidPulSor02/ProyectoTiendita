const express = require('express')
const salesRoutes = require('./routes/salesRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const EmpleadoRoutes = require('./routes/empleadosRoutes');
const categoriaRoutes = require('./routes/categoriaRoutes');
const marcaRoutes = require('./routes/marcaRoutes');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use('/api', userRoutes, EmpleadoRoutes, categoriaRoutes, productRoutes, salesRoutes, marcaRoutes)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 
