const CARDS_URL = 'http://prototype.carter-dev.net/fed-test/items.json';

/* Service to fetch the cards data */
const CardsService = {
  getCards: () => {
    return fetch(CARDS_URL)
      .then(res => {
        return res.json();
      })
      .catch(error => {
        return error;
      });
  }
};

export default CardsService;