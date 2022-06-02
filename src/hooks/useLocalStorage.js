import React from "react";

function useLocalStorage(itemName, initialValue){
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    
    //Estado actividades
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          //localStorage
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          }else{
            parsedItem = JSON.parse(localStorageItem);
          }
          setItem(parsedItem);
          setLoading(false);
        } catch (err) {
          setError(err);
        }
      }, 1000)
    });
  
    //guardar inf en storage
    const saveItem = (newItem) =>{
      try {
        const stringItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringItem);
        setItem(newItem);
      } catch (err) {
        setError(err)
      }
    }
  
    return {
      item,
      saveItem,
      loading,
      error
    };
}

export {useLocalStorage}