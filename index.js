const Express = require("express");
const { json, urlencoded } = require("express");
const application = Express();

application.use(json());
application.use(urlencoded());

application.get("/test", async (request, response) => {
  response.status(200).json({
    isSuccess: true,
    message: "Server running",
  });
});

application.listen(process.env.PORT || 1234, () => {
  console.log(`Server Started at http://localhos:${process.env.PORT || 3000}`);
});
