import moment from 'moment'

let momentTime = value => {
  if (!value) return
  if(isNaN(Number(value))){
      return value
  }
  var date = new Date(value * 1000)
  return moment(date).format('YYYY-MM-DD HH:mm')
}

let last = value => {
  var date = new Date()
  return moment(date).format('YYYY-MM-DD HH:mm')
}
export {
  momentTime
}
