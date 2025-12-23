import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination } from 'swiper/modules'

function HeroSlider() {
    return (
        <div className="ai-hero-slide-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Swiper
                            modules={[EffectCoverflow, Pagination]}
                            effect="coverflow"
                            grabCursor={true}
                            centeredSlides={true}
                            loop={true}
                            speed={2500}
                            spaceBetween={0}
                            slidesPerView={1}
                            coverflowEffect={{
                                rotate: 30,
                                stretch: 75,
                                depth: 100,
                                modifier: 1,
                                slideShadows: false,
                            }}
                            pagination={{
                                el: '.ai-hero-pagination',
                                clickable: true,
                            }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    speed: 1500,
                                    coverflowEffect: {
                                        stretch: 150,
                                    },
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                992: {
                                    slidesPerView: 3,
                                },
                            }}
                            className="ai-hero-slider"
                        >
                            <SwiperSlide>
                                <img src="/assets/images/new-images-v4/1.png" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/assets/images/new-images-v4/2.png" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/assets/images/new-images-v4/3.png" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/assets/images/new-images-v4/4.png" alt="" />
                            </SwiperSlide>
                        </Swiper>
                        <div className="ai-hero-pagination mt-4"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSlider
