const User = require('./models/User');

const seedAdmin = async () => {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;
  if (!email || !password) return;

  const existing = await User.findOne({ email });
  if (existing) return;

  await User.create({ name: 'Admin', email, password, role: 'admin' });
  console.log('✅ Default admin created');
};

module.exports = seedAdmin;
