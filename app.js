const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors({
    origin:"*",
}));
app.use(express.json());

const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('database connected'))
    .catch(err => console.log(err));

// Import routes
const userRoutes = require('./routes/user.js');
const roleRoutes = require('./routes/role.js');
const { errorMiddleware } = require('./middlewares/error.js');

app.use('/api/users', userRoutes);
app.use('/api/roles', roleRoutes);

//error handling
app.use( errorMiddleware);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});