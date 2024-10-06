import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Viewing Post");
  }

  async getHtml() {
    const response = await fetch(`http://localhost:5000/api/blogposts/${this.params.id}`);
    const data = await response.json();

    let content = `
      <h4>${data.title}</h4> 
      <p>${data.published}</p>
      <p>${data.content}</p>
    `;

    return content;
  }
}