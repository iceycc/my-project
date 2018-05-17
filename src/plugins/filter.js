import moment from 'moment'
let momentTime = value => {
    var date = new Date(value * 1000)
    return moment(date).format('MM-DD HH:mm:ss')
}
export {
  momentTime
}
