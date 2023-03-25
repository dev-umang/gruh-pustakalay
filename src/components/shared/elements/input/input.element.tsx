import { ChangeEvent } from "react";
import { ElementChangeEvent } from "../../../../common/types/general.type";
import styles from "./input.module.scss";

interface Props {
  placeholder?: string;
  name?: string;
  label?: string;
  value: string;
  onChange?: (v: ElementChangeEvent) => void;
}

const Input = (props: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChange &&
      props.onChange({ data: e.target.value, name: props.name });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        <input
          placeholder={""}
          className={styles.input}
          type="text"
          value={props.value}
          onChange={handleChange}
          name={props.name}
        />
        <label className={styles.label}>{props.label}</label>
      </div>
    </div>
  );
};

export default Input;
