const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "xr8k2i",
  e2e: {
    setupNodeEvents(on, config) {
      // registre eventos aqui se precisar
    },
  },  
});
