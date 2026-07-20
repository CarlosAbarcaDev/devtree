import server from "./server.ts";
//port
const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
