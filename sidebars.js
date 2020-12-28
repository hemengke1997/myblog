const fPre = 'frontEnd/'

var frontEndItems = [
  'intro',
  'vueOptimize',
  'NProgress',
  'axiosNormal',
  'tsConfig',
  'copyContent',
  'browserslist',
  'vueReactive',
  'changeFileName',
  'Todos',
  'miniProgramDva',
  'vueWithWebwoker',
  'react-setState-order',
  'regExpCompatibility',
  'typescriptGuide',
  'compare',
  'notOnlyLazyLoadImage',
  'thinkLazyloadImg',
  'thinkSinglemode',
  'performanceAndError',
  'imageWidthSelfAdapting',
  'gitCommitRule',
  'httpHistory',
  'SonarScanner',
  'reactAdvance',
  'requestHeaders',
  'docusaurus'
]


frontEndItems = frontEndItems.map(item => fPre + item)
module.exports = {
  docs: [ // 这个docs对应路由
    {
      type: 'category',
      label: '前端',
      items: frontEndItems
    },
    {
      type: 'category',
      label: '其他',
      items: []
    },
    {
      type: 'category',
      label: '书写风格',
      items: ['styleGuide/doc1'],
    }
  ],
};
