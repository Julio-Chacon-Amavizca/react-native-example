export async function getLatestGames() {
  const LATEST_GAMES =
    'https://internal-prod.apigee.fandom.net/v1/xapi/finder/metacritic/web?sortBy=-metaScore&productType=games&page=1&releaseYearMin=1958&releaseYearMax=2024&offset=0&limit=24&apiKey=1MOZgmNFxvmljaQR1X9KAij9Mo4xAY3u'; // the url to fetch the data

  const rawData = await fetch(LATEST_GAMES); // fetch the data
  const json = await rawData.json(); // parse the data

  const {
    data: { items },
  } = json; // get the items from the data

  return items.map((item) => {
    const { description, slug, releaseDate, image, criticScoreSummary, title } =
      item;
    const { score } = criticScoreSummary; // get the score

    // crea la imagen
    const { bucketType, bucketPath } = image; // get the image
    const img = `https://www.metacritic.com/a/img/${bucketType}${bucketPath}`; // create the image

    return {
      description,
      releaseDate,
      score,
      slug,
      title,
      image: img,
    };
  }); // return the data
}

export async function getGameDetails(slug) {
  const GAME_DETAILS = `https://internal-prod.apigee.fandom.net/v1/xapi/composer/metacritic/pages/games/${slug}/web?&apiKey=1MOZgmNFxvmljaQR1X9KAij9Mo4xAY3u`;

  const rawData = await fetch(GAME_DETAILS);
  const json = await rawData.json();

  const { components } = json;
  const { title, description, criticScoreSummary, images } =
    components[0].data.item;
  const { score } = criticScoreSummary;

  // get the card image
  const cardImage = images.find((image) => image.typeName === 'cardImage');
  const { bucketType, bucketPath } = cardImage;
  const img = `https://www.metacritic.com/a/img/${bucketType}${bucketPath}`;

  const rawReviews = components[3].data.items;

  // get the reviews
  const reviews = rawReviews.map((review) => {
    const { quote, score, date, publicationName, author } = review;
    return { quote, score, date, publicationName, author };
  });
  return {
    img,
    title,
    slug,
    description,
    score,
    reviews,
  };
}
