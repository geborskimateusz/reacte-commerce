export const addItemToCart = (cartItems, itemToAdd) => {
    const foundItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id);

    if (foundItem) {
        return cartItems.map(cartItem =>
            cartItem.id === itemToAdd.id ?
                { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }

    return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemToDecrease) => {
    const foundItem = cartItems.find(cartItem => cartItem.id === itemToDecrease.id);

    if (foundItem.quantity === 1) {
        return cartItems.filter(
            cartItem => cartItem.id !== foundItem.id
        )
    }

    return cartItems.map(cartItem =>
        cartItem.id === foundItem.id ?
            { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem)
}

