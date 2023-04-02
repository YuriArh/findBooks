import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { Reset } from "styled-reset";
import Book from "./book";
import Main from "./main";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
    padding: 0;
}
body {
  margin: 0;
  padding: 0;
//   background: #00416A;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to right, #E4E5E6, #00416A);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to right, #E4E5E6, #00416A); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background: #7694f5;
  
  
  font-family: 'Roboto';
  position: relative;
}
`;

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Routes>
        <Route path="" element={<Main />} />
        <Route path={"/book/:id"} element={<Book />} />
      </Routes>
    </>
  );
}

export default App;
