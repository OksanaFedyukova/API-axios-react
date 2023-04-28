import axios from "axios";

class SWService {
  async getData(type, id) {
    const data = await axios
      .get(`https://swapi.dev/api/${type}/${id}`)
      .then((res) => res.data)
      .catch((err) => {
        if (err.response) {
          console.log(err.response.status);
        }
        if (err.response.status === 404) {
          return { name: "Oooops...click next" };
        }
      });
    return data;
  }

  async getImageUrl(type, id) {
    if (type === "people") {
      type = "characters";
    }

    const imgUrl = await axios
      .get(`https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`)
      .then((res) => res.request.responseURL)
      .catch((err) => {
        if (err.response) {
          console.log(err.response.status);

          if (err.response.status === 404) {
            return Promise.resolve(
              "https://starwars-visualguide.com/assets/img/big-placeholder.jpg"
            );
          }
        }
      });

    console.log("in get image: ", imgUrl);
    return imgUrl;
  }
}

export const swService = new SWService();