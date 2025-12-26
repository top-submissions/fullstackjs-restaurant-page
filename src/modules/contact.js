export default function createContactPage() {
  const contactDiv = document.createElement("div");
  contactDiv.id = "contact-content";

  const heading = document.createElement("h1");
  heading.textContent = "Contact Us";
  heading.classList.add("contact-title");

  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contact-info");
  contactInfo.innerHTML = `
        <p><strong>Address:</strong> 123 Food Street, Culinary City, CC 12345</p>
        <p><strong>Phone:</strong> (123) 456-7890</p>
        <p><strong>Email:</strong> info@deliciousrestaurant.com</p>
    `;

  const form = document.createElement("form");
  form.classList.add("contact-form");
  form.innerHTML = `
        <h2>Send us a message</h2>
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit">Send Message</button>
    `;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    form.reset();
  });

  contactDiv.appendChild(heading);
  contactDiv.appendChild(contactInfo);
  contactDiv.appendChild(form);

  return contactDiv;
}
