// Code your solution here:
function driversWithRevenueOver(arry, n) {
  return arry.filter( function (dr) {
    return dr['revenue'] > n;
  })
}
