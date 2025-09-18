const app = require("../app");
const serverless = require("serverless-http");

// Handler Netlify Functions avec le bon chemin de base
const handler = serverless(app, {
  basePath: "/.netlify/functions/app",
});

exports.handler = async (event, context) => {
  // Netlify ajoute déjà le préfixe, donc on le retire pour Express
  if (event.path.startsWith("/.netlify/functions/app")) {
    event.path = event.path.replace("/.netlify/functions/app", "") || "/";
  }

  return handler(event, context);
};
