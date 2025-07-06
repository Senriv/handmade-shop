import { useState } from "react";

export function useFooterSubscription() {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handleJoin = () => {
    if (!email || !email.includes("@")) {
      setError(true);
      return;
    }

    setError(false);
    console.log("Subscribed with:", email);
  };

  const handleResetEmailField = () => {
    setEmail("");
    setError(false);
  };

  return {
    email,
    error,
    handleEmailChange,
    handleJoin,
    handleResetEmailField,
  };
}
