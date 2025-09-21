import type { CreateFormFieldProps } from "../../interfaces/interfaces";
import styles from "./CreateFormField.module.css";

export default function CreateFormField({ error, children }: CreateFormFieldProps) {
  return (
    <div className={styles.wrapper}>
      {children}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}