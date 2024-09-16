import Card from '@/components/common/Card';
import GradientLineChart from '@/components/common/GradientLineChart';
import Carousel from './components/Carousel';
import CategoriesCard from './components/CategoriesCard';

export default function Dashboard() {
  const stats = {
    money: {
      title: "Today's Money",
      value: "$53,000",
      percentage: "+55%",
      iconClass: "ni ni-money-coins",
      detail: "since yesterday",
      iconBackground: "bg-gradient-primary",
    },
    users: {
      title: "Today's Users",
      value: "2,300",
      percentage: "+3%",
      iconClass: "ni ni-world",
      iconBackground: "bg-gradient-danger",
      detail: "since last week",
    },
    clients: {
      title: "New Clients",
      value: "+3,462",
      percentage: "-2%",
      iconClass: "ni ni-paper-diploma",
      percentageColor: "text-danger",
      iconBackground: "bg-gradient-success",
      detail: "since last quarter",
    },
    sales: {
      title: "Sales",
      value: "$103,430",
      percentage: "+5%",
      iconClass: "ni ni-cart",
      iconBackground: "bg-gradient-warning",
      detail: "than last month",
    },
  }

  const sales = {
    us: {
      country: "United States",
      sales: 2500,
      value: "$230,900",
      bounce: "29.9%",
      flag: new URL('@/assets/img/icons/flags/US.png', import.meta.url).href,
    },
    germany: {
      country: "Germany",
      sales: "3.900",
      value: "$440,000",
      bounce: "40.22%",
      flag: new URL('@/assets/img/icons/flags/DE.png', import.meta.url).href,
    },
    britain: {
      country: "Great Britain",
      sales: "1.400",
      value: "$190,700",
      bounce: "23.44%",
      flag: new URL('@/assets/img/icons/flags/GB.png', import.meta.url).href,
    },
    brasil: {
      country: "Brasil",
      sales: "562",
      value: "$143,960",
      bounce: "32.14%",
      flag: new URL('@/assets/img/icons/flags/BR.png', import.meta.url).href,
    },
  }

  return (
    <div className="py-4 container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <Card
                title={stats.money.title}
                value={stats.money.value}
                percentage={stats.money.percentage}
                iconClass={stats.money.iconClass}
                iconBackground={stats.money.iconBackground}
                detail={stats.money.detail}
                directionReverse
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <Card
                title={stats.users.title}
                value={stats.users.value}
                percentage={stats.users.percentage}
                iconClass={stats.users.iconClass}
                iconBackground={stats.users.iconBackground}
                detail={stats.users.detail}
                directionReverse
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <Card
                title={stats.clients.title}
                value={stats.clients.value}
                percentage={stats.clients.percentage}
                iconClass={stats.clients.iconClass}
                iconBackground={stats.clients.iconBackground}
                percentageColor={stats.clients.percentageColor}
                detail={stats.clients.detail}
                directionReverse
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <Card
                title={stats.sales.title}
                value={stats.sales.value}
                percentage={stats.sales.percentage}
                iconClass={stats.sales.iconClass}
                iconBackground={stats.sales.iconBackground}
                detail={stats.sales.detail}
                directionReverse
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7 mb-lg">
              <div className="card z-index-2">
                <GradientLineChart />
              </div>
            </div>
            <div className="col-lg-5">
              <Carousel />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-7 mb-lg-0 mb-4">
              <div className="card">
                <div className="p-3 pb-0 card-header">
                  <div className="d-flex justify-content-between">
                    <h6 className="mb-2">Sales by Country</h6>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table align-items-center">
                    <tbody>
                      {
                        Object.entries(sales).map(([key, sale]) => (
                          <tr key={key}>
                            <td className="w-30">
                              <div className="px-2 py-1 d-flex align-items-center">
                                <div>
                                  <img src={sale.flag} alt="Country flag" />
                                </div>
                                <div className="ms-4">
                                  <p className="mb-0 text-xs font-weight-bold">Country:</p>
                                  <h6 className="mb-0 text-sm">{sale.country}</h6>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="text-center">
                                <p className="mb-0 text-xs font-weight-bold">Sales:</p>
                                <h6 className="mb-0 text-sm">{sale.sales}</h6>
                              </div>
                            </td>
                            <td>
                              <div className="text-center">
                                <p className="mb-0 text-xs font-weight-bold">Value:</p>
                                <h6 className="mb-0 text-sm">{sale.value}</h6>
                              </div>
                            </td>
                            <td className="text-sm align-middle">
                              <div className="text-center col">
                                <p className="mb-0 text-xs font-weight-bold">Bounce:</p>
                                <h6 className="mb-0 text-sm">{sale.bounce}</h6>
                              </div>
                            </td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <CategoriesCard />
            </div>
          </div>
        </div >
      </div>
    </div>
  )
}
