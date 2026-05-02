import { useEffect, useState } from "react";

const PAID_KEY = "asimoc_paid";

export const usePaywall = () => {
  const [isPaid, setIsPaid] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.get("payment") === "success") {
      sessionStorage.setItem(PAID_KEY, "true");
      window.history.replaceState({}, "", window.location.pathname);
    }

    setIsPaid(sessionStorage.getItem(PAID_KEY) === "true");
  }, []);

  return { isPaid };
};
