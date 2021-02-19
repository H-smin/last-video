import React from 'react'
import './index.css'

export default class Recommend extends React.Component {
    componentDidMount(){
        this.getOffTop()
    }
    getOffTop=() => {
        const offTop=window.pageYOffset|| document.documentElement.scrollTop || document.body.scrollTop
        //console.log(offTop)
    }
    render() {
        const { data = [] } = this.props

        return (
            <div className='Recommend'>
                <div className='recommend-title'>推荐</div>
                <div className='recommend-lesson-container'>
                    {
                        data.map((item, index) => {
                            const { kind, lessonTitle, signNum, currentPrice, originPrice, activity,
                                bg, studyNum, playNum, chapter, teacherName, classHour, subNum, studyNumMan } = item
                            return (
                                <div className='re-lesson-list' key={index}>
                                    <div className='re-lesson-desc'>
                                        <div className='re-kind'>{kind}</div>
                                        <div className='re-lesson-title'>{lessonTitle}</div>
                                        {
                                            !!teacherName
                                                ? <div className='re-teacher-name'>{teacherName}</div>
                                                : ''
                                        }
                                        <div className='sign-container'>
                                            {
                                                !!signNum
                                                    ? <div>
                                                        {signNum}人报名
                                                    <div className='price-container'>
                                                            <div className='curent-price'>{currentPrice}</div>
                                                            <div className='origin-price'>{originPrice}</div>
                                                            <div className='activity' style={{ background: `url(${activity})`, backgroundSize: 'cover' }}></div>

                                                        </div>
                                                    </div>
                                                    : ''
                                            }
                                            {
                                                !!studyNum
                                                    ? <div>
                                                        <div>{studyNum}学习</div>
                                                        <div className='curent-price'>{currentPrice}</div>
                                                    </div>
                                                    : ''
                                            }
                                            {
                                                !!playNum
                                                    ? <div>{playNum}次播放</div>
                                                    : ''
                                            }
                                            {
                                                !!studyNumMan
                                                    ? <div className='detail'>
                                                        <div>{studyNumMan}学习</div>
                                                        <div className='line'>|</div>
                                                        <div>{!!classHour
                                                            ? <div className='class-hour'>{classHour}课时</div>
                                                            : ''
                                                        }</div>
                                                    </div>
                                                    : !!subNum
                                                        ? <div className='detail'>
                                                            <div>{subNum}订阅</div>
                                                            <div className='line'>|</div>
                                                            <div>{!!chapter
                                                                ? <div className='chapter'>{chapter}节</div>
                                                                : ''
                                                            }</div>
                                                        </div>
                                                        : ''
                                            }

                                        </div>
                                    </div>
                                    <div className='re-lesson-cover' style={{ background: `url(${bg})`, backgroundSize: 'cover' }} ></div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}