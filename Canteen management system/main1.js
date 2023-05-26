// Store menu items in an array of objects
let menuItems = [
    {
      id: 1,
      name: "Burger",
      description: "A classic burger with lettuce, tomato, and cheese.",
      price: 5.99,
      imgSrc: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Fries",
      description: "Crispy, golden fries with a pinch of salt.",
      price: 2.99,
      imgSrc: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      name: "Pizza",
      description: "A delicious pizza with your choice of toppings.",
      price: 8.99,
      imgSrc: "https://via.placeholder.com/150"
    }
  ];
  
  // Get references to HTML elements
  const loginForm = document.getElementById("login-form");
  const registrationForm = document.getElementById("registration-form");
  const menu = document.getElementById("menu");
  const orderForm = document.getElementById("order-form");
  const orderSummary = document.getElementById("order-summary");
  
  // Add event listeners to login and registration forms
  loginForm.addEventListener("submit", handleLogin);
  registrationForm.addEventListener("submit", handleRegistration);
  
  // Add event listener to menu button
  document.getElementById("menu-button").addEventListener("click", showMenu);
  
  // Add event listener to menu items
  for (let i = 0; i < menuItems.length; i++) {
    document.getElementById(`item-${menuItems[i].id}`).addEventListener("click", () => showOrderForm(menuItems[i]));
  }
  
  // Add event listener to order form
  orderForm.addEventListener("submit", handleOrder);
  
  // Define functions
  function handleLogin(event) {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    // Check if email and password are correct (for simplicity, just check if email contains "admin" and password is "password")
    if (email.includes("admin") && password === "password") {
      alert("Login successful!");
      // Hide login form and show menu button
      loginForm.style.display = "none";
      document.getElementById("menu-button").style.display = "block";
    } else {
      alert("Invalid email or password. Please try again.");
    }
  }
  
  function handleRegistration(event) {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    // For simplicity, just alert the user that registration is not currently available
    alert("Registration is not currently available.");
  }
  
  function showMenu() {
    // Hide login form and show menu
    loginForm.style.display = "none";
    menu.style.display = "block";
    // Generate menu items dynamically
    let menuItemsHtml = "";
    for (let i = 0; i < menuItems.length; i++) {
      menuItemsHtml += `
        <div class="menu-item">
          <img src="${menuItems[i].imgSrc}" alt="${menuItems[i].name}">
          <h3>${menuItems[i].name}</h3>
          <p>${menuItems[i].description}</p>
          <p>$${menuItems[i].price.toFixed(2)}</p>
          <button id="item-${menuItems[i].id}">Order</button>
        </div>
      `;
    }
    // Insert menu items into the menu
    document.getElementById("menu-items").innerHTML = menuItemsHtml;
  }
  
  function showOrderForm(item) {
    // Hide menu and show order form
    menu.style.display = "none";
    orderForm.style.display = "block";
    // Populate order form with item information
    document.getElementById("item-name").textContent = item.name;
    document.getElementById("item-price").textContent = `$${item.price.toFixed(2)}`;
    document.getElementById("item-img").src = item.imgSrc;
  }
  
  function handleOrder(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const quantity = event.target.elements.quantity.value;
    const itemPrice = parseFloat(event.target.elements.price.value);
    const totalPrice = itemPrice * parseInt(quantity);
    // Generate order summary dynamically
    const orderSummaryHtml = `
      <h3>Order Summary</h3>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Quantity: ${quantity}</p>
      <p>Item Price: $${itemPrice.toFixed(2)}</p>
      <p>Total Price: $${totalPrice.toFixed(2)}</p>
    `;
    // Insert order summary into the order summary element
    orderSummary.innerHTML = orderSummaryHtml;
    // Show order summary
    orderSummary.style.display = "block";
    // Hide order form
    orderForm.style.display = "none";
  }
  
    