import React from 'react'
import './index.css'
import PropTypes from 'prop-types'
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css'

export default class DirectContent extends React.Component {
  static defaultProps = {
    attribute: 0,
    sectionTitle: '',
    teacherName: '',
    partNum: '',
    liveTime: '',
    playNum: '',
    studyProgress: '',
    studyStatus: '',
    videoTime: ''
  }
  componentDidMount() {
    new Swiper('.swiper-container', {
      initialSlide: 0,
      direction: 'horizontal',
      grabCursor: true,
      observer:true, 
      observeParents:true,
      slidesPerView : 'auto',
      SwiperOptionslidesPerView : 3, 
    })

  }
  getEveryPageArr = (directData = [], size) => {
    let newArr = []
    for (let i = 0; i < directData.length; i += size) {
      newArr.push(directData.slice(i, i + size))
    }
    console.log(newArr)
    return newArr
  }

  renderSubLive = (partNum, liveTime, playNum, studyProgress, studyStatus) => {
    let emptyArr = []
    if (!!partNum) {
      emptyArr.push(<div className='part-num'>{partNum}人参与</div>)
    }
    if (!!liveTime) {
      emptyArr.push(<div className='live-time'>{liveTime}直播</div>)
    }
    if (!!playNum) {
      emptyArr.push(<div className='play-num'>{playNum}次播放</div>)
    }
    if (!!studyProgress) {
      emptyArr.push(<div className='study-progress'>已学{studyProgress}</div>)
    }
    if (!!studyStatus) {
      emptyArr.push(<div className='study-status'>{studyStatus}</div>)
    }
    return emptyArr

  }

  judgeIsMember = (isMember, attribute) => {
    if (attribute < 4) {
      return (attribute === 1 ? <div className='live attr-common '></div>
        : attribute === 2 ? <div className='trailer attr-common '></div>
          : <div className='attr-play attr-common '></div>)
    } else {
      return <div className='studied attr-common '></div>
    }
  }

  render() {
    const { directData = [] } = this.props
    return (
      <div className='DirectContent'>
        <div className='swiper-container' >
          <div className='swiper-wrapper'>
            {
              this.getEveryPageArr(directData, 5).map((item, index) => {
                return (

                  // <div className={'content-container-box'} key={index}>
                    <div className='swiper-slide content-container-box'>
                      {
                        item.map((data, innerindex) => {
                          const { attribute, sectionTitle, teacherName, partNum, liveTime, playNum, studyProgress, studyStatus, videoTime, isMember } = data
                          return (
                            <div key={innerindex} className='content-container'>
                              <div className='lesson-attr-container'>
                                {this.judgeIsMember(isMember, attribute)}
                                {!!videoTime ? <div className='video-time'>{videoTime}</div> : ''}
                                <div className='section-title'>{innerindex + index * 5 + 1}.{sectionTitle}</div>
                              </div>
                              <div className='lesson-info-container'>
                                <div className='teacher-name'>{teacherName}</div>
                                {this.renderSubLive(partNum, liveTime, playNum, studyProgress, studyStatus)}
                              </div>
                            </div>
                          )
                        })
                      }
                    </div>
                  // </div>
                )
              })
            }
            </div>
        </div>
      </div>
    )
  }
}