// add solution here

function theBeatlesPlay(artists, instruments){
  var list = []
  for (var i = 0; i < artists.length; i++){
    var str = `${artists[i]} plays ${instruments[i]}`
    list.push(str)
  }
  return list
}