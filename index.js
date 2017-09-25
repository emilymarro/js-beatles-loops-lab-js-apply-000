const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i=0; i < musicians.length; i++) {
    array.push(console.log(musicians[i] + " plays " + instruments[i]));
}



describe('johnLennonFacts', function(){
  it("returns an array of strings with exclamation points", function() {
    expect(johnLennonFacts([
      "He was the last Beatle to learn to drive",
      "He was never a vegetarian",
      "He was a choir boy and boy scout",
      "He hated the sound of his own voice"
    ])).toEqual(["He was the last Beatle to learn to drive!!!", "He was never a vegetarian!!!", "He was a choir boy and boy scout!!!", "He hated the sound of his own voice!!!"]);


var johnArray = [];
function johnLennonFacts(johnArray) {
  var newArray = []
  for (var i=0; i < johnArray.length; i++) {
    console.log(johnArray[i] + "!!!")
  }
  newArray.push();
  return newArray;
};
