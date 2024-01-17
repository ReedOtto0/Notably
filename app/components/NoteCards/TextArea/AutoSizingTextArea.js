"use client";

import { useAutosizeTextArea } from "./useAutoSizingTextArea";
import { useRef } from "react";

export function AutoSizingTextarea({
  placeholder = "",
  value = "",
  onChange,
  styles,
  initialRows,
}) {
  const textAreaRef = useRef(null);
  useAutosizeTextArea(textAreaRef.current, value, initialRows);

  return (
    <textarea
      ref={textAreaRef}
      className={styles}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      rows={initialRows}
    />
  );
}
