const apiKey = "pwvp8t1Yt7r6BL14k56LLw==a3w85m1RDIdniGj9";
const quoteApiUrl = "https://api.api-ninjas.com/v1/quotes";
const unsplashApiUrl = "https://api.unsplash.com/photos/random?client_id=YOUR_ACCESS_KEY"; // Replace with your Unsplash Access Key

// Function to fetch quote
const getQuote = () => {
  return fetch(quoteApiUrl, {
    method: "GET",
    headers: {
      "X-API-Key": apiKey,
    },
  })
    .then(response => response.json()) 
    .then(data => {
      console.log("API Response (Quote):", data);
      const quoteText = data[0].quote
      const quoteAuthor = data[0].author 
     
      document.getElementById("quote").textContent = `"${quoteText}"`;
      document.getElementById("author").textContent = `- ${quoteAuthor}`;
    })
    .catch(error => {
      console.error("Error fetching data:", error);
      throw error; 
    });
};

const getImage = () => {
  return fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      const imageUrl = data.message; 
      console.log("Dog Image URL:", imageUrl);
      document.getElementById("image").src = imageUrl;
    })
    .catch(error => {
      console.error("Error fetching image:", error);
      throw error;
    });
};


const regenerateContent = () => {
  getQuote();
  getImage();
};

getQuote();
getImage();

// Add event listener to the "Regenerate" button
document.getElementById("button").addEventListener("click", regenerateContent);
