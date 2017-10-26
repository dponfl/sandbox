angular
    .module('app.translate.module')
    .config(translateConfig);

translateConfig.$inject = ['$translateProvider'];

/* @ngInject */
function translateConfig ($translateProvider) {
  $translateProvider.translations('en', {

    // Header
    'HEADER_OFFICE_PHONE': 'Office',
    'HEADER_MOBILE_PHONE': 'Mobile',
    'HEADER_SKYPE_PHONE': 'Skype',
    'HEADER_SEND_MESSAGE_1': 'Send',
    'HEADER_SEND_MESSAGE_2': 'message',

    // Admin
    'HEADER_ADMIN_LOGIN': 'Login',
    'HEADER_ADMIN_ACCOUNT': 'Account',
    'BTN_ADMIN_LOGOUT': 'Logout',
    'BTN_ADMIN_CREATE': 'Create',
    'BTN_ADMIN_UPDATE': 'Update record',
    'BTN_ADMIN_DECLINE': 'Cancel update',
    'BTN_ADMIN_LOGIN': 'Login',
    'BTN_ADMIN_CLEAR': 'Clear',
    'HEADER_PANEL_EDIT': 'Edit object #',

    // Footer
    'FOOTER_ABOUT_COMPANY_TITLE': 'About us',
    'FOOTER_ABOUT_COMPANY_TEXT': '[En]Лорем ипсум долор сит амет, не дицит легере еос, ' +
    'еос еу волутпат цомпрехенсам, не хас долор омиттам! При утамур сингулис адиписцинг ' +
    'не, не алии ехерци дуо. Тота игнота алияуандо ан яуо, хабео яуидам хендрерит те яуо.',
    'FOOTER_NAVIGATION': 'Navigation',
    'FOOTER_SUBSCRIBE_TITLE': 'Subscribe to our news',
    'FOOTER_SUBSCRIBE_YOUTUBE': 'YouTube',
    'FOOTER_SUBSCRIBE_FACEBOOK': 'Facebook',
    'FOOTER_SUBSCRIBE_TWEETER': 'Tweeter',
    'FOOTER_SUBSCRIBE_GOOGLEPLUS': 'Google Plus',
    'FOOTER_DEVELOPER': 'Developed by',

    // Main menu items
    'NAV_HOME': 'Home',
    'NAV_CONDITIONS': 'Booking terms',
    'NAV_CARS': 'Cars',
    'NAV_DISCOUNT': 'Discount card',
    'NAV_SALES': 'Sales',
    'NAV_QA': 'Q&A',
    'NAV_SERVICES': 'Services',
    'NAV_CONTACTS': 'Contacts',
    'NAV_REQ_BUTTON': 'Make request',

    // Filter form items
    'PANEL_HEADER': 'Choose',
    'LBL_DEAL': 'Deal type',
    'LBL_OBJ': 'Object type',
    'LBL_SHOW': 'Show object',
    'LBL_HOME': 'Place at home page',
    'LBL_CITY': 'City',
    'LBL_ROOM': 'Number of rooms',
    'LBL_OBJ_NUM': 'Object number',
    'LBL_YOUTUBE': 'YouTube',
    'OBJ_NUM_PLACEHOLDER': 'Object #',
    'OBJ_YOUTUBE_PLACEHOLDER': 'YouTube',
    'BTN_FIND': 'Find',
    'BTN_CLR': 'Clear',
    'AV_REQ': 'reqEn',

    // Callback or request forms
    'LBL_FIELD_OBJ': 'Object',
    'LBL_FIELD_DATE_START': 'Date start',
    'LBL_FIELD_DATE_END': 'Date end',
    'LBL_FIELD_NAME': 'Your name',
    'LBL_FIELD_EMAIL': 'Email',
    'LBL_FIELD_PHONE': 'Phone',
    'LBL_FIELD_SKYPE': 'Skype',
    'LBL_FIELD_WHATSAPP': 'WhatsApp',
    'LBL_FIELD_TELEGRAM': 'Telegram',
    'LBL_FIELD_VIBER': 'Viber',
    'LBL_FIELD_ADDINFO': 'Additional Info',
    'LBL_FIELD_INFO': 'Message',
    'HEADER_INFO_SHORT': 'Short term rent information request',
    'HEADER_INFO_LONG': 'Long term rent information request',
    'HEADER_INFO_LET': 'Let property information submission',
    'HEADER_INFO_BUY': 'Buy property information request',
    'HEADER_INFO_SELL': 'Sell property information submission',
    'HEADER_INFO_GENERAL': 'Send message',
    'FIELD_NAME_ERR': 'nameErrEn',
    'FIELD_EMAIL_ERR': 'emailErrEn',
    'BTN_SUBMIT': 'Submit',
    'HEADER_INFO_MODAL_FOOTER_CLOSE_BUTTON': 'Close',


    // Home - Main
    'HOME_TITLE_01': 'Camel Car Hire',
    'HOME_SUBTITLE_01': 'We will not disappoint you',
    'HOME_TITLE_02': 'Camel Car Hire - we\'ll do our best for you',
    'HOME_SUBTITLE_02': 'If you ask our clients they reply: the perfect cars for the reasonable price',
    'HOME_THUMB_01_TITLE': '[En] Без предоплаты',
    'HOME_THUMB_01_TEXT': '[En] Просто заполните онлайн-форму или позвоните. Оплата заказа после получения авто.',
    'HOME_THUMB_02_TITLE': '[En] Новые автомобили',
    'HOME_THUMB_02_TEXT': '[En] Наш парк атомобилей состоит из новых машин выпуска 2016 - 2017 годов',
    'HOME_THUMB_03_TITLE': '[En] В аэропорт - бесплатно!',
    'HOME_THUMB_03_TEXT': '[En] Оформите заказ от 14 дней и мы привезем вам машину в аэропорт бесплатно.',
    'HOME_TITLE_04': 'Our cars',
    'HOME_SUBTITLE_04': 'Please select the car you like and press "Book" button',
    'BTN_KNOWMORE': 'More info',
    'BTN_BOOK': 'Car booking',
    'BTN_BOOK_CAR': 'Book',
    'BTN_CAR_SHOW_DETAILS': 'Show details',
    'BTN_CAR_HIDE_DETAILS': 'Hide details',
    'BTN_BOOK_PERFORM': 'Perform booking',
    'HOME_TITLE_06': 'Car booking',
    'HOME_SUBTITLE_06': 'Fill in the form providing the necessary information and we\'ll contact you to setup details',
    'HOME_TITLE_05': 'Our Customers Say We Are Awesome :)',
    'DATEPICKER_DATE': 'Enter date',
    'DATEPICKER_TIME': 'Time',
    'LBL_CAR': 'Car type',
    'HOME_TITLE_07': 'Our offices',
    'HOME_SUBTITLE_07_01': 'Camel Car Hire, Office 1',
    'HOME_SUBTITLE_07_02': 'Camel Car Hire, Office 2',


    // General
    'GENERAL_ELEM_OBJ': 'Object #',
    'GENERAL_ELEM_MORE_DETAILS': 'More details...',
    'GENERAL_FOUND_NOTHING_HEADER': 'Nothing found...',
    'GENERAL_FOUND_NOTHING': 'Nothing found. Change search criteria and try again.',
    'GENERAL_LOADING_SPINNER': 'Loading...',





    // Q&A
    'QA_PAGE_HEADER_TITLE': '[En]Вопросы и ответы',
    'QA_PAGE_HEADER_SUBTITLE': '[En]Несколько слов...',

    // Services
    'SERVICES_PAGE_HEADER_TITLE': '[En]Дополнительные услуги',
    'SERVICES_PAGE_HEADER_SUBTITLE': '[En]Несколько слов...',

    // Contacts
    'CONTACTS_PAGE_HEADER_TITLE': '[En]Наши контакты',
    'CONTACTS_PAGE_HEADER_SUBTITLE': '[En]Несколько слов...',


  });

  $translateProvider.translations('ru', {

    // Header
    'HEADER_OFFICE_PHONE': 'Офис',
    'HEADER_MOBILE_PHONE': 'Мобильный',
    'HEADER_SKYPE_PHONE': 'Skype',
    'HEADER_SEND_MESSAGE_1': 'Отправить',
    'HEADER_SEND_MESSAGE_2': 'сообщение',

    // Admin
    'HEADER_ADMIN_LOGIN': 'Вход',
    'HEADER_ADMIN_ACCOUNT': 'Профиль',
    'BTN_ADMIN_LOGOUT': 'Выход',
    'BTN_ADMIN_CREATE': 'Создать',
    'BTN_ADMIN_UPDATE': 'Обновить объект',
    'BTN_ADMIN_DECLINE': 'Отменить редактирование объекта',
    'BTN_ADMIN_LOGIN': 'Вход',
    'BTN_ADMIN_CLEAR': 'Очистить',
    'LBL_OBJ_EXCLUSIVE': 'Эксклюзивный объект',
    'LBL_OBJ_SHOW': 'Объект открыт для показа',
    'LBL_OBJ_HOME': 'Размещать объект на главной странице',
    'LBL_TAG': 'Тег',
    'LBL_IMG_MAIN_LABEL_01': 'Выберите файл для основного изображения',
    'LBL_IMG_MAIN_LABEL_02': 'Загрузка основного изображения',
    'LBL_IMG_MAIN_LABEL_03': 'Прогресс загрузки файла основного изображения:',
    'LBL_IMG_GALLERY_LABEL_01': 'Выберите файлы для галлереи',
    'LBL_IMG_GALLERY_LABEL_02': 'Загрузка изображений галлереи',
    'LBL_IMG_GALLERY_LABEL_03': 'Прогресс загрузки файлов галлереи:',
    'LBL_IMG_GALLERY_LABEL_04': 'Кол-во файлов галлереи:',
    'LBL_IMG_MAIN_BTN_REMOVE': 'Удалить',
    'LBL_IMG_MAIN_BTN_REMOVE_ALL': 'Удалить все изображения галлереи',
    'LBL_IMG_TBL_LABEL_NAME': 'Имя файла',
    'LBL_IMG_TBL_LABEL_SIZE': 'Размер',
    'LBL_IMG_TBL_LABEL_PROGRESS': 'Прогресс',
    'LBL_IMG_TBL_LABEL_STATUS': 'Статус',
    'LBL_IMG_TBL_LABEL_ACTION': 'Действие',
    'HEADER_PANEL_EDIT': 'Редактирование объекта #',


    // Footer
    'FOOTER_ABOUT_COMPANY_TITLE': 'О нас',
    'FOOTER_ABOUT_COMPANY_TEXT': 'Лорем ипсум долор сит амет, не дицит легере еос, ' +
    'еос еу волутпат цомпрехенсам, не хас долор омиттам! При утамур сингулис адиписцинг ' +
    'не, не алии ехерци дуо. Тота игнота алияуандо ан яуо, хабео яуидам хендрерит те яуо.',
    'FOOTER_NAVIGATION': 'Навигация',
    'FOOTER_SUBSCRIBE_TITLE': 'Подписаться на новости',
    'FOOTER_SUBSCRIBE_YOUTUBE': 'YouTube',
    'FOOTER_SUBSCRIBE_FACEBOOK': 'Facebook',
    'FOOTER_SUBSCRIBE_TWEETER': 'Tweeter',
    'FOOTER_SUBSCRIBE_GOOGLEPLUS': 'Google Plus',
    'FOOTER_DEVELOPER': 'Разработано',

    // Main menu items
    'NAV_HOME': 'Главная',
    'NAV_CONDITIONS': 'Условия проката',
    'NAV_CARS': 'Автомобили',
    'NAV_DISCOUNT': 'Дисконтная карта',
    'NAV_SALES': 'Продажа',
    'NAV_QA': 'Вопросы',
    'NAV_SERVICES': 'Доп. услуги',
    'NAV_CONTACTS': 'Контакты',
    'NAV_REQ_BUTTON': 'Оставить заявку',

    // Filter form items
    'PANEL_HEADER': 'Задайте условия поиска',
    'LBL_DEAL': 'Тип сделки',
    'LBL_OBJ': 'Тип объекта',
    'LBL_SHOW': 'Показывать объект',
    'LBL_HOME': 'Размещать на главной странице',
    'LBL_CITY': 'Город',
    'LBL_ROOM': 'Кол-во комнат',
    'LBL_OBJ_NUM': 'Номер объекта',
    'LBL_YOUTUBE': 'YouTube',
    'LBL_ADDRESS': 'Адрес',
    'LBL_BATHROOM': 'Сан. узел',
    'LBL_POOL': 'Бассейн',
    'LBL_PRICE': 'Стоимость',
    'LBL_DESCRIPTION': 'Описание',
    'LBL_INFO': 'Доп. информация',
    'OBJ_NUM_PLACEHOLDER': '№ объекта',
    'OBJ_YOUTUBE_PLACEHOLDER': 'YouTube',
    'OBJ_ADDRESS_PLACEHOLDER': 'Введите адрес объекта',
    'OBJ_BATHROOM_PLACEHOLDER': 'Введите описание сан. узла объекта',
    'OBJ_POOL_PLACEHOLDER': 'Введите описание бассейна объекта',
    'OBJ_PRICE_PLACEHOLDER': 'Введите стоимость аренды объекта',
    'OBJ_DESCRIPTION_PLACEHOLDER': 'Введите общее объекта',
    'OBJ_INFO_PLACEHOLDER': 'Введите дополнительную информацию по объекту',
    'BTN_FIND': 'Найти',
    'BTN_CLR': 'Очистить',
    'AV_REQ': 'reqRu',

    // Callback or request forms
    'LBL_FIELD_OBJ': 'Объект',
    'LBL_FIELD_DATE_START': 'Дата начала',
    'LBL_FIELD_DATE_END': 'Дата окончания',
    'LBL_FIELD_NAME': 'Ваше имя',
    'LBL_FIELD_EMAIL': 'Email',
    'LBL_FIELD_PHONE': 'Телефон',
    'LBL_FIELD_SKYPE': 'Skype',
    'LBL_FIELD_WHATSAPP': 'WhatsApp',
    'LBL_FIELD_TELEGRAM': 'Telegram',
    'LBL_FIELD_VIBER': 'Viber',
    'LBL_FIELD_ADDINFO': 'Доп. информация',
    'LBL_FIELD_INFO': 'Сообщение',
    'HEADER_INFO_SHORT': 'Запрос информации по краткосрочной аренде',
    'HEADER_INFO_LONG': 'Запрос информации по долгосрочной аренде',
    'HEADER_INFO_LET': 'Предложение по сдаче недвижимости в аренду',
    'HEADER_INFO_BUY': 'Запрос информации по покупке недвижимости',
    'HEADER_INFO_SELL': 'Предложение по продаже недвижимости',
    'HEADER_INFO_GENERAL': 'Отправка сообщения',
    'FIELD_NAME_ERR': 'nameErrRu',
    'FIELD_EMAIL_ERR': 'emailErrRu',
    'BTN_SUBMIT': 'Отправить',
    'HEADER_INFO_MODAL_FOOTER_CLOSE_BUTTON': 'Закрыть',



    // Home - Main
    'HOME_TITLE_01': 'Camel Car Hire',
    'HOME_SUBTITLE_01': 'Мы не разочаруем вас',
    'HOME_TITLE_02': 'Camel Car Hire - лучшее для Вас!',
    'HOME_SUBTITLE_02': 'Спросите наших клиентов о Camel Car Hire и они вам ответят: разумные цены при безупречном качестве',
    'HOME_THUMB_01_TITLE': 'Без предоплаты',
    'HOME_THUMB_01_TEXT': 'Просто заполните онлайн-форму или позвоните. Оплата заказа после получения авто.',
    'HOME_THUMB_02_TITLE': 'Новые автомобили',
    'HOME_THUMB_02_TEXT': 'Наш парк атомобилей состоит из новых машин выпуска 2016 - 2017 годов',
    'HOME_THUMB_03_TITLE': 'В аэропорт - бесплатно!',
    'HOME_THUMB_03_TEXT': 'Оформите заказ от 14 дней и мы привезем вам машину в аэропорт бесплатно.',
    'HOME_TITLE_04': 'Наши автомобили',
    'HOME_SUBTITLE_04': 'Выберите понравившейся вам автомобиль и нажмике кнопку "Забронировать"',
    'BTN_KNOWMORE': 'Узнать больше',
    'BTN_BOOK': 'Заказать авто',
    'BTN_BOOK_CAR': 'Забронировать',
    'BTN_CAR_SHOW_DETAILS': 'Показать подробности',
    'BTN_CAR_HIDE_DETAILS': 'Скрыть подробности',
    'BTN_BOOK_PERFORM': 'Отправить заказ',
    'HOME_TITLE_06': 'Бронирование авто',
    'HOME_SUBTITLE_06': 'Заполните форму, указав необходимую информацию и мы свяжемся с вами для уточнения деталей',
    'HOME_TITLE_05': 'Наши заказчики говорят, что мы лучшие :)',
    'DATEPICKER_DATE': 'Укажите дату',
    'DATEPICKER_TIME': 'Время',
    'LBL_CAR': 'Тип автомобиля',
    'HOME_TITLE_07': 'Наши офисы',
    'HOME_SUBTITLE_07_01': 'Camel Car Hire, офис 1',
    'HOME_SUBTITLE_07_02': 'Camel Car Hire, офис 2',



    // General
    'GENERAL_ELEM_OBJ': 'Объект №',
    'GENERAL_ELEM_MORE_DETAILS': 'Подробнее...',
    'GENERAL_FOUND_NOTHING_HEADER': 'Ничего не найдено...',
    'GENERAL_FOUND_NOTHING': 'По вашему запросу ничего не найдено. Измените условия и повторите поиск.',
    'GENERAL_LOADING_SPINNER': 'Информация загружается...',



    // Q&A
    'QA_PAGE_HEADER_TITLE': 'Вопросы и ответы',
    'QA_PAGE_HEADER_SUBTITLE': 'Несколько слов...',

    // Services
    'SERVICES_PAGE_HEADER_TITLE': 'Дополнительные услуги',
    'SERVICES_PAGE_HEADER_SUBTITLE': 'Несколько слов...',

    // Contacts
    'CONTACTS_PAGE_HEADER_TITLE': 'Наши контакты',
    'CONTACTS_PAGE_HEADER_SUBTITLE': 'Несколько слов...',


  });

  $translateProvider.preferredLanguage('en');
  $translateProvider.useSanitizeValueStrategy('escape');
}