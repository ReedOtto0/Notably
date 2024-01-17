import { useEffect, useState } from "react";

export const useAutosizeTextArea = (textAreaRef, value, initialRows) => {
  const [minH, setMinH] = useState(null);
  useEffect(() => {
    if (textAreaRef) {
      const styles = window.getComputedStyle(textAreaRef);
      const borderWidth =
        parseInt(styles.getPropertyValue("border-top-width")) +
        parseInt(styles.getPropertyValue("border-bottom-width"));
      if (!minH) {
        setMinH(parseInt(styles.getPropertyValue("height")));
      }

      textAreaRef.style.overflow = `auto`;
      textAreaRef.style.height = `auto`;
      const { scrollHeight } = textAreaRef;

      const newHeight = Math.max(scrollHeight, minH);
      textAreaRef.style.overflow = `none`;
      textAreaRef.style.height = `${newHeight}px`;
    }
  }, [textAreaRef, value, initialRows]);
};
