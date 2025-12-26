import salmonImage from "../assets/images/salmon.jpg";
import steakImage from "../assets/images/steak.jpg";
import lasagnaImage from "../assets/images/lasagna.jpg";
import paellaImage from "../assets/images/paella.jpg";
import risottoImage from "../assets/images/risotto.jpg";
import cakeImage from "../assets/images/cake.jpg";

export default function createMenuPage() {
  const menuDiv = document.createElement("div");
  menuDiv.id = "menu-content";

  const heading = document.createElement("h1");
  heading.textContent = "Our Menu";
  heading.classList.add("menu-title");

  const menuItems = [
    {
      name: "Grilled Salmon",
      description:
        "Fresh Atlantic salmon grilled to perfection with lemon butter sauce, served with seasonal vegetables and roasted potatoes.",
      price: "$24.99",
      image: salmonImage,
    },
    {
      name: "Filet Mignon",
      description:
        "8oz premium beef tenderloin with red wine reduction, accompanied by garlic mashed potatoes and asparagus.",
      price: "$32.99",
      image: steakImage,
    },
    {
      name: "Vegetable Lasagna",
      description:
        "Layers of fresh pasta with seasonal vegetables, ricotta, mozzarella, and parmesan cheese, baked to perfection.",
      price: "$18.99",
      image: lasagnaImage,
    },
    {
      name: "Seafood Paella",
      description:
        "Traditional Spanish paella with saffron rice, shrimp, mussels, clams, and chorizo.",
      price: "$26.99",
      image: paellaImage,
    },
    {
      name: "Truffle Risotto",
      description:
        "Creamy arborio rice with black truffle, parmesan cheese, and wild mushrooms.",
      price: "$22.99",
      image: risottoImage,
    },
    {
      name: "Chocolate Lava Cake",
      description:
        "Warm chocolate cake with molten center, served with vanilla bean ice cream and fresh berries.",
      price: "$9.99",
      image: cakeImage,
    },
  ];

  const menuList = document.createElement("div");
  menuList.classList.add("menu-list");

  menuItems.forEach((item) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    // Create image element
    const itemImage = document.createElement("img");
    itemImage.src = item.image;
    itemImage.alt = item.name;
    itemImage.classList.add("menu-item-image");

    const itemContent = document.createElement("div");
    itemContent.classList.add("menu-item-content");

    const itemName = document.createElement("h3");
    itemName.textContent = item.name;

    const itemDescription = document.createElement("p");
    itemDescription.textContent = item.description;

    const itemPrice = document.createElement("span");
    itemPrice.textContent = item.price;
    itemPrice.classList.add("price");

    itemContent.appendChild(itemName);
    itemContent.appendChild(itemDescription);
    itemContent.appendChild(itemPrice);

    menuItem.appendChild(itemImage);
    menuItem.appendChild(itemContent);
    menuList.appendChild(menuItem);
  });

  menuDiv.appendChild(heading);
  menuDiv.appendChild(menuList);

  return menuDiv;
}
