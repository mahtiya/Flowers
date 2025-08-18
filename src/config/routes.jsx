
import Comments from '../modules/Comments/Comments'
import Contacts from '../modules/Contacts/Contacts'
import DeliveryPay from '../modules/DeliveryPay/DeliveryPay'
import Discount from '../modules/Discount/Discount'
import Forums from '../modules/Forums/Forums'
import Home from '../modules/Home/Home'
import Information from '../modules/Information/Information'
import News from '../modules/News/News'
import SinglePage from '../modules/SinglePage/SinglePage'
import ViewAllPage from '../modules/ViewAllPage.jsx/ViewAllPage'
import Notes from './../modules/Notes/Notes'

export const routes = () => {
    return [
        {
            id: 1,
            path: '/',
            element: <Home />
        },
        {
            id: 2,
            path: '/view-all',
            element: <ViewAllPage />
        }, {
            id: 3,
            path: '/comments',
            element: <Comments />
        }, {
            id: 4,
            path: '/contacts',
            element: <Contacts />
        }, {
            id: 5,
            path: '/delivery-pay',
            element: <DeliveryPay />
        }, {
            id: 6,
            path: '/discount',
            element: <Discount />
        },

        {
            id: 7,
            path: '/news',
            element: <News />
        }, {
            id: 8,
            path: '/info',
            element: <Information />
        }, {
            id: 9,
            path: '/forums',
            element: <Forums />
        }, {
            id: 10,
            path: '/notes',
            element: <Notes />
        }, {
            id: 11,
            path: '/product/:id',
            element: <SinglePage />
        }
    ]
}