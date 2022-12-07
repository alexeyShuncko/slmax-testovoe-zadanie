type TNumStr = string | number;

export const dateString = (date: Date, time?: boolean) => {
  let dd: TNumStr = date.getDate();
  if (dd < 10) {
    dd = '0' + dd;
  }
  let mm: TNumStr = date.getMonth() + 1;
  if (mm < 10) {
    mm = '0' + mm;
  }
  let yy: TNumStr = date.getFullYear() % 100;
  if (yy < 10) {
    yy = '0' + yy;
  }
  let HH: TNumStr = date.getHours();
  if (HH < 10) {
    HH = '0' + HH;
  }
  let MM: TNumStr = date.getMinutes();
  if (MM < 10) {
    MM = '0' + MM;
  }
  if (time) {
    return dd + '-' + mm + '-' + '20' + yy + ' в ' + HH + ':' + MM;
  }
  return dd + '-' + mm + '-' + '20' + yy;
};
