
const app = require('./index');
const { PORT } = require('./src/config/config');

async function main() {
    await app.listen(PORT);
    console.log('Server on port', PORT);
}

main();