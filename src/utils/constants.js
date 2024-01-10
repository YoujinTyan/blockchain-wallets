export const MAINPAGE_CONSTANTS = {
    TITLE_H1: 'Небольшой блог',
    TITLE_H4: 'Поиск по постам',
    SEARCH_BTN_NAME: 'Найти',
    POSTS_NOT_FOUND: 'Постов по данному запросу не найдено',
};

export const SETTINGSPAGE_CONSTANTS = {
    PAGE_TITLE: 'Настройки',
    settings_data: [
        {
            title: 'Вкл/Выкл Cardano',
            children: {
                component: 'Toggle',
                childrenParams: {
                    onChange: {},
                    defaultChecked: ''
                },  
            }, 
        },
        {
            title: 'Тёмная тема', 
            children: {
                component: 'Toggle',
                childrenParams: {
                    onChange: {},
                    defaultChecked: ''
                },
            }, 
        },
        {
            title: 'Шрифт', 
            children: {
                component: 'Options',
                childrenParams: {
                    name: 'font-name-select',
                    options: [
                        { name: 'calibri',  option: 'Calibri'  },
                        { name: 'tahoma',   option: 'Tahoma'   },
                        { name: 'segoe ui', option: 'Segoe UI' },
                        { name: 'roboto',   option: 'Roboto'   },
                    ]
                },
            }, 
        },
        {
            title: 'Размер шрифта', 
            children: {
                component: 'Options',
                childrenParams: {
                    name: 'font-size-select',
                    options: [
                        { name: 'large',    option: 'Крупный'    },
                        { name: 'normal',   option: 'Нормальный' },
                        { name: 'small',    option: 'Мелкий'     },
                    ],
                },
            }, 
        },
        {
            title: 'Кол-во постов на странице', 
            children: {
                component: 'Options',
                childrenParams: {
                    name: 'count-posts-select',
                    options: [
                        { name: 'little', option: 5  },
                        { name: 'medium', option: 10 },
                        { name: 'much',   option: 15 },
                    ],
                },
            }, 
        },
    ],
};

export const PAGE404_CONSTANTS = {
    TITLE: 'Ошибка 404',
    SUBTITLE: 'Страница не найдена',
    TEXT: 'Вернитесь на одну из страниц сайта или перейдите на',
    LABEL: ' главную',
};

export const HEADER_CONSTANTS = {
    LOGO: 'MBWallets',
    MAIN_PAGE_RU: 'Главная',
    MAIN_PAGE_EN: 'main',

    WALLETS_PAGE_RU: 'Кошельки',
    WALLETS_PAGE_EN: 'wallets',
    
    SETTINGS_PAGE_RU: 'Настройки',
    SETTINGS_PAGE_EN: 'settings',
};
