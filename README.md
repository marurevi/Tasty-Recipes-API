![](https://img.shields.io/badge/Microverse-blueviolet)

# TASTY RECIPIES | API-based webapp
We built our own web application based on an external API. We selected an [API](https://rapidapi.com/apidojo/api/tasty/) that provides data about food recipies. The webapp has 2 user interfaces:

- A home page showing a list of items that you can "like."
- A popup window with more data about an item that you can use to comment on it or reserve it for a period of time.
In this pages we implement the followings features:
## Home page
 > When the page loads, the webapp retrieves data from:
  The selected API and shows the list of items on screen.
  The Involvement API to show the item likes.
  The page make only 2 requests:
    - One to the base API.
    - And one to the Involvement API.
  > When the user clicks on the Like button of an item, the interaction is recorded in the Involvement 
  >  API and the screen is updated.
  > When the user clicks on the "Comments" button, the Comments popup appears.

## Comments popup
> When the popup loads, the webapp retrieves data from:
> The selected API and shows details about the selected item.
> The Involvement API to show the item comments.
> When the user clicks on the "Comment" button, the data is recorded in the Involvement API and the screen is updated.

## Counters We have counters in all the interfaces that show:

- The number of items (home).
- The number of comments (comments popup).
- We created a specific function to calculate these numbers in each page. These count functions were tested using Jest.

## Built With

- Major languages
    HTML, CSS, JavaScript
- Frameworks
    Webpack, Jest
- Technologies used

## Live Demo

[Live Demo Link](https://marurevi.github.io/Tasty-Recipes-API/dist/index.html)


![presentation](https://user-images.githubusercontent.com/92180054/169616865-51ae370d-e276-4e74-a592-6679250cf875.png)


## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites
 Get the latest version of Node.js
### Install
 npm install
### Usage
 npm run start
### Run tests
 npm run test

### Deployment
 npm run start

## Authors

👤 **Mariana Revilla Lérida**

- GitHub: [@marurevi](https://github.com/marurevi)
- Twitter: [@MaruRevilla](https://twitter.com/MaruRevilla)
- LinkedIn: [Mariana-Revilla-Lérida](https://linkedin.com/in/mariana-revilla-l%C3%A9rida-a12aba143)

👤 **Mahmoud Makhlouf**

- GitHub: [@devMahmoud](https://github.com/devMahmoud)
- LinkedIn: [Mahmoud Makhlouf](https://www.linkedin.com/in/mahmoud-makhlouf-844271211/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc

## 📝 License

This project is [MIT](./MIT.md) licensed.
