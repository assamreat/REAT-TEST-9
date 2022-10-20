import ReceptionistPanel from '../../components/official/receptionist/ReceptionistPanel';
import AppealShow from '../../components/official/receptionist/AppealShow';
import AppealForward from '../../components/official/receptionist/AppealForward';

const routes = [
    { path: '/official/receptionist', exact: true, name: 'Receptionist' },

    {
        path: '/official/receptionist/panel',
        exact: true,
        name: 'ReceptionistPanel',
        component: ReceptionistPanel,
    },

    {
        path: '/official/receptionist/appeals',
        exact: true,
        name: 'ReceptionistPanel',
        component: ReceptionistPanel,
    },
    {
        path: '/official/receptionist/appeals/:id',
        exact: true,
        name: 'AppealShow',
        component: AppealShow,
    },
    {
        path: '/official/receptionist/appeals/:id/forward',
        exact: true,
        name: 'AppealForward',
        component: AppealForward,
    },
];

export default routes;
