const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_DEV, {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useNewUrlParser: true
});
