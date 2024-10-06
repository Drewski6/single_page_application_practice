import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Data");
  }

  async getHtml() {
    // Everything is in a try catch block for errors 
    try {
      // create a fetch request to the api
      const response = await fetch('http://localhost:5000/api/blogposts/');
      // get the data from the response
      const data = await response.json();

      // Start creating the html to return
      let content = `
        <p> You are viewing Data from the database!</p>
        <ul>
      `;

      // Loop through the data and create a list item for each item
      data.forEach(item => {
        content += `
          <li>
            <h3>Title: ${item.title}</h3>
            <p>ID: ${item.id}
            <p>Content: ${item.content}</p>
            <p>Published: ${item.published}</p>
          </li>
        `;
      });

      // Close the unordered list
      content += '</ul>';

      // Return the content
      return content;
    } catch (error) {
      // If there is an error, log it to the console and return an error message
      console.error(error);
      return `<p>There was an error fetching the data.</p>`;
    }
  }
}