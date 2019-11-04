import {getItemCount} from '../../../../redux/ui/cart/cart.utils';
describe('cart.utils', () => {

    it('should return quantity', () => {

        //quantity property only, rest of props skipped
        let cartItems = [
            {quantity: 1},
            {quantity: 2}
        ]

        const count = getItemCount(cartItems);
        expect(count).toBe(3);
    })
})