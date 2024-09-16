import { useSelector } from "react-redux";
import { RootState } from "@/stores";
import ArgonAvatar from "@/components/base/ArgonAvatar";

interface Props {
  cardHolderText?: string
  name?: string
  cardExpirationText?: string
}

export default function MasterCard({
  cardHolderText = "Card Holder",
  name = "Jack Peterson",
  cardExpirationText = "Expires"
}: Props) {
  const { isRTL } = useSelector((state: RootState) => state.theme)

  return (
    <div className="card bg-transparent shadow-xl">
      <div
        className="overflow-hidden position-relative border-radius-xl"
        style={{backgroundImage: 'url(' + new URL('@/assets/img/card-visa.jpg', import.meta.url).href + ')'}}
      >
        <span className="mask bg-gradient-dark"></span>
        <div className="card-body position-relative z-index-1 p-3">
          <i className="fas fa-wifi text-white p-2" aria-hidden="true"></i>
          <h5
            className="text-white mt-4 mb-5 pb-2"
          >
            4562&nbsp;&nbsp;&nbsp;1122&nbsp;&nbsp;&nbsp;4594&nbsp;&nbsp;&nbsp;7852
          </h5>
          <div className="d-flex">
            <div className="d-flex">
              <div className={isRTL ? 'ms-4' : 'me-4'}>
                <p className="text-white text-sm opacity-8 mb-0">{ cardHolderText }</p>
                <h6 className="text-white mb-0">{ name }</h6>
              </div>
              <div>
                <p className="text-white text-sm opacity-8 mb-0">{cardExpirationText }</p>
                <h6 className="text-white mb-0">11/22</h6>
            </div>
            </div>
            <div
              className={`w-20 d-flex align-items-end justify-content-end ${isRTL ? 'me-auto' : 'ms-auto'}`}
            >
              <ArgonAvatar
                className="w-60 mt-2"
                img={new URL('@/assets/img/logos/mastercard.png', import.meta.url).href}
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
