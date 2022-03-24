const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 3000;
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { typeDefs, resolvers } = require('./schema/index');
const db = require('./config/connection');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function startServer() {
  const server = new ApolloServer({
      typeDefs,
      resolvers,
  });
  await server.start();
  server.applyMiddleware({ app });
}
startServer();


// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });


app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/conn");

db.once('open', () => {
  app.listen(port, () => {
    console.log(`API server running on port ${port}!`);
    console.log(`Use GraphQL at http://localhost:${port}${server.graphqlPath}`);
  });
});
// app.listen(port, () => {
//   // perform a database connection when server starts
//   dbo.connectToServer(function (err) {
//     if (err) console.error(err);
 
//   });
//   console.log(`Server is running on port: ${port}`);
// });