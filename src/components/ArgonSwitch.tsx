interface Props {
  name?: string,
  id?: string,
  checked?: boolean
  inputClass?: string
  labelClass?: string
  children?: React.ReactNode
}

export default function ArgonSwitch({ name, id, checked, inputClass, labelClass, children }: Props) {
  return (
    <div className="form-check form-switch">
      <input
        className={`form-check-input ${inputClass}`}
        type="checkbox"
        name={name}
        id={id}
        checked={checked}
      />
      <label className={`form-check-label ${labelClass}`} htmlFor={id}>
        {children}
      </label>
    </div>
  )
}
