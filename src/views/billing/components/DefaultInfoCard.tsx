interface Props {
  classIcon: string
  desc?: string
  iconBg?: string;
  price?: string
  title?: string
}

export default function DefaultInfoCard({
  classIcon,
  desc,
  iconBg = "bg-white",
  price,
  title,
}: Props) {
  return (
    <div className="card">
      <div className="p-3 mx-4 text-center card-header">
        <div className={`${iconBg} icon icon-shape icon-lg bg-gradient-success shadow text-center border-radius-lg`}>
        <i className={`opacity-10 ${classIcon}`} aria-hidden="true"></i>
    </div>
    </div >
    <div className="p-3 pt-0 text-center card-body">
      <h6 className="mb-0 text-center">{title}</h6>
      <span className="text-xs">{desc}</span>
      <hr className="my-3 horizontal dark" />
      <h5 className="mb-0">{price}</h5>
    </div>
  </div >
  )
}
