import React, { useState } from 'react'
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap'
import Style from './slideShow.module.scss'
const cssModule = {
  carousel: Style.carousel,
  'carousel-item': Style.carouselItem,
  active: Style.carouselItemActive,
}

export default function SlideShow({ phrases }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === phrases.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? phrases.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  // const goToIndex = (newIndex) => {
  //   if (animating) return
  //   setActiveIndex(newIndex)
  // }

  const slides = phrases.map((item) => {
    return (
      <CarouselItem
        cssModule={cssModule}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item}
      >
        {item}
        {/* <img src={item.src} alt={item.altText} /> */}
        {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> */}
      </CarouselItem>
    )
  })

  return (
    <Carousel cssModule={cssModule} activeIndex={activeIndex} next={next} previous={previous}>
      {slides}
      {/* <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} /> */}
    </Carousel>
  )
}
