export default function RocketCard() {
  return (
    <div className="card h-100 p-3">
      <div
        className="overflow-hidden position-relative border-radius-lg bg-cover h-100"
        style={{
          backgroundImage: 'url(' + new URL('@/assets/img/ivancik.jpg', import.meta.url).href + ')'
        }}
      >
        <span className="mask bg-gradient-dark"></span>
        <div className="card-body position-relative z-index-1 p-3 h-100">
          <div className="d-flex flex-column h-100">
            <h5 className="text-white font-weight-bolder mb-4 pt-2">العمل مع الصواريخ</h5>
          <p
            className="text-white mb-5"
          >
            تكوين الثروة هو لعبة تطوري حديثة ذات حصيلة إيجابية. الأمر كله يتعلق بمن يغتنم الفرصة أولاً هذه بطاقة بسيطة.
          </p>
          <a
            className="text-white font-weight-bold ps-1 mb-0 icon-move-left mt-auto"
            href="#"
            onClick={(e) => e.preventDefault()}
          >
            اقرأ المستندات
            <i className="fas fa-arrow-left text-sm ms-1 me-1" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  </div >
  )
}
