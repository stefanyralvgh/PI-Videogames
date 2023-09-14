// import { ErrorContainer } from "./ErrorStyles";

// export default function Error () {
//     return(
//         <ErrorContainer>
//             <img width="100%" height="90%" src="./Images/ERROR.GIF" alt="Error 404" />
//             <h1>ERROR 404: Page not found</h1>
            
//         </ErrorContainer>
//     )
// }

import { ErrorContainer, ErrorText } from "./ErrorStyles";

export default function Error() {
  return (
    <ErrorContainer>
      <ErrorText>ERROR 404: Page not found</ErrorText>
    </ErrorContainer>
  );
}
