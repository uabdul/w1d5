var input = [];

function storeData(arr) {
  for (var x of arr) {
    input.push(parseInt(x));
  }
}



function sortFunc() {
  input.sort(function(a,b){return a - b});
  console.log(input);
  }



module.exports = {
  storeData: storeData,
  sortFunc: sortFunc,

}