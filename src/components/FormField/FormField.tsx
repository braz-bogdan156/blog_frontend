import type { FormFieldProps } from "../../interfaces/interfaces";
import styles from "./FormField.module.css";

export default function FormField({ label, error, children }: FormFieldProps) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>
      {children}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}