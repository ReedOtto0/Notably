import Icon from "../icons/Icon";

export default function CloseButton({ styles }) {
  return (
    <button className={styles} type="submit">
      <Icon icon="close" size="" />
    </button>
  );
}
