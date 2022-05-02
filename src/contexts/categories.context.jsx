import { createContext, useState,useEffect } from 'react';
// import SHOP_DATA from '../shop-data.js';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  // We fire this useEffect only once to upload our data on the DB
  // It's generally done on the backend but this is makeshift

  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // },[]);
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
     const categoryMap = await getCategoriesAndDocuments();
     setCategoriesMap(categoryMap);
    }
    getCategoriesMap();
  },[]); 
  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
