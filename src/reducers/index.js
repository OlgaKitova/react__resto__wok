const initialState = {
  menu: [],
  loading: true,
  items: [],
  totalPrice: 0,
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
        let newItem = {};

        if(state.items.findIndex(it => it.id === item.id) !== -1) {
          state.items.forEach(it => {
            if(it.id === item.id) {
              newItem = {
                ...it,
              countPiece: it.countPiece + 1,
              totalCount: it.totalCount + it.price,
              }
              
            }
          });
          return {
          ...state,
          items: [
            ...state.items.slice(0, state.items.findIndex(it => it.id === item.id)),
            newItem,
           ...state.items.slice(state.items.findIndex(it => it.id === item.id) + 1)
          ],
          totalPrice: state.totalPrice + newItem.price,
        }
        } else {
          newItem = {
          title: item.title,
          price: item.price,
          id: item.id,
          url: item.url,
          countPiece: 1,
          totalCount: item.price,
        }
        return {
          ...state,
          items: [
            ...state.items,
            newItem,
          ],
           totalPrice: state.totalPrice + newItem.price
        }
        }
        
        case 'DELETE_TO_CART':
        const ind = action.payload;
        const itemIndex = state.items.findIndex(item => item.id === ind);
        const itemObj = state.items.find(item => item.id === ind)
        const beforeStateItems = state.items.slice(0, itemIndex);
        const afterStateItems = state.items.slice(itemIndex+1);
        const priceCount = itemObj.totalCount;
        return {
          ...state,
          items: [...beforeStateItems, ...afterStateItems],
          totalPrice: state.totalPrice - priceCount,
        }
      default: 
      return state;
  }
}
export default reducer;