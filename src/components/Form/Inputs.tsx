import styles from "../../assets/styles/Inputs.module.css"

interface InputType {
  type: string,
  name: string,
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined,
  placeholder: string | undefined,
  value: string | undefined,
  label: string | undefined,
}

const Inputs = ({ type, name, onChange, placeholder, value, label }: InputType) => {
  return (
    <div className={styles.input_custom}>
      <label>
        {label}
        <input
          type={type}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
        />
      </label>
    </div >
  )
}

export default Inputs