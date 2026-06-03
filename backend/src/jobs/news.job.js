const cron =
  require("node-cron");

cron.schedule(
  "0 * * * *",
  async () => {
    console.log(
      "Fetching latest news..."
    );
  }
);