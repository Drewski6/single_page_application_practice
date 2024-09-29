import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
      <h1>Welcome back, Drew</h1>
      <p>
        This is the dashboard. You can view the list of posts, your settings, or logout.
      </p>
      <p>
        <a href="/posts" data-link>View recent posts</a>.
      </p>
    `;
  }
}