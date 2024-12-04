export const getFormattedDateWithTimezone = () => {
  const date = new Date();

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZoneName: 'short', // Добавляем часовой пояс
  };

  return date.toLocaleString(undefined, options);
};
