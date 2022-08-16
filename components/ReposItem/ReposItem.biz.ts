import { theme } from "@chakra-ui/react";

export const useReposItem = () => {
  const languageColorRenderer = (language: string) => {
    switch (language) {
      case "JavaScript":
        return theme.colors.yellow[300];
      case "TypeScript":
        return theme.colors.blue[500];
      case "HTML":
        return theme.colors.red[500];
      case "CSS":
        return theme.colors.purple[700];
      case "Ruby":
        return theme.colors.red[800];
      case "Python":
        return theme.colors.blue[500];
      case "C":
        return theme.colors.gray[500];
      case "Emacs Lisp":
        return theme.colors.pink[500];
      case "CoffeeScript":
        return theme.colors.blue[600];
      case "Go":
        return theme.colors.cyan[600];
    }
  };

  return { languageColorRenderer };
};
