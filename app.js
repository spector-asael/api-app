const apiKey = "pwvp8t1Yt7r6BL14k56LLw==a3w85m1RDIdniGj9";
const quoteApiUrl = "https://api.api-ninjas.com/v1/quotes";
const quoteImageUrl = "https://random-image-pepebigotes.vercel.app/api/random-image";

const getQuote = new Promise((resolve, reject) => {
  fetch(quoteApiUrl, {
    method: "GET",
    headers: {
      "X-API-Key": apiKey,
    }
  })
  .then(data => {
    console.log("API Response (Quote):", data);
    resolve(data);
  })
  .catch(error => {
    console.error("Error fetching data:", error);
    reject(error);
  })
})

const getImage = new Promise((resolve, reject) => {
  fetch(quoteImageUrl)
  .then(response => response.json()) // Parse JSON response
  .then(data => {
    console.log("Image URL:", data.imageUrl);
    resolve(data.imageUrl); // Resolve with the image URL
  })
  .catch(error => {
    console.error("Error fetching image:", error);
    reject(error);
  })
});