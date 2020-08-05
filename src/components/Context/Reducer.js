export const initialState = {
	basket: [],
	user: null,
};

export const getBasketTotal = (basket) =>
	basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
	console.log(action);
	console.log(state.basket);
	switch (action.type) {
		case "SET_USER":
			return {
				...state,
				user: action.user,
			};
		case "ADD_TO_BASKET":
			// action.item is what is dispatched
			return { ...state, basket: [...state.basket, action.item] };

		case "REMOVE_FROM_BASKET":
			//  logic for removing from basket

			let newBasket = [...state.basket];

			const index = state.basket.findIndex(
				(basketItem) => basketItem.id === action.id
			);
			console.log(index);
			if (index >= 0) {
				// item exists in basket, remove it
				newBasket.splice(index, 1);
				console.log("new basket", newBasket);
			} else {
				console.warn(
					`Can't remove product(id: ${action.id} as its not in the basket!)`
				);
			}
			return { ...state, basket: newBasket };

		default:
			return state;
	}
};

export default reducer;
