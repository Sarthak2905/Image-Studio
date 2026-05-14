require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/db');
const seedAdmin = require('./seedAdmin');

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await connectDB();
    await seedAdmin();
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  } catch (error) {
    console.error('Failed to start server', error);
    process.exit(1);
  }
})();
