import { createContext, useReducer } from "react";
const ThemeContexttt = createContext();


const initialData = { clss : "light" , name : "Dark"};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.newValue };
    case "CHANGE_THEME":
      return { ...state, clss: action.newValue };
  
    default:
      return state; 
  }}


export function DataProvider({children}) { 
  const [firstState, dispatch] = useReducer(reducer, initialData);
  const changeName = (newName) => {dispatch({ type: "CHANGE_NAME", newValue: newName })}
  const changeTheme = (newTheme) => {dispatch({ type: "CHANGE_THEME", newValue: newTheme })}
  
  return (
     <ThemeContexttt.Provider value={{ ...firstState, changeName, changeTheme}}>
      {children}
     </ThemeContexttt.Provider>
  );
}

export default ThemeContexttt;