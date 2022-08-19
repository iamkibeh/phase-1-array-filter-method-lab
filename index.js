// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
const drivers2 = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
function findMatching(names,matchName){

return names.filter(name => name.toLowerCase() ===matchName.toLowerCase())
}

// console.log(findMatching(drivers,'Bobby'))


function fuzzyMatch(names,matchName){
    return names.filter(name => name.charAt(0)===matchName.charAt(0))
}

// console.log(fuzzyMatch(drivers,"Sally"))

function matchName(drivers, matchingName){
return drivers.filter(elem => elem.name === matchingName)
}

// console.log(matchName(drivers2,"Bobby"))