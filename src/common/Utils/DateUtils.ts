import dayjs from 'dayjs';

export const DATE_FORMAT = 'DD-MM-YYYYTHH:mm:ss';

export const getNow = () => dayjs().format(DATE_FORMAT);
