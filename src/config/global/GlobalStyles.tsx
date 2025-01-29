import { GlobalStyles } from "@mui/material";
import { CSSObject } from "@emotion/react";

const styles: Record<string, CSSObject> = {
  "*": {
    margin: 0,
    padding: 0,
  },
};

export function GlobalStyle() {
  return <GlobalStyles styles={styles} />;
}
