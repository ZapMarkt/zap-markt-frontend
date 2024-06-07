import { exec } from "child_process";

const docker = exec("docker-compose up -d");

docker.stdout.on("data", (_) => true);
docker.on("close", (code) => {
  if (code === 0) {
    const server = exec("vite");

    server.stdout.on("data", (d) => console.log(d));
    server.stderr.on("data", (d) => console.error(d));

    server.on("close", (code) => console.log(`Server is running: ${code}`));

    setTimeout(() => {
      exec("start http://localhost:5173");
    }, 3000);

    setTimeout(() => {
      exec("start http://localhost:8080/swagger/index.html");
    }, 6000);
  }
});
