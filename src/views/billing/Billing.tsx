import MasterCard from './components/MasterCard'
import InvoiceCard from './components/InvoiceCard'
import BillingCard from './components/BillingCard'
import TransactionCard from './components/TransactionCard'
import DefaultInfoCard from './components/DefaultInfoCard'
import PaymentCard from './components/PaymentCard'

export default function Billing() {
  const salary = {
    classIcon: "text-white fas fa-landmark",
    title: "Salary",
    desc: "Belong Interactive",
    price: "+$2000",
  }

  const paypal = {
    classIcon: "text-white fab fa-paypal",
    title: "Paypal",
    desc: "Freelance Payment",
    price: "$455.00",
  }

  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col-lg-8">
        <div className="row mt-4">
          <div className="col-xl-6 mb-xl-0 mb-4">
            <MasterCard />
          </div>
          <div className="col-xl-6">
            <div className="row">
              <div className="col-md-6">
                <DefaultInfoCard
                  classIcon={salary.classIcon}
                  title={salary.title}
                  desc={salary.desc}
                  price={salary.price}
                />
              </div>
              <div className="col-md-6">
                <DefaultInfoCard
                  classIcon={paypal.classIcon}
                  title={paypal.title}
                  desc={paypal.desc}
                  price={paypal.price}
                />
              </div>
            </div>
          </div>
          <div className="col-md-12 mb-4">
            <PaymentCard />
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <InvoiceCard className="mt-4" />
      </div>
    </div>
    <div className="row">
      <div className="col-md-7">
        <BillingCard />
      </div>
      <div className="col-md-5">
        <TransactionCard />
      </div>
    </div>
  </div>
  )
}
