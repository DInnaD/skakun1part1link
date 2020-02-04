$(function() {
//для этого примера используем напрямую переданый индекс (айди)
function done(itemIndex){ //свичер
  // если done === false то становится true и наоборот
  App.items[itemIndex].done = !App.items[itemIndex].done;
  save(); 
  render();
}
});
