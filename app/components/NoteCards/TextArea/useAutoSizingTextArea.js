import { useEffect, useState } from "react";

export const useAutosizeTextArea = (textAreaRef, value, initialRows) => {
  const [minH, setMinH] = useState(0);
  useEffect(() => {
    if (textAreaRef) {
      const styles = window.getComputedStyle(textAreaRef);
      const borderWidth =
        parseInt(styles.getPropertyValue("border-top-width")) +
        parseInt(styles.getPropertyValue("border-bottom-width")) +
        2;
      if (minH === 0) {
        setMinH(parseInt(styles.getPropertyValue("height")));
      }

      textAreaRef.style.height = `auto`;
      const { scrollHeight } = textAreaRef;

      const newHeight = Math.max(scrollHeight, minH) + borderWidth;
      textAreaRef.style.height = `${newHeight}px`;
    }
  }, [textAreaRef, value, initialRows]);
};
