/**
 *@author wangbingyang
 *@date 2018/03/03 13:19:31
 *@desc
 */

// 公共组件的引入
import BcHeader from '@/components/Commons/Header.vue'
import BcLfBar from '@/components/Commons/LeftBar.vue'
import Footer from '@/components/Commons/Footer.vue'
import SmallPagination from '@/components/Commons/SmallPagination.vue'
import AreaSelect from '@/components/Commons/AreaSelect.vue'
import MyCheckBox from '@/components/Commons/MyCheckBox.vue'
import InfoBox from '@/components/Commons/InfoBox.vue'
import BcTab from '@/components/Commons/BcTab.vue'
import MessageCode from '@/components/Commons/MessageCode.vue'
import ZenModal from '@/components/Commons/ZenModal.vue'

// 默认导出 外面直接
// 引入全部时 import commons from './commons.js'
// 引入部分

export default {
  BcHeader,
  BcLfBar,
  Footer,
  SmallPagination,
  AreaSelect,
  MyCheckBox,
  InfoBox,
  BcTab,
  MessageCode,
  ZenModal
}
