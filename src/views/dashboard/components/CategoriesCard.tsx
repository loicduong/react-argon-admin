import { useSelector } from 'react-redux';
import { RootState } from '@/stores';

interface Props {
  cardTitle?: string;
  title?: string
  title2?: string
  title2Desc?: string
  title2Desc2?: string
  title3?: string
  title3Desc?: string
  title3Desc2?: string
  title4?: string
  title4Desc?: string
  titleDesc?: string
  titleDesc2?: string
}

export default function CategoriesCard({
  cardTitle = 'Categories',
  title = 'Devices',
  title2 = 'Tickets',
  title2Desc = "123 closed",
  title2Desc2 = "15 open",
  title3 = "Error logs",
  title3Desc = "1 is active",
  title3Desc2 = "40 closed",
  title4 = "Happy Users",
  title4Desc = "+ 430",
  titleDesc = "250 in stock",
  titleDesc2 = "346+ sold",
}: Props) {
  const { isRTL } = useSelector((state: RootState) => state.theme);

  const categories = [
    { title: title, desc: titleDesc, desc2: titleDesc2, icon: 'ni-mobile-button' },
    { title: title2, desc: title2Desc, desc2: title2Desc2, icon: 'ni-tag' },
    { title: title3, desc: title3Desc, desc2: title3Desc2, icon: 'ni-box-2' },
    { title: title4, desc: title4Desc, desc2: '', icon: 'ni-satisfied' },
  ];

  return (
    <div className="card">
    <div className="p-3 pb-0 card-header">
      <h6 className="mb-0">{ cardTitle }</h6>
    </div>
    <div className="p-3 card-body">
        <ul className={`list-group ${isRTL ? 'pe-0' : 'ps-0'}`}>
          {categories.map((category, index) => (
            <li
              key={category.title}
              className={`${index < categories.length - 1 ? 'mb-2' : ''} border-0 list-group-item d-flex justify-content-between border-radius-lg ${isRTL ? 'pe-0' : 'ps-0'}`}
            >
              <div className="d-flex align-items-center">
                <div
                  className={`text-center shadow icon icon-shape icon-sm bg-gradient-dark ${isRTL ? 'ms-3' : 'me-3'}`}
                >
                  <i className={`ni ${category.icon} text-white opacity-10`}></i>
                </div>
                <div className="d-flex flex-column">
                  <h6 className="mb-1 text-sm text-dark">{category.title}</h6>
                  {
                    index < categories.length - 1 ?
                      <span className="text-xs">
                        {category.desc}
                        {category.desc2 && (
                          <>, <span className="font-weight-bold">{category.desc2}</span></>
                        )}
                      </span> :
                      <span className="text-xs font-weight-bold">{category.desc}</span>
                  }
                </div>
              </div>
              <div className="d-flex">
                <button
                  className="my-auto btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right"
                >
                  <i className="ni ni-bold-right" aria-hidden="true"></i>
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  </div>
  )
}
