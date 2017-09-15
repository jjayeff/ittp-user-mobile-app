import moment from 'moment';
import 'moment/locale/th';

// set format money
Number.prototype.format = function (n, x) {
  const re = `\\d(?=(\\d{${x || 3}})+${n > 0 ? '\\.' : '$'})`;
  return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
};

export const Money = (money, decimal) => {
  if (decimal) { return money.format(2); }
  return money.format();
};

export const DateFormat = (date) => {
  return moment(date).add(543, 'year').format('D MMMM YYYY');
};

export const TimeFormat = (date) => {
  return moment(date).format('H:mm');
};

// Function Calculate Interest
export const calInterest = (Interest) => {
  const date = new Date(Interest.transactionDate);
  const date2 = new Date(Interest.closeDate);
  const timeDiff = Math.abs(date.getTime() - date2.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)) - 1;
  return Interest.interest + ((Interest.dailyInt * (diffDays)) * Interest.Principal);
};

// Function Calculate ContractCloseFee
export const calCloseContractFee = (CloseContractFee) => {
  const date = new Date(CloseContractFee.openDate);
  const date2 = new Date(CloseContractFee.closeDate);
  const timeDiff = Math.abs(date.getTime() - date2.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)) - 1;
  return diffDays > 365 ? 0 : CloseContractFee.preterminatedFee * CloseContractFee.creditLimit;
};

// Function Calculate TotalContractFee
export const calTotalContractFee = (TotalContractFee) => {
  return (TotalContractFee.principal + TotalContractFee.fee + calInterest(TotalContractFee.Interest) + calCloseContractFee(TotalContractFee.CloseContractFee));
};
