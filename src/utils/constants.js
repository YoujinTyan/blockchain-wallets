export const MAINPAGE_CONSTANTS = {
    TITLE_H1: 'Небольшой блог',
    TITLE_H4: 'Поиск по постам',
    SEARCH_BTN_NAME: 'Найти',
    POSTS_NOT_FOUND: 'Постов по данному запросу не найдено',
};

export const SETTINGS_STORE_CONSTANTS = {
    CARDANO_ON: true,
    CARDANO_OFF: false,

    LIGHT: 'light',
    DARK: 'dark',

    FONT_TAHOMA: 'Impact',
    FONT_CALIBRI: 'Tahoma',
    FONT_SEGOE: 'Calibri',
    FONT_IMPACT: 'Segoe UI',
    FONT_ROBOTO: 'Roboto',

    FONT_SIZE_LARGE: 'large',
    FONT_SIZE_NORMAL: 'normal',
    FONT_SIZE_SMALL: 'small',

    POSTS_COUNT_LITTLE: 'little',
    POSTS_COUNT_MEDIUM: 'medium',
    POSTS_COUNT_MUCH: 'much',
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
                        { name: 'calibri',  option: SETTINGS_STORE_CONSTANTS.FONT_CALIBRI },
                        { name: 'impact',   option: SETTINGS_STORE_CONSTANTS.FONT_IMPACT  },
                        { name: 'tahoma',   option: SETTINGS_STORE_CONSTANTS.FONT_TAHOMA  },
                        { name: 'segoe ui', option: SETTINGS_STORE_CONSTANTS.FONT_SEGOE   },
                        { name: 'roboto',   option: SETTINGS_STORE_CONSTANTS.FONT_ROBOTO  },
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
                        { name: SETTINGS_STORE_CONSTANTS.FONT_SIZE_LARGE,  option: 'Крупный'    },
                        { name: SETTINGS_STORE_CONSTANTS.FONT_SIZE_NORMAL, option: 'Нормальный' },
                        { name: SETTINGS_STORE_CONSTANTS.FONT_SIZE_SMALL,  option: 'Мелкий'     },
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
                        { name: SETTINGS_STORE_CONSTANTS.POSTS_COUNT_LITTLE, option: 5  },
                        { name: SETTINGS_STORE_CONSTANTS.POSTS_COUNT_MEDIUM, option: 10 },
                        { name: SETTINGS_STORE_CONSTANTS.POSTS_COUNT_MUCH,   option: 15 },
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
