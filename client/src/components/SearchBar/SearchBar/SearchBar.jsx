// import React, { useState } from "react";
// import { SearchBtn, SearchContainer } from "./SearchBarStyles";
// import { BiSearch } from "react-icons/bi";


// export default function SearchBar(props) {

//   const [inputContent, setInputContent] = useState("");

// //   function handleSearch(event) {
// //     let { value } = event.target;
// //     setInputContent(value);
// //   }

//   const handleInputKeyDown = (event) => {
//     if (event.keyCode === 13) {
//       props.onSearch(inputContent);
//       setInputContent("");
//     }
//   };

//   const handleSearchClick = () => {
//     props.onSearch(inputContent);
//     setInputContent("");
//   };
  
  
 

//   return (
//     <SearchContainer>
//       <input
//         type="text"
//         placeholder="Search games"
//         onChange={props.onSearch}
//         value={inputContent}
//         onKeyDown={handleInputKeyDown}
//       ></input>

//       <SearchBtn 
//       onClick={handleSearchClick}
//       >
//         <BiSearch />
//       </SearchBtn>
//     </SearchContainer>
//   );
// }
