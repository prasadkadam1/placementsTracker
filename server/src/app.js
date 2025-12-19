const express = require("express");
const cors = require("cors");

const studentsRoutes = require("./routes/students.routes");
const collegesRoutes = require("./routes/colleges.routes");
const companiesRoutes = require("./routes/companies.routes");
const rolesRoutes = require("./routes/roles.routes");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const app = express();

const swaggerDocument = YAML.load("./swagger.yaml");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors());
app.use(express.json());

app.use("/api/students", studentsRoutes);
app.use("/api/colleges", collegesRoutes);
app.use("/api/companies", companiesRoutes);
app.use("/api/job-roles", rolesRoutes);

module.exports = app;
