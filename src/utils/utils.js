export const formatMoney = (money) => {
  if (money === null) {
    return '0';
  }
  let number_string = money.toString(),
    sisa = number_string.length % 3,
    rupiah = number_string.substr(0, sisa),
    ribuan = number_string.substr(sisa).match(/\d{3}/g);

  if (ribuan) {
    const separator = sisa ? '.' : '';
    rupiah += separator + ribuan.join('.');
  }
  if (money < 0) {
    return `-${rupiah}`;
  }
  return rupiah;
};
