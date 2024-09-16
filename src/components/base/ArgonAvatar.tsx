interface Props {
  alt?: string
  borderRadius?: string
  circular?: boolean
  className?: string
  img?: string
  shadow?: string
  size?: string
}

export default function ArgonAvatar({
  alt,
  borderRadius,
  circular,
  className,
  img,
  shadow,
  size,
}: Props) {
  const getSize = (size?: string) => size ? `avatar-${size}` : null

  function getClasses(shadow?: string, circular?: boolean, borderRadius?: string) {
    let shadowValue, circularValue, borderRadiusValue;

    if (shadow) {
      shadowValue = shadow === "regular" ? "shadow" : `shadow-${shadow}`;
    } else {
      shadowValue = null;
    }

    circularValue = circular ? "rounded-circle" : null;

    borderRadiusValue = borderRadius ? `border-radius-${borderRadius}` : null;

    return `${shadowValue} ${circularValue} ${borderRadiusValue}`;
  }

  return (
    <div className={`avatar ${getSize(size)} ${className}`}>
      <img src={img} alt={alt} className={getClasses(shadow, circular, borderRadius)} />
    </div>
  )
}
