import { type ToastProviderProps, extendTheme } from "@chakra-ui/react";
import { Tokens } from "../../.mirrorful/theme";

const colors = {
  ...Tokens.colors,
  primary: {
    ...Tokens.colors.primary,
    50: '#fff0df',
    100: '#ffdfb8',
    200: '#ffca88',
    300: '#ffb35c',
    400: '#ff992e',
    500: '#f58220',
    600: '#d9650b',
    700: '#b74e08',
    800: '#8d3b09',
    900: '#662b0a',
    base: '#f58220',
  },
};



export const theme = extendTheme({
  colors,
});

export const toastOptions: ToastProviderProps = {
  defaultOptions: {
    duration: 3000,
    isClosable: true,
    position: "top-right",
  },
};
