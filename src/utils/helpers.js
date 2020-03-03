import moment from 'moment';

export function formatTime(timestamp, format = 'YYYY-MM-DD h:mm:ss a') {
  return moment(timestamp*1000).format(format);
}
