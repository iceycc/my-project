import stata from './state'
export default {
  // 获取基础信息数据

  // 获取资质信息数据
  getEmail(stata){
    return stata.email
  },
  getSettledProgress(stata){
    return stata.settled_progress
  }
}
