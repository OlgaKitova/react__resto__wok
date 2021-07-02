
export const menuLoaded = (newMenu) => {
  return {
    type: 'MENU_LOADED',
    payload: newMenu
  }
}
export const menuRequested = () => {
  return {
    type: 'MENU_REQUESTED',
  }
}
export const addedToCart = (id) => {
  return {
    type: 'ITEM_TO_CART',
    payload: id
  }
}