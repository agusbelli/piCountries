const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3001;

conn.sync({ force: false }).then(() => {
server.listen(PORT, async () => {

  const databaseInformation = await axios.get("http://localhost:3001/countries")
  const load = databaseInformation.data==="No matches found"
    ?await axios.get("http://localhost:3001/countries/load")
    :{data:"Preloaded database"}
  console.log(`Server listening on port ${PORT}. ${load.data}`);

})
}).catch(error => console.error(error))
