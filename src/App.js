
import './App.css';
import Video from './component/video/index'
import LessonIntro from './component/lesson-intro/index'
import Tab from './component/tab'
import DirectContent from './component/direct-content'
import SwiperPra from './component/swiper'
import Teacher from './component/teacher'
import Evalution from './component/evaluation'
import Recommend from './component/recommend'

import active from './img/slices/试听@2x.png'
import teacherImg from './img/timg.jpeg'
import user1 from './img/user1.jpg'
import user2 from './img/user2.jpg'
import user3 from './img/user3.jpg'
import discount from './img/slices/discount.png'
import tuan from './img/slices/tuan.png'
import cupon from './img/slices/cupon.png'
import img1 from './img/recommend/1.webp'
import img2 from './img/recommend/2.webp'
import img3 from './img/recommend/3.webp'
import img4 from './img/recommend/4.webp'
import img5 from './img/recommend/5.webp'
import img6 from './img/recommend/6.webp'
import img7 from './img/recommend/7.webp'

function App() {
  const lessonData = {
    active: active,
    title: '像法国人一样说法语',
    score: '4.0',
    playNum: '12.33万'
  }
  //attribute:课程性质 1：直播 2：预告 3：可学/未学完 4：已学
  //sectionTitle:章节名称
  //teacherName:老师姓名
  //partNum:参与人数
  //liveTime:直播时间
  //playNum:播放次数
  //studyProgress:学习进度
  //studyStatus:学习状态
  //videoTime:视频时长

  const directData = [
    {
      attribute: 1,
      sectionTitle: '光的重要性-曝光与光线质感',
      teacherName: 'Vivi老师',
      partNum: '1212',
      isMeber: true
    }, {
      attribute: 2,
      sectionTitle: '如何管理你的色彩',
      teacherName: 'Vivi老师',
      liveTime: '12-12 16:00',
      isMeber: true
    }, {
      attribute: 3,
      sectionTitle: '曝光与光线质感',
      teacherName: '美蛋娘娘哈哈哈哈哈',
      playNum: '68322',
      studyProgress: '90%',
      videoTime: '120:30',
      isMeber: true
    }, {
      attribute: 3,
      sectionTitle: '如何管理你的色彩如何管理你的色彩',
      teacherName: 'Vivi老师',
      playNum: '683',
      videoTime: '120:30',
      isMeber: true
    }, {
      attribute: 4,
      sectionTitle: '曝光与光线质感',
      teacherName: 'Vivi老师',
      playNum: '683',
      studyStatus: '已学完',
      isMeber: false
    }, {
      attribute: 1,
      sectionTitle: '光的重要性-曝光与光线质感',
      teacherName: 'Vivi老师',
      partNum: '1212',
      isMeber: true
    }, {
      attribute: 2,
      sectionTitle: '如何管理你的色彩',
      teacherName: 'Vivi老师',
      liveTime: '12-12 16:00',
      isMeber: true
    }, {
      attribute: 3,
      sectionTitle: '曝光与光线质感',
      teacherName: '美蛋娘娘哈哈哈哈哈',
      playNum: '68322',
      studyProgress: '90%',
      videoTime: '120:30',
      isMeber: true
    }, {
      attribute: 3,
      sectionTitle: '如何管理你的色彩如何管理你的色彩',
      teacherName: 'Vivi老师',
      playNum: '683',
      videoTime: '120:30',
      isMeber: true
    }, {
      attribute: 4,
      sectionTitle: '曝光与光线质感',
      teacherName: 'Vivi老师',
      playNum: '683',
      studyStatus: '已学完',
      isMeber: false
    }, {
      attribute: 1,
      sectionTitle: '光的重要性-曝光与光线质感',
      teacherName: 'Vivi老师',
      partNum: '1212',
      isMeber: true
    }, {
      attribute: 2,
      sectionTitle: '如何管理你的色彩',
      teacherName: 'Vivi老师',
      liveTime: '12-12 16:00',
      isMeber: true
    }, {
      attribute: 3,
      sectionTitle: '曝光与光线质感',
      teacherName: '美蛋娘娘哈哈哈哈哈',
      playNum: '68322',
      studyProgress: '90%',
      videoTime: '120:30',
      isMeber: true
    }, {
      attribute: 3,
      sectionTitle: '如何管理你的色彩如何管理你的色彩',
      teacherName: 'Vivi老师',
      playNum: '683',
      videoTime: '120:30',
      isMeber: true
    }, {
      attribute: 4,
      sectionTitle: '曝光与光线质感',
      teacherName: 'Vivi老师',
      playNum: '683',
      studyStatus: '已学完',
      isMeber: false
    }, {
      attribute: 4,
      sectionTitle: '曝光与光线质感',
      teacherName: 'Vivi老师',
      playNum: '683',
      studyStatus: '已学完',
      isMeber: false
    }
  ]
  const teacherInfo = {
    headImg: teacherImg,
    teacherNickName: '七七老师',
    focusNUm: '1.2万',
    isFocus: true,
    teacherIntro: '华盖创意签约摄影师，豆瓣、网易签约作者，合作杂志《人像摄影》、《咔啪》、《摄影之友》',
    belongOrg: '七七老师'
  }
  const evalScores = {
    score: '5.0',
    evalNum: 2423,
    stars: 3,
    desc: [
      '老师风趣 (12)',
      '内容好(6)',
      '氛围轻松(24)',
      '老师美(6)',
      '有趣(14)',
      '内容好(36)',
      '作业多(6)'
    ]
  }
  const evalUser = [
    {
      userImg: user1,
      userNick: 'panda155',
      userStars: 4,
      evalTime: '12月28日',
      userDesc: ['老师风趣', '老师风趣', '老师风趣', '老师风趣', '老师风趣'],
      evalContent: '老师多久更新一堂课呢？',
      reply: '每周五更新',
    },
    {
      userImg: user2,
      userNick: '小可爱爱英语',
      userStars: 4,
      evalTime: '4月21日',
      evalContent: '如果当初老师这么教英语，我可能会爱死~~期待！！兴趣大大的有~'
    },
    {
      userImg: user3,
      userNick: '小可爱爱英语',
      userStars: 4,
      evalTime: '4月21日',
      evalContent: '如果当初老师这么教英语，我可能会爱死~~期待！！兴趣大大的有~如果当初老师这么教英语，我可能会爱死~~期待！！兴趣大大的有~'
    }
  ]
  const recommendData = [
    {
      kind: '日语',
      lessonTitle: '30天教你啥时日语',
      signNum: '50',
      currentPrice: '￥1999',
      originPrice: '￥2999',
      activity: discount,
      bg:img1
    },
    {
      kind: '日语',
      lessonTitle: '30天教你啥时日语',
      signNum: '50',
      currentPrice: '￥1999',
      originPrice: '￥2999',
      activity: tuan,
      bg:img2
    },
    {
      kind: '考研英语',
      lessonTitle: '19年7月N3+N2考级辅导班',
      signNum: '50',
      currentPrice: '￥1999',
      originPrice: '￥2999',
      activity: cupon,
      bg:img3
    },
    {
      kind: '公务员考试',
      lessonTitle: '字体设计修炼--设计大脑字体设计修炼',
      signNum: '50',
      currentPrice: '￥1999',
      bg:img4
    },
    {
      kind: '日语',
      lessonTitle: '30天教你啥时日语',
      studyNum: '19998次',
      currentPrice: '免费',
      bg:img5
    },
    {
      kind: '公务员考试',
      lessonTitle: '字体设计修炼--设计大脑字体设计修炼',
      teacherName: '曹吉吉',
      playNum: '898',
      bg:img6
    },
    {
      kind: '公务员考试',
      lessonTitle: '字体设计修炼--设计大脑字体设计修炼',
      teacherName: '曹吉吉',
      subNum: '3444次',
      chapter: '55',
      bg:img7
    },
    {
      kind: '公务员考试',
      lessonTitle: '字体设计修炼--设计大脑字体设计修炼',
      teacherName: '曹吉吉',
      studyNumMan: '3444人',
      classHour: '12',
      bg:img1
    }
  ]
  return (
    <div className="App">
      <Video />
      <div className='box'>
        <div className='main-container'>
          <LessonIntro data={lessonData} />
          <Tab />
          <DirectContent directData={directData} />
          <Teacher teacher={teacherInfo} />
          <Evalution evalScores={evalScores} evalUser={evalUser} />
          <Recommend data={recommendData} />
        </div>
      </div>
    </div>
  );
}

export default App;
