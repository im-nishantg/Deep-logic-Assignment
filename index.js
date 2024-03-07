const express = require('express');

const app = express();
const port = 3000; 

const timeStories = [
  {
    "title": "OpenAI Says Musk Agreed the ChatGPT Maker Should Become a For-Profit Company",
    "link": "https://time.com/6874035/openai-elon-musk-chatgpt-for-profit-company/"
  },
  {
    "title": "Why Bitcoin Just Hit Its All-Time High",
    "link": "https://time.com/6846934/bitcoin-all-time-high-price-holdings/"
  },
  {
    "title": "Facebook and Instagram Are Back After Widespread Outages",
    "link": "https://time.com/6850452/facebook-instagram-outage-down/"
  },
  {
    "title": "Apple Fined Nearly $2 Billion by the European Union in Antitrust Penalty",
    "link": "https://time.com/6837420/apple-fined-2-billion-european-union/"
  },
  {
    "title": "Elon Musk Meets With Donald Trump as Former President Seeks 2024 Campaign Funding",
    "link": "https://time.com/6852994/elon-musk-donald-trump-campaign-funding/"
  },
  {
    "title": "How Sarah J. Maas Built a Sprawling Fantasy Multiverse",
    "link": "https://time.com/6590247/sarah-j-maas-interview-house-of-flame-and-shadow/"
  }
];

app.get('/', (req, res) => {
    res.json("Visit http://localhost:3000/getTimeStories to read the latest news.");
  });

app.get('/getTimeStories', (req, res) => {
  res.json(timeStories);
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
