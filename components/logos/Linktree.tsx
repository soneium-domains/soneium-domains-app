import * as React from "react";
import { Box, Center } from "@chakra-ui/react";

interface Props {
  size?: string | number ;
  color?: string;
}
function Linktree({size = '26px', color = 'black'} : Props) {
  return (
    <Center width={size} height={size}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 417 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
       <path
        fill={color}
        fillRule="nonzero"
        d="M171.274 344.942h74.09v167.296h-74.09V344.942zM0 173.468h126.068l-89.622-85.44 49.591-50.985 85.439 87.829V0h74.086v124.872L331 37.243l49.552 50.785-89.58 85.24H417v70.502H290.252l90.183 87.629L331 381.192 208.519 258.11 86.037 381.192l-49.591-49.591 90.218-87.631H0v-70.502z"
      />
      </svg>
    </Center>
  );
}

export default Linktree;
