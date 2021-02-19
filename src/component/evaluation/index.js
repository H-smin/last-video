import React from 'react'
import './index.css'

export default class Evalution extends React.Component {
    constructor(props){
        super()
        
    }
    componentDidMount() {
        this.initStars()
        // this.initDesc()
        this.getOffTop()
    }
    getOffTop=() => {
        const offTop=window.pageYOffset|| document.documentElement.scrollTop || document.body.scrollTop
    }
    initStars = (stars) => {
        let starArr = []
        let arr = [1, 2, 3, 4, 5]
        arr.map((item, index) => {
            starArr.push(
                index < stars
                    ? <span className='star-item star-color' key={index}>&#9733;</span>
                    : <span className='star-item' key={index}>&#9733;</span>
            )
        })
        return starArr
    }
    initDesc = (desc) => {
        let descArr = []
        desc.map((item, index) => {
            descArr.push(
                <div className='desc-item' key={index}>{item}</div>
            )
        })
        return descArr
    }
    getUserEval = (arr) => {
        let newUserArr = []
        arr.map((item, index) => {
            const { userImg, userNick, userStars, evalTime, userDesc, evalContent, reply, stars } = item
            console.log(item)
            newUserArr.push(
                <div className='user-container' key={index}>
                    <div className='head-part'>
                        <div className='user-img' style={{ background: `url(${userImg})`, backgroundSize: 'cover' }}></div>
                        <div className='user-nick'>{userNick}</div>
                        <div className='user-star'>{this.initStars(userStars)}</div>
                        <div className='user-time'>{evalTime}</div>
                    </div>
                    <div className='eval-content-part'>
                    {
                        !! userDesc
                        ? userDesc.length < 3 
                            ? <div className='user-desc'>{this.getEvalDesc(userDesc)}</div>
                            : <div className='user-desc'>{this.getEvalDesc(userDesc)}等{userDesc.length}个标签</div>
                        : ''
                    }
                    <div className='eval-content'>{evalContent}</div>
                    {
                        !! reply 
                        ? <div className='reply'>老师回复:<span> {reply}</span></div>
                        : ''
                    }
                    </div>
                </div>
            )
        })
        return newUserArr
    }
    getEvalDesc = (descArr) => {
        let newArr=[]
        for(let i =0;i<3;i++){
            newArr.push(<div className='slice-arr'>{descArr[i]}</div>)
        }
        return newArr
    }
    render() {
        const { score, evalNum, stars, desc } = this.props.evalScores
        const { evalUser = [] } = this.props
        let star = this.initStars(stars)
        let newDesc = this.initDesc(desc)
        let newUser = this.getUserEval(evalUser)
        return (
            <div className='Eval'>
                <div className='eval-title'>评价</div>
                <div className='eval-total'>
                    <div className='eval-score'><span>{score}</span>分</div>
                    <div className='eval-star-container'>
                        <div className='eval-num'>{evalNum}人评价</div>
                        <div className='eval-star'>{star}</div>
                    </div>
                </div>
                <div className='eval-spec'>{newDesc}</div>
                <div className='eval-user-container'>
                    {newUser}
                    <div className='read-more'>查看更多评价</div>
                </div>
            </div>
        )
    }
}