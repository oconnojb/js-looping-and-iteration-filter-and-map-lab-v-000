// Code your solution here:
function driversWithRevenueOver(arr, n) {
  return arr.filter( function (dr) {
    return dr['revenue'] > n;
  })
}

function driverNamesWithRevenueOver(arr, n) {
  let filtered = arr.filter( function (dr) {
    return dr['revenue'] > n;
  })

  return filtered.map( function (dr) {
    return dr['name'];
  })
}
