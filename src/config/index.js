import Vue from 'vue';

Vue.config.server = 'https://apex.oracle.com/pls/apex/lairgoldworkspace';
Vue.config.api = {
    tasks: {
        all:'api/tasks',
        one: 'api/tasks/$id',
    },
};

Vue.config.format = {
    date: 'DD.MM.YYYY',
    prettyDateFull: 'DD.MM.YYYY HH:mm:ss',
    prettyDateWithoutSeconds: 'DD.MM.YYYY HH:mm',
    serverDate: 'YYYY-MM-DD 00:00:00',
    serverDateFull: 'YYYY-MM-DD HH:mm:ss',
    datepickerDate: 'YYYY-MM-DD',
    time: 'HH:mm:ss',
    shortTime: 'HH:mm',
    dateString: {
        time: 'DD.MM.YYYY HH:mm',
        day: 'D MMMM YYYY',
        week: 'MMMM YYYY, Wo',
        month: 'MMMM YYYY',
        year: 'YYYY'
    },
    dateNumber: {
        time: 'YYYYMMDDHHmm',
        day: 'YYYYMMDD',
        week: 'YYYYWW',
        month: 'YYYYMM',
        year: 'YYYY'
    },
    numberLocale: 'ru-RU',
    integerOptions: { style: 'decimal' },
    floatOptions: { style: 'decimal', minimumFractionDigits: 2 },
    currencyOptions: { style: 'currency', currency: 'RUB' },
    percentOptions: { style: 'percent', maximumFractionDigits: 2 },
};

export default Vue;