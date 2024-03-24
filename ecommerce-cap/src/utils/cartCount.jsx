export default function getCartItemCount() {
    // Retrieve cartItems from local storage
    const cartItemsJSON = localStorage.getItem("cartItems");
  
    // Check if cartItems exists and is an array
    if (cartItemsJSON) {
      try {
        const cartItems = JSON.parse(cartItemsJSON);
        
        // Calculate the total count of items in the cartItems array
        const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  
        return itemCount;
      } catch (error) {
        console.error("Error parsing cartItems JSON:", error);
        return 0; // Return 0 if there's an error parsing the JSON
      }
    } else {
      return 0; // Return 0 if cartItems is not present in local storage
    }
  }
  


  