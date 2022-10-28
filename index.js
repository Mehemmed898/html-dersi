//let names = ['sense', 'make', 'all', 'will', 'This'];
//function tural(names) {
//  let amid = names.reverse()
// return amid
//}
//console.log(tural(names))


//const amid = ['Blorgous', 'Glamyx', 'Wegord', 'SpaceKing'];

//amid.forEach((item) => {
//console.log("Oh powerful"+ item +" we humans offer our unconditional surrender")
//});
//const tural = [
    //'gameboys',
    //'skateboards',
    //'backwards hats',
    //'my room',
   // 'temporary tattoos'
//];
//const amid = [
    //'sweaters',
  //  'skateboards',
  //  'family-night',
  ///  'my room',
//];

//function veb(tural, amid) {
 //   tural.forEach((item) => {
    //    amid.forEach((element) => {
      //      if (item == element) {
      ///          console.log(item)
      //      }

      //  })
  ////  });
//}
//veb(tural, amid)



const meal = [
    { name: "arugula", source: "plant" },
    { name: "tomatoes", source: "plant" },
    { name: "lemon", source: "plant" },
    { name: "olive oil", source: "plant" },
];
const dinner = [
    { name: "hamburger", source: "meat" },
    { name: "cheese", source: "dairy" },
    { name: "ketchup", source: "plant" },
    { name: "bun", source: "plant" }
];
function isTheDinnerVegan(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].source !== 'meat') {
            return false
        } else {
            return true
        }
    }
}
console.log(isTheDinnerVegan(meal));
console.log(isTheDinnerVegan(dinner));



















