// assets
import { IconMoneybag, IconPalette, IconShadow, IconWindmill,IconCreditCard,IconCalendar,IconReport } from '@tabler/icons';

// constant
const icons = {
    IconCreditCard,
    IconPalette,
    IconShadow,
    IconWindmill,
    IconCalendar,
    IconReport,
    IconMoneybag
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
    id: 'utilities',
    title: 'Overview',
    type: 'group',
    children: [
        {
            id: 'util-typography',
            title: 'Campaigns',
            type: 'collapse',
            url: '/utils/util-typography',
            icon: icons.IconCreditCard,
            children: [
                {
                    id: 'tabler-icons',
                    title: ' click-through rates',
                    type: 'item',
                    url: '/icons/tabler-icons',
                    breadcrumbs: false
                },
                {
                    id: 'material-icons',
                    title: 'conversion rates',
                    type: 'item',
                    url: '/icons/material-icons',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'util-color',
            title: 'Audiences',
            type: 'item',
            url: '/utils/util-color',
            icon: icons.IconCalendar,
            breadcrumbs: false
        },
        {
            id: 'util-shadow',
            title: 'Funnels',
            type: 'item',
            url: '/utils/util-shadow',
            icon: icons.IconReport,
            breadcrumbs: false
        },
        {
            id: 'icons',
            title: 'Integrations',
            type: 'collapse',
            icon: icons.IconMoneybag,
            children: [
                {
                    id: 'tabler-icons',
                    title: 'Tabler Icons',
                    type: 'item',
                    url: '/icons/tabler-icons',
                    breadcrumbs: false
                },
                {
                    id: 'material-icons',
                    title: 'Material Icons',
                    type: 'item',
                    url: '/icons/material-icons',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default utilities;
