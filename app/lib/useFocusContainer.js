"use client";

import { useEffect, useState } from "react";

export default function useFocusContainer(
  containerRef,
  focusCallback,
  blurCallback
) {
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (containerRef && containerRef.contains(document.activeElement)) {
      setFocused(true);
    } else {
      setFocused(false);
    }
  }, []);

  const handleFocus = (e) => {
    setFocused(true);
    if (focusCallback) {
      focusCallback(e);
    }
  };

  const handleBlur = (e) => {
    if (
      containerRef &&
      !containerRef.contains(e.relatedTarget) &&
      e.relatedTarget !== containerRef
    ) {
      setFocused(false);
      if (blurCallback) {
        blurCallback(e);
      }
    }
  };

  return [focused, handleFocus, handleBlur];
}
