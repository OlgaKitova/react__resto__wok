const initialState = {
  menu: [],
  loading: true,
  items: []
}
 const reducer = (state = initialState, action) => {

  switch(action.type) {
    case 'MENU_LOADED':
      return {
        ...state,
        menu: action.payload,
        loading: false,
      };
      case 'MENU_REQUESTED':
      return {
        ...state,
        loading: true,
      };
      case 'ITEM_TO_CART':
        const id = action.payload;
        const item = state.menu.find(item => item.id === id) 
        const newItem = {
          title: item.title,
          price: item.price,
          id: item.id,
          url: item.url,
        }
        return {
          ...state,
          items: [
            ...state.items,
            newItem,
          ]
        }
        case 'DELETE_TO_CART':
        const ind = action.payload;
        const itemIndex = state.items.findIndex(item => item.id === ind);
        const beforeStateItems = state.items.slice(0, itemIndex);
        const afterStateItems = state.items.slice(itemIndex+1);
        return {
          ...state,
          items: [...beforeStateItems, ...afterStateItems],
        }
      default: 
      return state;
  }
}
export default reducer;