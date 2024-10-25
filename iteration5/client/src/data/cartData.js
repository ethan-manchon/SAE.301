const CartData = {
    items: [],

    find(id) {
        return this.items.find(item => item.id === id);
    },

   
    // Add item to cart
    new(product) {
        const existingProduct = this.find(product.id);
        if (existingProduct) {
            existingProduct.quantity += product.quantity;
        } else {
            this.items.push({ ...product, quantity: product.quantity || 1 });
        }
    },
    // Add item to cart by id
    add(id) {
        const product = CartData.find(id);
        if (product) {
            product.quantity += 1;
        }
        return CartData.items; // Add this line to return the current items
    },

    // Remove item from cart by id
    remove(id) {
        const product = CartData.find(id);
        if (product) {
            if (product.quantity > 1) {
                product.quantity -= 1;
            } else {
                CartData.delete(id);
            }
        }
        return CartData.items; // Add this line to return the current items
    },

    // Delete item from cart by id
    delete(id) {
        const index = CartData.items.findIndex(item => item.id === id);
        if (index > -1) {
            CartData.items.splice(index, 1);
        }
        return CartData.items; // Add this line to return the current items
    },

    // Calculate total price of items in cart
    total() {
        return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },

    // Clear cart
    clear() {
        this.items = [];
    }
};

export { CartData };
