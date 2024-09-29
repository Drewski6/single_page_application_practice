// 
import Dashboard from "./views/Dashboard.js";

// Allows us to use the history API to navigate to different routes
const navigateTo = url => {
  history.pushState(null, null, url);
  router();
}

// This class handles routes for the single page application
const router = async () => {
  const routes = [
    { 
      path: '/', 
      view: Dashboard
    },
    // { 
    //   path: '/posts', 
    //   view: () => render('Viewing Posts') 
    // },
    // { 
    //   path: '/settings', 
    //   view: () => render('Viewing Settings') 
    // }
  ];

  // Uses the map method to create an array of objects that contain the route and whether or not it matches the current location
  const potentialMatches = routes.map(route => {
    return {
      route: route,
      isMatch: location.pathname === route.path
    };
  });

  // creates a match object that contains the route and whether or not it is a match
  let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

  // If no match is found, the default route '/' is used
  if (!match) {
    match = {
      route: routes[0],
      isMatch: true
    };
  }

  // Creates a new instance of the view
  const view = new match.route.view();

  // Uses the view instance we just created to render the view
  document.querySelector('#app').innerHTML = await view.getHtml();
};

// This event listener listens for a popstate event and calls the router function
// This means when the back or forward buttons are clicked, the router function is called.
window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {

  // Adding this event listener allows us to navigate to different routes by clicking on links. Does not require a page reload
  document.body.addEventListener('click', e => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});