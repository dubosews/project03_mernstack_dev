const mongoose = require('mongoose');

const mongoURL = 'mongodb+srv://mernTestadmin:mernTestadmin@unc-bc-merntest-cluster.4q8ii.mongodb.net/UNC-BC-mernTest-Cluster?retryWrites=true&w=majority';

mongoose.connect(
  process.env.MONGODB_URI || mongoURL,
);

module.exports = mongoose.connection;
