export default function getCartTotalPrice() {
    // Retrieve cartItems from local storage
    const cartItemsJSON = localStorage.getItem("cartItems");
  
    // Check if cartItems exists and is an array
    if (cartItemsJSON) {
      try {
        const cartItems = JSON.parse(cartItemsJSON);
        
        // Calculate the total price of items in cart
        const totalCount = cartItems.reduce((total, item) => total + item.price, 0);
  
        return totalCount;
      } catch (error) {
        console.error("Error parsing cartItems JSON:", error);
        return 0; // Return 0 if there's an error parsing the JSON
      }
    } else {
      return 0; // Return 0 if cartItems is not present in local storage
    }
  }