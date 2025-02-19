import swaggerJsdoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Gestor de Tareas API",
      version: "1.0.0",
      description: "API para gestionar tareas con autenticación JWT",
    },
    servers: [{ url: "http://localhost:5000" }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ["./routes/*.js"], // Documentará todas las rutas dentro de la carpeta routes
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

export default swaggerDocs;
