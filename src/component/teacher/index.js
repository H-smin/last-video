import React from 'react'
import './index.css'
import icon from '../../img/auth-icon.png'
export default class Teacher extends React.Component {

  render() {
    const { headImg, teacherNickName, focusNUm, isFocus, teacherIntro, belongOrg } = this.props.teacher
    return (
      <div className='Teacher'>
        <div className='teacher-title'>网师</div>
        <div className='teacher-info-container'>
          <div className='teacher-head-part'>
            <div className='teacher-img' style={{ background: `url(${headImg})`, backgroundSize: 'cover' }}></div>
            <div className='nick-focus-container'>
              <div className='teacher-nick'>{teacherNickName}</div>
              <div className='teacher-focus'>{focusNUm}人关注</div>
            </div>
            <div className='teacher-focus-btn'>{isFocus ? '已关注' : '未关注'}</div>
          </div>
          <div className='teacher-intro'>{teacherIntro}</div>
          <div className='belong-org'>所属网师：{belongOrg}
            <div className='auth-icon' style={{background:`url(${icon})`,backgroundSize:'cover'}}></div>
          </div>
        </div>
      </div>
    )
  }
}