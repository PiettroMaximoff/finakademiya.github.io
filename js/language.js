let rus = {
    menuLink1: 'Физическим лицам',
    menuLink2: 'Предприятиям',
    menuLink3: 'Инвестиции',
    menuLink4: 'Блог',
    menuLink5: 'О компании',

    mainName: 'Финакадемия',
    mainDescription: 'Консалтинговая компания, специализирующаяся на предоставлении организациям и частным лицам финансовых услуг в качестве агрегатора.',
    mainShortDescription: 'Генератор оптимальных финансовых решений',

    aboutName1: 'Наша миссия',
    aboutName2: 'Наши принципы',
    aboutName3: 'Наши ценности',
    aboutName4: 'Наша команда',
    aboutDescription1: 'Обеспечить простой и удобный доступ всем желающим к любому финансовому продукту на любом рынке',
    aboutDescription2: 'Открытость',
    aboutDescription3: 'Отвественность',
    aboutDescription4: 'Индивидуальный подход',
    aboutDescription5: 'Важнейшая ценность для нас - это наши клиенты. Их интересы, потребности, их развитие и рост — залог нашего успеха',
    aboutDescription6: 'В команде ООО "ФИНАКАДЕМИЯ" собрались как профессионалы с многолетним опытом работы на банковском и финансовом рынке, так и молодые перспективные специалисты',
    aboutBtn: 'Познакомиться с нами',

    partnersTitle: 'Наши партнеры',
    partnersName1: 'Freedom Finance',
    partnersName2: 'Альфа-банк',
    partnersName3: 'Севергазбанк',
    partnersDescription1: 'Депозиты, кредитование <br> Инвестирование, валютные операции',
    partnersDescription2: 'Кредитование бизнеса под льготный процент',
    partnersDescription3: 'Банковские гарантии',

    productsTitle: 'Наши предложения',
    productsName1: 'Участие в IPO',
    productsName2: 'Кредит для бизнеса 6% годовых',
    productsDescription1: 'Без статуса квалифицированного инвестора',
    productsDescription2: 'от 50 млн. рублей сроком до 15 лет',
    productsRead: 'Подробнее',

    newsTitle: 'Новости',
    newsName1: 'Facebook и Instagram вложат более $1 млрд в создателей контента',
    newsName2: 'Karma - краудлендинговая платформа',
    newsName3: 'Пресс релиз "Регионы - устойчивое развитие"',
    newsDescription1: 'Первая программа будет поощрять авторов контента в сервисе коротких видео Reels в Instagram.',
    newsDescription2: 'Платформа, на которой можно приунможить свой капитал и привлечь инвестиции',
    newsDescription3: 'Всероссийский конкурс по программе господдержки',
    newsRead: 'Читать далее',
    newsReadMore: 'Читать больше',

    footerTitle1: 'Социальные сети',
    footerTitle2: 'Контакты',
    footerCompany: 'Финакадемия ООО',
};

let eng = {
    menuLink1: 'Private',
    menuLink2: 'Business',
    menuLink3: 'Investments',
    menuLink4: 'Blog',
    menuLink5: 'About',

    mainName: 'Finakademiya',
    mainDescription: 'Consulting company specializing in providing organizations and individuals with financial services as an aggregator.',
    mainShortDescription: 'Optimal Financial Solutions Generator',

    aboutName1: 'Our mission',
    aboutName2: 'Our princeples',
    aboutName3: 'Our values',
    aboutName4: 'Our team',
    aboutDescription1: 'Provide easy and convenient access for everyone to any financial product in any market',
    aboutDescription2: 'Openness',
    aboutDescription3: 'Responsibility',
    aboutDescription4: 'Individual approach',
    aboutDescription5: 'Most important value for us is our customers. Their interests, their needs, their development and growth are the key to our success',
    aboutDescription6: 'The FINAKADEMIA LLC team includes professionals with many years of experience in the banking and financial market, as well as young promising specialists.',
    aboutBtn: 'Meet us',

    partnersTitle: 'Our partners',
    partnersName1: 'Freedom Finance',
    partnersName2: 'Alfa Bank',
    partnersName3: 'Severgazbank',
    partnersDescription1: 'Deposits, crediting <br> Investing, currency operations',
    partnersDescription2: 'Lending to businesses at preferential interest rates',
    partnersDescription3: 'Bank guarantees',

    productsTitle: 'Our products',
    productsName1: 'IPO participation',
    productsName2: 'Loan for business 6% per annum',
    productsDescription1: 'Without qualified investor status',
    productsDescription2: 'from 50 million rubles for up to 15 years',
    productsRead: 'Learn More',

    newsTitle: 'News',
    newsName1: 'Facebook and Instagram will invest more than $1 billion in content creators',
    newsName2: 'Karma - crowdsourcing platform',
    newsName3: 'Press release "Regiony - Ustoychivoe Razvitie" ',
    newsDescription1: "The first program will reward content creators on Instagram's short video service Reels",
    newsDescription2: 'A platform on which you can raise capital and investment',
    newsDescription3: 'All-Russian competition on the program of state support',
    newsRead: 'Read',
    newsReadMore: 'Read More',

    footerTitle1: 'Social',
    footerTitle2: 'Contacts',
    footerCompany: 'Finakademiya LLC',
};

changeLagnuage();

function changeLagnuage() {
    let language = lang.checked ? rus : eng;
    document.querySelectorAll('[text]').forEach(el => {
        el.innerHTML = language[el.getAttribute('text')];
    })
}