// src/pages/ItemPage.js
import React from 'react';
import ItemList from '../components/ItemList';
import AddItem from '../components/AddItem';

const ItemPage = () => {
  return (
    <div>
      <ItemList />
      <AddItem />
    </div>
  );
};

export default ItemPage;
