const port = process.env.PORT;
const server = require("./api/server.js");
server.listen(port, () => console.log(`\nserver is listening on ${port}`));
