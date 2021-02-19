import React from 'react'
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css'

export default class SwiperPra extends React.Component{
  constructor(props){
    super()
    this.state={
      name:'lily',
      age:'12',
      gender:'mail'
    }
  }

  componentDidMount() {
    new Swiper('.swiper-container', {
      initialSlide: 0,
      direction: 'horizontal',
      grabCursor: true,
      autoplay: true,
      loop: true,
      observer:true, 
      observeParents:true,
    })

  }
  render(){
    const {title,score,playNum}=this.props.data
    return(
      <div className='Swiper'>
        <div className='swiper-container'>
          <div className='swiper-wrapper'>
            <div className='swiper-slide'>
              <div style={{width:'200px',height:'200px',background:'pink'}}>{title}</div>
            </div>
            <div className='swiper-slide'>
              <div style={{width:'200px',height:'200px',background:'red'}}>{score}</div>
            </div>
            <div className='swiper-slide'>
              <div style={{width:'200px',height:'200px',background:'blue'}}>{playNum}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
} 