interface Props {
  size?: string
  valid?: boolean
  icon?: string
  iconDir?: string
  type?: string
  name?: string,
  id?: string,
  value?: string,
  placeholder?: string,
  isRequired?: boolean
}

export default function ArgonInput({
  size = 'default',
  valid = false,
  icon,
  iconDir,
  type,
  name,
  id,
  value,
  placeholder,
  isRequired
}: Props) {
  const hasIcon = (icon?: string) => icon ? "input-group" : undefined
  const getIcon = (icon?: string) => icon || undefined

  function getClasses(size?: string, valid?: boolean) {
    let sizeValue, isValidValue;

    sizeValue = size ? `form-control-${size}` : null;

    isValidValue = valid ? `${valid}` : "invalid";

    return `${sizeValue} ${isValidValue}`;
  }

  return (
    <div className="form-group">
      <div className={hasIcon(icon)}>
        {
          iconDir === 'left'
          &&
          <span className="input-group-text">
            <i className={getIcon(icon)}></i>
          </span>
        }
        <input
          type={type}
          className={`form-control ${getClasses(size, valid)}`}
          name={name}
          id={id}
          value={value}
          placeholder={placeholder}
          required={isRequired}
        />
        {
          iconDir === 'right'
          &&
          <span className="input-group-text">
            <i className={getIcon(icon)}></i>
          </span>
        }
      </div>
    </div>
  )
}
