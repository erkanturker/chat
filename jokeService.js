const { default: axios } = require("axios");

class JokeService {
  static async getRandomJoke() {
    try {
      const resp = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      });
      return resp.data.joke;
    } catch (error) {
      throw new Error("Fetching issue");
    }
  }
}

module.exports = JokeService;
