# madriddevs
Aplicación Madrid Devs

#Estructura del proyecto
/proyecto-ejs
├── data/               # Archivos JSON (tu "base de datos" temporal)
├── src/
│   ├── controllers/    # Lógica (el "qué hacer")
│   ├── models/         # Gestión de datos (el "conector")
│   ├── routes/         # URLs (el "dónde")
│   └── views/          # Plantillas EJS (la "cara" de la app)
│       ├── partials/   # Header, Footer, Nav
│       └── pages/      # Vistas completas (index, contacto, etc.)
├── public/             # CSS, Imágenes, JS del cliente
├── app.js              # Configuración de Express
└── package.json