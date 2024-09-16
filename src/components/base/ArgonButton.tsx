interface Props {
  variant?: string
  color?: string
  fullWidth?: boolean
  size?: string
  active?: boolean
  children?: React.ReactNode,
  className?: string
}

export default function ArgonButton({
  variant = 'fill',
  color = 'info',
  fullWidth = false,
  size = 'md',
  active = false,
  children,
  className
}: Props) {
  function getClasses(
    variant?: string,
    color?: string,
    size?: string,
    fullWidth?: boolean,
    active?: boolean
  ) {
    let colorValue, sizeValue, fullWidthValue, activeValue;

    if (variant === "gradient") {
      colorValue = `bg-gradient-${color}`;
    } else if (variant === "outline") {
      colorValue = `btn-outline-${color}`;
    } else {
      colorValue = `btn-${color}`;
    }

    sizeValue = size ? `btn-${size}` : null;

    fullWidthValue = fullWidth ? `w-100` : null;

    activeValue = active ? `active` : null;

    return `${colorValue} ${sizeValue} ${fullWidthValue} ${activeValue}`;
  }
  return (
    <button className={`btn mb-0 ${getClasses(variant, color, size, fullWidth, active)} ${className}`}>
      {children}
    </button>
  )
}
