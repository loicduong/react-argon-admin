interface Props {
  checked?: boolean;
  name?: string;
  id?: string;
  children?: React.ReactNode;
}

export default function ArgonCheckbox({ checked, name, id, children }: Props) {
  return (
    <div className="form-check">
      <input className="form-check-input" type="checkbox" name={name} id={id} checked={checked} />
      <label htmlFor="id" className="custom-control-label">
        {children}
      </label>
    </div >
  )
}
