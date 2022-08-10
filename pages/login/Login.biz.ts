import { useState } from "react";

export const useLogin = () => {
  const [username, setUsername] = useState<string>("");

  return {
    username,
    setUsername,
  };
};
