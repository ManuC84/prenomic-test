import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function ToggleColorMode({ children }) {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  React.useEffect(() => {
    const isDarkMode =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    setMode(isDarkMode ? "dark" : "light");
  }, []);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          //   ...(mode === "light"
          //     ? {
          //         primary: {
          //           main: "#00bcd4",
          //         },
          //         background: {
          //           default: "#bae8e8",
          //           // default: "#f9f8fc",
          //         },
          //         header: {
          //           default: "#fffffe",
          //         },
          //         content: {
          //           default: "#fffffe",
          //         },
          //         text: {
          //           primary: "#272343",
          //         },
          //       }
          //     : { type: "dark" }),
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
