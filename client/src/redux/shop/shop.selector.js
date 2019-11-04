import { createSelector } from 'reselect'


const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectShopIsFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectShopCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectShopCollectionsCategory = collectionUrlParam =>
createSelector(
  [selectShopCollections],
  collections => (collections ? collections[collectionUrlParam] : null)
);

export const selectShopCollectionsIsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)