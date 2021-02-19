import React from 'react'
import './index.css'

export default class LessonIntro extends React.Component {
  render() {
    const { active, title, score, playNum } = this.props.data
    return (
      <div className='lesson-intro'>
        <div className='title-container'>
          {/* {
            !! active ? ' ' :<div className='tag' style={{background : active , backgroundSize:'cover'}}></div>
          } */}
          <div style={{ backgroundImage: `url(${active})`, backgroundSize: 'cover' }} className='tag'></div>
          <div className='title'>{title}</div>
        </div>
        <div className='score-play-num'>
          {!!score ? <div className='score common'>{score}分</div> : ''}
          {(!!score && !!playNum) ? <div className='dot'>.</div> : ''}
          {!!playNum ? <div className='play common'>{playNum}次播放</div> : ''}
          <div className='intro common'>简介</div>
        </div>
        <div className='homework-container common'>
          <div className='homework'>作业</div>
          <div className='answer'>开始答题</div>
          <div className='home-title'>教你如何管理你的后啥啥啥啥啥的</div>
        </div>
      </div>
    )
  }
} 