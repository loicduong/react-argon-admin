import { useSelector } from "react-redux";
import { RootState } from "@/stores";

interface Props {
  className?: string
  contentClass?: string;
  detail?: string
  directionReverse?: boolean;
  iconBackground?: string;
  iconClass: string;
  percentage?: string
  percentageColor?: string
  title: string
  titleColor?: string
  value: string
  valueColor?: string
}

export default function Card({
  className,
  contentClass,
  detail,
  directionReverse,
  iconBackground = "bg-white",
  iconClass,
  percentage,
  percentageColor = 'text-success',
  title,
  titleColor,
  value,
  valueColor,
}: Props) {
  const { isRTL } = useSelector((state: RootState) => state.theme);
  const reverseDirection = "flex-row-reverse justify-content-between"

  return (
    <div className={`mb-4 card ${className}`}>
    <div className="p-3 card-body">
      <div className={`d-flex ${directionReverse ? reverseDirection : ''}`}>
        <div>
            <div
              className={`text-center icon icon-shape ${iconBackground} ${isRTL ? 'border-radius-md' : 'border-radius-2xl'}`}
            >
            <i className={`text-lg opacity-10 ${iconClass}`} aria-hidden={true}></i>
          </div>
        </div>
        <div className={contentClass}>
          <div className="numbers">
            <p className={`mb-0 text-sm text-uppercase font-weight-bold ${titleColor}`}>
              {title}
            </p>
              {
                isRTL ?
                  <h5 className={`font-weight-bolder ${valueColor}`}>
                    {value ? `${value} ` : ''}
                    <span className={`text-sm ${percentageColor}`}>{percentage}</span>
                    <span className="font-weight-light text-sm">{detail}</span>
                  </h5> :
                  <>
                    <h5 className={`font-weight-bolder ${valueColor}`}>{value}</h5>
                    <span className={`text-sm ${percentageColor}`}>{percentage}</span>
                    {` ${detail}`}
                  </>
              }
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
