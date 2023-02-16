const app = require("./app.js");
const config = require("./app/configs/index");
const MongoDB = require("./app/utils/mongoose.util");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const Connect = async () => {
  try {
    await MongoDB.connect(config.db.uri);
    console.log("is connecting");
    const PORT = config.app.port;
    app.listen(PORT, () => {
      console.log(`server is running on ${PORT}`);
    });
  } catch (error) {
    console.log({
      error: error.message,
    });
  }
};

Connect();
