export const initialState = {
  wishlist: [],
  user: null,
};
function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist, action.item],
      };
    case "REMOVE_FROM_WISHLIST":
      let tempWishlist = [...state.wishlist];
      let wishlistFiltered = tempWishlist.filter((w) => w.id !== action.id);
      return {
        ...state,
        wishlist: wishlistFiltered,
      };
    case "UPDATE_USER":
      return {
        ...state,
        user: action.item,
      };
    case "CLEAR_WISHLIST":
      return {
        ...state,
        wishlist: action.item,
      };
    default:
      return state;
  }
}
export default reducer;
