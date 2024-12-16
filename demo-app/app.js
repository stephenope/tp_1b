const express = require('express');
const app = express();
const port = 3000;
// Définition de la route principale
app.get('/', (req, res) => {
 res.send('Welcome to OpenShift');
});
// Lancement de l'application
app.listen(port, () => {
 console.log(`Example app listening at http://0.0.0.0:${port}`);
});
