import { ChangeEvent, useEffect, useRef, useState } from "react";
import { ElementChangeEvent } from "../../../../common/types/general.type";
import styles from "./dropdown.module.scss";

interface Props {
  placeholder?: string;
  name?: string;
  label?: string;
  value: string;
  onChange?: (v: ElementChangeEvent) => void;
  options: string[];
}

const Dropdown = (props: Props) => {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) setShow(false);
    };
    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, []);

  const onOptionSelect = (op: string) => {
    setShow(false);
    props.onChange && props.onChange({ data: op, name: props.name });
  };

  return (
    <div ref={ref} className={styles.dropWrapper}>
      <div className={styles.inputWrapper}>
        <button
          onClick={() => setShow(!show)}
          placeholder={""}
          className={styles.dropValue}
          value={props.value}
          name={props.name}
        >
          {props.value}
        </button>
        <label className={styles.label}>{props.label}</label>
      </div>
      <div className={`${styles.dropOptions} ${show ? styles.show : ""}`}>
        {props.options.map((op) => {
          return (
            <button
              className={styles.optionBtn}
              onClick={() => onOptionSelect(op)}
              key={op}
            >
              {op}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
