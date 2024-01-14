import Bookmark from "./svg/Bookmark";
import Clipboard from "./svg/Clipboard";
import Close from "./svg/Close";
import Copy from "./svg/Copy";
import Floppy from "./svg/Floppy";
import List from "./svg/List";
import Menu from "./svg/Menu";
import Palette from "./svg/Palette";
import Trash from "./svg/Trash";

export default function Icon({ icon, size }) {
  switch (icon) {
    case "bookmark":
      return <Bookmark />;
    case "clipboard":
      return <Clipboard />;
    case "close":
      return <Close size={size} />;
    case "copy":
      return <Copy />;
    case "list":
      return <List />;
    case "menu":
      return <Menu size={size} />;
    case "palette":
      return <Palette />;
    case "save":
      return <Floppy size={size} />;
    case "trash":
      return <Trash size={size} />;
    default:
      return <></>;
  }
}
