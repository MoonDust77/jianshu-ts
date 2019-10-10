import Mock from 'mockjs'

const headerList = Mock.mock({
  code: 0,
  message: '',
  userMessage: '',
  data: [
    '国研会',
    'IM 短信',
    '宏裕建材',
    '微信',
    '蚂蚁金服',
    '支付宝',
    '移动OA',
    '借呗',
    '诈骗',
    '被骗',
    '盗窃',
    '东元',
    '国泰人寿',
    '企业',
    'pandas',
    'Scrapy',
    'pyecharts',
    'ggplot',
    'TensorFlow',
    'Keras',
    'Theano',
    'Gensim',
    'Bokeh',
    'scikit-learn',
    'XGBoost',
    'SciPy',
    'PyTorch',
    'Plotly',
    'NumPy',
    'Matplotlib',
    'Caffe',
    '个推',
    '冠耘',
    'Python',
    '在家兼职赚钱',
    '挠脚心',
    '魔道祖师',
    '刘亚苏+金力泰',
    'java',
    '企业微信',
    '阿里云+通信',
    '在家怎么赚钱',
    'vue',
    '网易云信',
    'IM 云信',
    '小说',
    '阿里云通信',
    'IM+云信',
    '金力泰+陈晨',
    '阿里云 通信'
  ]
})

const writerList = Mock.mock({
  code: 0,
  message: '',
  userMessage: '',
  'data|30': [
    {
      id: '@id',
      writerPageUrl: 'https://www.jianshu.com/',
      avatarUrl:
        '//upload.jianshu.io/users/upload_avatars/2558050/7761b285-2805-4534-9870-ba7dcc7538ec.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      writerInfo: '写了470.4k字 · 1.4k喜欢@id'
    }
  ]
})

const topicList = Mock.mock({
  code: 0,
  message: '',
  userMessage: '',
  data: [
    {
      id: 1,
      title: '社会热点',
      imgUrl:
        '//upload.jianshu.io/admin_banners/web_images/4707/589f8bc74616a27b1b3ffaa282210bed81324261.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    },
    {
      id: 2,
      title: '手绘',
      imgUrl:
        '//upload.jianshu.io/admin_banners/web_images/4707/589f8bc74616a27b1b3ffaa282210bed81324261.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    }
  ]
})

const articleList = Mock.mock({
  code: 0,
  message: '',
  userMessage: '',
  'data|10': [
    {
      id: '@id',
      title: '辞职后，她靠自学画出了让百万人点赞的工笔画，这真的是自学的？',
      desc:
        '每个人的生活 都藏着无限的可能性 每个人在他的生命里 都是独一无二的存在 生活会赋予你独特的经历 让你看到自己的闪光点 《聊斋系列之聂小倩》 她...',
      imgUrl:
        '//upload-images.jianshu.io/upload_images/16980444-d07248c6300c4c90.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }
  ]
})

const homeData = Mock.mock({
  code: 0,
  message: '',
  userMessage: '',
  data: {
    'writerList|30': [
      {
        id: '@id',
        writerPageUrl: 'https://www.jianshu.com/',
        avatarUrl:
          '//upload.jianshu.io/users/upload_avatars/2558050/7761b285-2805-4534-9870-ba7dcc7538ec.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
        writerInfo: '写了470.4k字 · 1.4k喜欢@id'
      }
    ],
    topicList: [
      {
        id: 1,
        title: '社会热点',
        imgUrl:
          '//upload.jianshu.io/admin_banners/web_images/4707/589f8bc74616a27b1b3ffaa282210bed81324261.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
      },
      {
        id: 2,
        title: '手绘',
        imgUrl:
          '//upload.jianshu.io/admin_banners/web_images/4707/589f8bc74616a27b1b3ffaa282210bed81324261.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
      }
    ],
    'articleList|10': [
      {
        id: '@id',
        title: '辞职后，她靠自学画出了让百万人点赞的工笔画，这真的是自学的？',
        desc:
          '每个人的生活 都藏着无限的可能性 每个人在他的生命里 都是独一无二的存在 生活会赋予你独特的经历 让你看到自己的闪光点 《聊斋系列之聂小倩》 她...',
        imgUrl:
          '//upload-images.jianshu.io/upload_images/16980444-d07248c6300c4c90.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
      }
    ]
  }
})

export default {
  headerList,
  writerList,
  topicList,
  articleList,
  homeData
}
