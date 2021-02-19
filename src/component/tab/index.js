import React from 'react'
import './index.css'

export default class Tab extends React.Component {
  constructor(props) {
    super()
    this.state = {
      initTab: 1,
      needFixed:true,
      isSticky:false,
    }
  }
  componentDidMount(){
    window.addEventListener("scroll",this.scrollFun)
    window.addEventListener("scroll",this.changeIdx)

  }
  changeClass = (idx) => {
    this.setState({
      initTab: idx
    })
    this.goEvaAndCommend(idx)
  }
  scrollFun=() =>{
    const tabTop=window.pageYoffset || document.documentElement.scrollTop || document.body.scrollTop;
    const offTop=document.getElementById("tab").offsetTop
    if(tabTop > offTop){
      this.setState({
        isSticky:true
      })
    }else {
      this.setState({
        isSticky:false
      })
    }
  }
  changeIdx = () => {
    const scroll=window.pageYoffset || document.documentElement.scrollTop || document.body.scrollTop
    if(scroll < 1056) {
      this.setState({
        initTab:1
      })
    }
    else if(scroll >= 1056 && scroll < 1780){
      this.setState({
        initTab:2
      })
    }
    else if(scroll >= 1780){
      this.setState({
        initTab:3
      })
    }
  }
  goEvaAndCommend(idx){
    if(idx === 1){
      window.scrollTo(0,0)
    }
    else if(idx === 2){
      window.scrollTo(0,1056)
      //console.log(window.pageYoffset || document.documentElement.scrollTop || document.body.scrollTop)
    } else if(idx === 3){
      window.scrollTo(0,1782)
    }
  }
  
  render() {
    return (
      <div className='Tab'>
        <div className={ !!this.state.isSticky ? 'tab-box  sticky':'tab-box'} id={'tab'}>
          <div onClick={() => this.changeClass(1)} className={this.state.initTab === 1  ? 'directory tab-common high-light' : 'directory tab-common '} >目录</div>
          <div onClick={() => this.changeClass(2)} className={this.state.initTab === 2  ? 'evaluation tab-common high-light' : 'evaluation tab-common'}>评价<span>(999)</span></div>
          <div onClick={() => this.changeClass(3)} className={this.state.initTab === 3  ? 'recommend tab-common high-light' : 'recommend tab-common'} >推荐</div>
        </div>
        <div className='cover-container'>
          <div className='laminated'></div>
          <div className='cover'></div>
          <div className='lesson-title'>
            <div className='cover-title'>心的视界摄影零基心的视界摄影零基心的视界摄影零基心的视界摄影零基</div>
            <div className='time'>全部20课时</div>
          </div>
        </div>
        <div className='tab-directory'></div>
      </div>
    )
  }
}