import ActiveUsersChart from "./components/ActiveUsersChart"
import Card from "@/components/common/Card"
import DeveloperCard from "./components/DeveloperCard"
import GradientLineChart from "@/components/common/GradientLineChart"
import OrdersCard from "./components/OrdersCard"
import ProjectCard from "./components/ProjectCard"
import RocketCard from "./components/RocketCard"
import { useDispatch } from "react-redux"
import { setRtl } from "@/stores/modules/theme"

export default function Rtl() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setRtl(true))
    document.querySelector("html")?.setAttribute("lang", "ar");
    document.querySelector("html")?.setAttribute("dir", "rtl");
    document.querySelector("#root")?.classList.add("rtl");

    return () => {
      dispatch(setRtl(false))
      document.querySelector("html")?.removeAttribute("lang");
      document.querySelector("html")?.removeAttribute("dir");
      document.querySelector("#root")?.classList.remove("rtl");
    }
  }, [])

  return (
    <div className="py-4 container-fluid">
      <div className="row">
        <div className="col-lg-3 col-sm-6 mb-lg-0">
          <Card
            className="p-0 bg-white"
            title="أموال اليوم"
            value="$53,000"
            iconClass="text-white ni ni-money-coins"
            titleColor="opacity-7 text-dark"
            iconBackground="bg-gradient-success"
            valueColor="text-dark"
            percentage="55%+"
            percentageColor="text-success"
            directionReverse
          />
        </div>
        <div className="col-lg-3 col-sm-6 mb-lg-0 mb-4">
          <Card
            className="p-0 bg-white"
            title="مستخدمو اليوم"
            value="2,300"
            iconClass="text-white ni ni-world"
            titleColor="opacity-7 text-dark"
            iconBackground="bg-gradient-success"
            valueColor="text-dark"
            percentage="+33%"
            percentageColor="text-success"
            directionReverse
          />
        </div>
        <div className="col-lg-3 col-sm-6 mb-lg-0 mb-4">
          <Card
            className="p-0 bg-white"
            title="عملاء جدد"
            value=" +3,462"
            iconClass="text-white ni ni-paper-diploma"
            titleColor="opacity-7 text-dark"
            iconBackground="bg-gradient-success"
            valueColor="text-dark"
            percentage="-2%"
            percentageColor="text-danger"
            directionReverse
          />
        </div>
        <div className="col-lg-3 col-sm-6 mb-lg-0 mb-4">
          <Card
            className="p-0 bg-white"
            title="مبيعات"
            value="$103,430"
            iconClass="text-white ni ni-cart"
            titleColor="opacity-7 text-dark"
            iconBackground="bg-gradient-success"
            valueColor="text-dark"
            percentage="+5%"
            percentageColor="text-success"
            directionReverse
          />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-7 mb-lg-0 mb-4">
          <DeveloperCard />
        </div>
        <div className="col-lg-5">
          <RocketCard />
        </div>
      </div>
      <div className="mt-4 row">
        <div className="col-lg-5 mb-lg-0 mb-4">
          <ActiveUsersChart />
        </div>
        <div className="col-lg-7">
          <GradientLineChart
            title="نظرة عامة على المبيعات"
            detail1="4% أكثر"
            detail2="في عام 2021"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-8 col-md-6 mb-md-0 mb-4">
          <ProjectCard
            action="عمل"
            anotherAction="عمل اخر"
            data1="الإصدار"
            data2="أضف مسار التقدم إلى التطبيق الداخلي"
            data3="إصلاح أخطاء النظام الأساسي"
            data4="إطلاق تطبيق الهاتف المحمول الخاص بنا"
            data5="أضف صفحة التسعير الجديدة"
            data6="إعادة تصميم متجر جديد على الإنترنت"
            desc="هذا الشهر"
            descBold="انتهى30 "
            empty="غير مضبوط"
            somethingElse="شی اخر هنا"
            th1="المشروع"
            th2="أعضاء"
            th3="ميزانية"
            th4="إكمال"
            title="المشاريع"
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <OrdersCard
            title="نظرة عامة على الطلبات"
            text="هذا الشهر"
            order="$2400, تغييرات في التصميم"
            newOrder="طلب جديد #1832412"
            payment="مدفوعات الخادم لشهر أبريل"
            newCard="تمت إضافة بطاقة جديدة للطلب #4395133"
            unlockPackages="فتح الحزم من أجل التطوير"
            newOrder2="طلب جديد #9583120"
          />
        </div>
      </div>
    </div>
  )
}
