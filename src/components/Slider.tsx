
import { forwardRef } from 'react'
import SlickSlider, { Settings } from 'react-slick'


export type SliderSettings = Settings

export type SliderProps = {
  children: React.ReactNode
  settings: SliderSettings
}

const Slider: React.ForwardRefRenderFunction<SlickSlider, SliderProps> = (
  { children, settings },
  ref
) => {
  return (
    <section className="slick-slider slick-list slick-track slick-loading slick-initialized">
      <SlickSlider ref={ref} {...settings}>
        {children}
      </SlickSlider>
    </section>
  )
}

export default Slider