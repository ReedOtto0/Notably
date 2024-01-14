export function saveToStorage(notes) {
  if (typeof window !== "undefined" && window.localStorage) {
    console.log(JSON.stringify(notes));
    console.log("Saved notes to local storage.");
    localStorage.setItem("notably_notes", JSON.stringify(notes));
  }
}

export function loadFromStorage() {
  if (
    typeof window !== "undefined" &&
    window.localStorage &&
    localStorage.getItem("notably_notes")
  ) {
    console.log("Success! Notes loaded from local storage.");
    return JSON.parse(localStorage.getItem("notably_notes"));
  } else if (typeof window !== "undefined" && window.localStorage) {
    console.log("No notes found in local storage.");
    return [];
  } else {
    console.log("Local storage unavailable...");
    return [];
  }
}
