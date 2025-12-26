import restaurantImage from "../assets/images/restaurant.jpg";

export default function createHomePage() {
  const homeDiv = document.createElement("div");
  homeDiv.id = "home-content";

  const heading = document.createElement("h1");
  heading.textContent = "Welcome to Delicious Restaurant!";
  heading.classList.add("restaurant-title");

  const image = document.createElement("img");
  image.src = restaurantImage;
  image.alt = "Our beautiful restaurant";
  image.classList.add("restaurant-image");

  const description = document.createElement("p");
  description.textContent =
    "Experience the finest dining in town! Our restaurant has been serving delicious meals made from locally sourced ingredients for over 20 years. Come join us for an unforgettable culinary journey.";
  description.classList.add("restaurant-description");

  const hours = document.createElement("div");
  hours.classList.add("hours");
  hours.innerHTML = `
        <h2>Opening Hours</h2>
        <p>Monday - Friday: 11am - 10pm</p>
        <p>Saturday - Sunday: 10am - 11pm</p>
    `;

  homeDiv.appendChild(heading);
  homeDiv.appendChild(image);
  homeDiv.appendChild(description);
  homeDiv.appendChild(hours);

  return homeDiv;
}
