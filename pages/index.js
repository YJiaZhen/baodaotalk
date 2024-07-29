import { Box, Image, Text, Button, AspectRatio, extendTheme } from '@chakra-ui/react';
import React, { useState } from 'react';
import { poppins, roboto } from '../app/fonts'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import CustomPagination from './CustomPagination'; // 引入自訂分頁指示器
import StarRating from './StarRating';
// Import Swiper styles
import 'swiper/css';
 
  
  
export default function Home() {
    console.log('poppins',poppins)
  return (
    <Box>
      <Box
        display="flex"
        width="320px"
        height="76px"
        padding="8px 14px 8px 0px"
        alignItems="center"
        gap="135px"
        bg="var(--White--Background)"
      >
        <Box
          display="flex"
          height="60px"
          padding="4px 0px 5px 10px"
          justifyContent="flex-end"
          alignItems="center"
          bg="var(--White--Background)"
        >
          <Image
            src="https://static-prod-baodao.s3.amazonaws.com/logo-horizontal-v2.png"
            alt="Logo"
            width="100%" // 確保圖片填滿容器
            height="100%"
            objectFit="cover" // 確保圖片按比例縮放
          />
          <Box
            position="absolute"
            top="26px"
            bottom="26px"
            right="14px"
            left="282px"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#313030"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 12H21M3 6H21M3 18H21" />
            </svg>
          </Box>
        </Box>
      </Box>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
    </Box>
  );
}

function Page1() {
  return (
    <Box
      width="320px"
      height="614px"
      bg="var(--White--Background)"
    >
      <Box 
        width="284px"
        color="#7959E4"
        fontFamily={poppins.style.fontFamily}
        fontSize="18px"
        fontStyle="normal"
        fontWeight="700"
        lineHeight="26px"
        padding="32px 20px 0px 16px"
      >
        Online Mandarin Learning
      </Box>
      <Box 
        width="288px"
        color="var(--Grey-100)"
        fontFamily={poppins.style.fontFamily}
        // className={poppins.className}
        fontSize="24px"
        fontStyle="normal"
        fontWeight="700"
        lineHeight="33px"
        padding="12px 20px 0px 16px"
      >
        Learn Taiwan's Language: Traditional Chinese
      </Box>
      <Box 
        width="288px"
        color="var(--Grey-100)"
        fontFamily={roboto.style.fontFamily}
        fontSize="16px"
        fontStyle="normal"
        fontWeight="400"
        lineHeight="24px"
        padding="20px 16px 0px 16px"
      >
        1-on-1 online Mandarin classes: Immerse yourself in Mandarin and Taiwanese culture simultaneously and flexibly.
      </Box>
      <Button
        display="flex"
        width="288px"
        height="40px"
        padding="8px 24px"
        justifyContent="center"
        alignItems="center"
        flexShrink="0"
        borderRadius="4px"
        background="#7959E4"
        mt="16px" // 上方距離
        ml="16px" // 左側距離
        mr="16px" // 右側距離
      >
        <Text
          color="var(--White--Background)"
          fontFamily={roboto.style.fontFamily}
          fontSize="16px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="26px"
        >
          Get started
        </Text>
      </Button>
      <Image
        src="https://static-prod-baodao.s3.amazonaws.com/taipei101+.png"
        width="288px" 
        height="221px"
        flexShrink="0"
        mt="20px" // 上方距離
        mb="32px" // 下方距離
        ml="16px" // 左側距離
        mr="16px" // 右側距離
      />
    </Box>
  );
}

function Page2() {
   return (
    <Box 
        display="flex"
        width="320px"
        height="376px"
        padding="32px 16px 0px 16px"
        flexDirection="column"
        alignItems="center"
        gap="20px"
        background="#FAFAFA"
      >
        <AspectRatio maxW="288px" ratio={288/ 252} width="100%">
        <video
         
          src="path/to/your-video.mp4"
          controls
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
        </video>
      </AspectRatio>
      <Button
        display="flex"
        width="288px"
        height="40px"
        padding="12px 24px"
        justifyContent="center"
        alignItems="center"
        
        borderRadius="4px"
        background="var(--Primary-200)"
        ml="16px" // 左側距離
        mb="32px" // 下方距離
        mr="16px" // 右側距離
      >
        <Text
          color="var(--White--Background)"
          fontFamily={roboto.style.fontFamily}
          fontSize="16px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="26px"
        >
          Book a free trial 
        </Text>
      </Button>
    </Box>
   );
}
function Page3() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      title: 'Learning Taiwan\'s Language: Traditional Chinese',
      description: 'Want to learn Taiwanese Chinese? BaoDao Talk is the right place for you! We specialize...',
      linkText: 'read more',
    },
    {
      title: '!!Learning Taiwan\'s Language: Traditional Chinese',
      description: 'Want to learn Taiwanese Chinese? BaoDao Talk is the right place for you! We specialize...',
      linkText: 'read more',
    },
    // 可以添加更多的 slide 內容
  ];
    return (
    <Box
        width="320px"
        height="454px"
        bg="var(--White--Background)"
      >
        <Box 
          color="var(--Grey-100)"
          fontFamily={poppins.style.fontFamily}
          fontSize="20px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="30px"
          padding="32px 106px 0px 16px"
        >
          Why BaoDao Talk?
        </Box>
        {/* 灰色框*/}
        <Swiper
      spaceBetween={10}
      slidesPerView={1}
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <Box 
            display="flex"
            width="289px"
            height="312px"
            padding="20px"
            flexDirection="column"
            alignItems="flex-start"
            gap="16px"
            flexShrink="0"
            margin="24px 16px 0px 16px"
            borderRadius="8px"
            border="1px solid var(--Grey-10)"
            background="#FAFAFA"
          >
            {/* 外層橘色圈 */}
            <Box position="relative" width="80px" height="80px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 80 80"
                fill="none"
                width="80px"
                height="80px"
                style={{ position: 'absolute', top: 0, left: 0 }}
              >
                <path 
                  opacity="0.1" 
                  fillRule="evenodd" 
                  clipRule="evenodd" 
                  d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z" 
                  fill="#FAA02B"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
                fill="none"
                width="40px"
                height="40px"
                style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              >
                <path 
                  d="M19.9987 33.3332H8.66536C6.79852 33.3332 5.8651 33.3332 5.15206 32.9699C4.52486 32.6503 4.01492 32.1403 3.69534 31.5131C3.33203 30.8001 3.33203 29.8667 3.33203 27.9998V11.9998C3.33203 10.133 3.33203 9.19957 3.69534 8.48654C4.01492 7.85933 4.52486 7.34939 5.15206 7.02982C5.8651 6.6665 6.79852 6.6665 8.66536 6.6665H9.33203C13.0657 6.6665 14.9326 6.6665 16.3586 7.39313C17.613 8.03228 18.6329 9.05215 19.2721 10.3066C19.9987 11.7326 19.9987 13.5995 19.9987 17.3332M19.9987 33.3332V17.3332M19.9987 33.3332H31.332C33.1989 33.3332 34.1323 33.3332 34.8453 32.9699C35.4725 32.6503 35.9825 32.1403 36.3021 31.5131C36.6654 30.8001 36.6654 29.8667 36.6654 27.9998V11.9998C36.6654 10.133 36.6654 9.19957 36.3021 8.48654C35.9825 7.85933 35.4725 7.34939 34.8453 7.02982C34.1323 6.6665 33.1989 6.6665 31.332 6.6665H30.6654C26.9317 6.6665 25.0648 6.6665 23.6388 7.39313C22.3843 8.03228 21.3645 9.05215 20.7253 10.3066C19.9987 11.7326 19.9987 13.5995 19.9987 17.3332" 
                  stroke="#FE9000" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
            <Box 
              width="258px"
            >
              <Text
                color="var(--Grey-100)"
                fontFamily={poppins.style.fontFamily}
                fontSize="18px"
                fontStyle="normal"
                fontWeight="700"
                lineHeight="28px"
              >
                {slide.title}
              </Text>
            </Box>
            <Box
              height="72px"
              flexShrink="0"
              alignSelf="stretch"
              display="flex"
              alignItems="center"
            >
              <Text
                color="var(--Grey-100)"
                fontFamily={roboto.style.fontFamily}
                fontSize="16px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="24px" /* 150% */
              >
                {slide.description}
                <span
                  color="var(--Grey-100)"
                  fontFamily="Roboto, sans-serif"
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="24px"
                  style={{
                    textDecoration: 'underline'
                  }}
                >
                  {slide.linkText}
                </span>
              </Text>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
    <CustomPagination activeIndex={activeIndex} totalSlides={slides.length} />
    </Box>
    );
}
function Page4() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      text: "Culinary Essentials changed the way I cook! The personalized feedback from professional chefs helped me improve faster than I ever thought possible.",
      name: "Alex Lee",
      role: "Business manager",
      image: "https://static-prod-baodao.s3.amazonaws.com/man.png",
      rating: 5
    },
    {
      text: "Culinary Essentials changed the way I cook! Culinary Essentials changed the way I cook! The personalized feedback from professional chefs helped me improve faster than I ever thought possible.",
      name: "Lee ",
      role: "manager",
      image: "https://static-prod-baodao.s3.amazonaws.com/man.png",
      rating: 4
    },
    
    // 您可以在這裡添加更多testimonials
    
  ];
   return (
    <Box
    width="320px"
    height="506px"
    bg="var(--Grey-100)"
    >
      <Box 
        color="var(--Primary-200)"
        fontFamily={poppins.style.fontFamily}
        fontSize="16px"
        fontStyle="normal"
        fontWeight="700"
        lineHeight="28px"
        padding="32px 188px 0px 16px"
      >
        TESTIMONIALS
      </Box>
      <Box 
        color="var(--White--Background)"
        fontFamily={poppins.style.fontFamily}
        fontSize="20px"
        fontStyle="normal"
        fontWeight="700"
        lineHeight="30px"
        padding="0px 16px 0px 16px"
      >
        What our students say about us
      </Box>
      {/* 白色框*/}
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <Box 
              display="flex"
              width="289px"
              height="312px"
              padding="21.93px 24px 20px 24px"
              flexDirection="column"
              alignItems="flex-start"
              gap="20.148px"
              margin="24px 16px 0px 16px"
              borderRadius="8px"
              background="var(--White--Background)"
              boxShadow="0px 1px 7.2px 0px rgba(0, 0, 0, 0.11)"
            >
              {/* 5 star */}
              <StarRating rating={testimonial.rating} />
              {/* <Box display="flex" gap="4px">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <svg
                    key={starIndex}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <g clipPath={`url(#clip0_12230_27167_${starIndex})`}>
                      <path d="M23.5477 9.80207C23.3715 9.27915 22.9174 8.8979 22.3706 8.81454L16.0072 7.84534L13.149 1.7763C12.9052 1.25899 12.3844 0.929688 11.8121 0.929688C11.2395 0.929688 10.719 1.25899 10.4752 1.7763L7.61661 7.84571L1.25324 8.81492C0.706486 8.89827 0.252361 9.27915 0.0764861 9.80244C-0.099389 10.3257 0.033361 10.9021 0.419986 11.2976L5.06699 16.0472L3.96636 22.7666C3.87561 23.3228 4.11224 23.8819 4.57386 24.2071C5.03511 24.5323 5.64411 24.5652 6.14024 24.2923L11.8125 21.1657L17.4847 24.2923C17.7086 24.4157 17.955 24.4762 18.2002 24.4762C18.4987 24.4762 18.7972 24.3858 19.0511 24.2071C19.5127 23.8823 19.749 23.3231 19.6582 22.7666L18.5576 16.0472L23.205 11.2976C23.5909 10.9021 23.7236 10.3257 23.5477 9.80207Z" fill="#FFE70A" />
                    </g>
                    <defs>
                      <clipPath id={`clip0_12230_27167_${starIndex}`}>
                        <rect width="24" height="23.9218" fill="white" transform="translate(0 0.929688)" />
                      </clipPath>
                    </defs>
                  </svg>
                ))}
              </Box> */}
              <Box
              display="flex"
              // flexDirection="column" // 設定為縱向排列
              height="240px" // 高度根據內容自適應
              width="240px"
              overflow="auto" // 超出內容顯示滾動條 
              // background="#FAFAFA"
              >
                <Text
                  color="var(--Grey-100)"
                  fontFamily="Roboto, sans-serif"
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="24px"
                >
                  {testimonial.text}
                </Text>
              </Box>
              <Box 
                display="flex"
                height="80px"
                paddingTop="20px"
                justifyContent="flex-end"
                alignItems="center"
                gap="16px"
                borderTop="1px solid var(--Grey-10)"
              >
                <Box
                  position="relative"
                  width="60px"
                  height="60px"
                  borderRadius="50%"
                  overflow="hidden"
                  border="1px solid var(--Grey-100)"
                  zIndex="1"
                >
                  <Box
                    position="absolute"
                    top="0"
                    left="0"
                    width="100%"
                    height="100%"
                    background={`url(${testimonial.image}) center / cover no-repeat`}
                    backgroundSize="250%"
                    backgroundPosition="top 2px right -50px"
                    zIndex="-1"
                  />
                </Box>
                <Box width="169px">
                  <Text
                    color="var(--Grey-100)"
                    fontFamily="Roboto, sans-serif"
                    fontSize="16px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="24px"
                  >
                    {testimonial.name}
                  </Text>
                  <Text
                    color="var(--Grey-100)"
                    fontFamily="Roboto, sans-serif"
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="22px"
                  >
                    {testimonial.role}
                  </Text>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      <CustomPagination activeIndex={activeIndex} totalSlides={testimonials.length} />
    </Box>
   );
}
function Page5() {
   return (
    <Box
    width="320px"
    height="268px"
    bg="var(--White--Background)"
    >
      <Text
      color="#7156E5"
      fontFamily={poppins.style.fontFamily}
      fontSize="16px"
      fontStyle="normal"
      fontWeight="700"
      lineHeight="28px"
      textTransform="uppercase"
      padding="32px 33px 0px 16px"
      >
      Learn Once, Remember Forever
      </Text>
      <Text
      color="var(--Grey-100)"
      fontFamily={poppins.style.fontFamily}
      fontSize="20px"
      fontStyle="normal"
      fontWeight="700"
      lineHeight="30px"
      padding="0px 16px 0px 16px"
      >
          Exclusive teaching & learning materials
      </Text>
      <Box
      display="flex"
      width="288px"
      height="48px"
      justifyContent="center"
      alignItems="center"
      flexShrink="0"
      borderRadius="4px"
      background="#E2D4F4"
      mt="24px"
      ml="16px" // 左側距離
      // mb="12px" // 下方距離
      mr="16px" // 右側距離
    >
      <Text
        color="var(--Grey-100)"
        fontFamily={poppins.style.fontFamily}
        fontSize="18px"
        fontStyle="normal"
        fontWeight="700"
        lineHeight="28px"
      >
        BaoDao series
      </Text>
    </Box>
    <Box
      display="flex"
      width="288px"
      height="48px"
      justifyContent="center"
      alignItems="center"
      flexShrink="0"
      borderRadius="4px"
      background="var(--Grey-10)"
      mt="12px"
      ml="16px" // 左側距離
      mb="16px" // 下方距離
      mr="16px" // 右側距離
    >
      <Text
        color="#6F6E6E"
        fontFamily={poppins.style.fontFamily}
        fontSize="18px"
        fontStyle="normal"
        fontWeight="700"
        lineHeight="28px"
      >
        Let’s Learn Chinese
      </Text>
    </Box>
  </Box>
   );
}  
function Page6() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    { src: 'https://static-prod-baodao.s3.amazonaws.com/bread.png', alt: 'Image 1' },
    { src: 'https://static-prod-baodao.s3.amazonaws.com/bread2.png', alt: 'Image 2' },
    { src: 'https://static-prod-baodao.s3.amazonaws.com/bread3.png', alt: 'Image 3' },
    // 這裡可以添加更多圖片
  ];

  return (
    <Box
      width="320px"
      height="645px"
      bg="#E2D4F4"
      padding="24px 16px 0px 16px"
    >
      {/* 白色框 */}
      <Box 
        width="288px"
        height="364px"
        padding="20px"
        flexShrink="0"
        borderRadius="4px"
        background="var(--White--Background)"
      >
        {/* BaoDao series和底部紫條 */}
        <Box
          position="relative"
          display="inline-block"
        >
          <Box
            position="absolute"
            top="20px"
            bottom="327px"
            right="145px"
            left="0px"
            width="137px"
            height="8px"
            transform="translateY(-50%)"
            zIndex="0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="135" height="15" viewBox="0 0 135 15" fill="none">
              <path d="M1 6.20212C18.0604 4.79099 80.1601 2.04644 131 6.20213C104.61 6.20213 70.2256 6.62234 48.0866 11" stroke="#E2D4F4" strokeWidth="8" strokeLinejoin="round"/>
            </svg>
          </Box>
          <Text
            position="relative"
            zIndex="1" 
            color="var(--Grey-100)"
            fontFamily={poppins.style.fontFamily}
            fontSize="18px"
            fontStyle="normal"
            fontWeight="700"
            lineHeight="28px"
          >
            BaoDao series
          </Text>
        </Box>
        <Box 
          width="261px"
          height="216px"
          padding="12px 0px 0px 0px"
        >
          <Text
            color="var(--Grey-100)"
            fontFamily={roboto.style.fontFamily}
            fontSize="16px"
            fontStyle="normal"
            fontWeight="400"
            lineHeight="24px"
          >
            Our teaching materials are in Traditional Chinese, focusing on Taiwanese life and culture. The course includes various exercises and practical example sentences. Designed in a spiral structure, it continually revisits, deepens, and expands learned content while integrating new and old material.
          </Text>
        </Box> 
        {/* 分隔線 */}
        <Box
          strokeWidth="1px"
          stroke="var(--Grey-100)"
          padding="20px 0px 0px 0px"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="253" height="2" viewBox="0 0 261 2" fill="none">
            <path d="M0 1H261" stroke="#313030"/>
          </svg>
        </Box>
        {/* 分隔線下方區塊 */}
        <Box display="flex">
          <Box padding="17px 0px 0px 0px">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M9.80952 0C4.39957 0 0 4.485 0 10C0 15.515 4.39957 20 9.80952 20C15.2195 20 19.619 15.515 19.619 10C19.619 4.485 15.2195 0 9.80952 0ZM15.8865 6.96L8.61276 14.375C8.12719 14.785 7.69557 14.785 7.24433 14.375L3.72762 10.8C3.36467 10.43 3.36467 9.825 3.72762 9.455C4.09057 9.085 4.67424 9.085 5.03719 9.455L7.92119 12.395L14.572 5.615C14.935 5.245 15.5187 5.245 15.8816 5.615C16.2446 5.985 16.2446 6.59 15.8816 6.96H15.8865Z" fill="#313030"/>
            </svg>
          </Box>
          <Box 
            width="229px"
            padding="14px 0px 0px 8px"
          >
            <Text
              color="var(--Grey-100)"
              fontFamily={roboto.style.fontFamily}
              fontSize="14px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="22px"
            >
              Ideal for beginners and basic level learners
            </Text>
          </Box> 
        </Box>
      </Box>
      
      {/* 課程簡報 */}
      <Box position="relative" width="288px" height="189px">
        <Swiper
          spaceBetween={50} // 每個 slide 之間的間距
          slidesPerView={1} // 每次顯示一個 slide
          onSlideChange={(swiper) => {
            console.log(`Current slide index: ${swiper.activeIndex}`);// 顯示當前 slide 的索引
            setActiveIndex(swiper.activeIndex);// 更新活動的 slide 索引
          }}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image.src}
                width="288px"
                height="189px"
                flexShrink="0"
                boxShadow="0px 2px 4px 0px rgba(0, 0, 0, 0.15)"
                mt="20px"
              />
              
            </SwiperSlide>
          ))}
        </Swiper>
        <Box
          position="absolute" // 絕對定位於容器內
          bottom="-8px"
          right="8px"
          display="inline-flex"
          padding="0px 12px 0px 13px"
          justifyContent="center"
          alignItems="center"
          borderRadius="35px"
          background="rgba(111, 110, 110, 0.74)"
          zIndex="1"
        >
          <Text
            color="#FFF"
            fontFamily={roboto.style.fontFamily}
            fontSize="12px"
            fontStyle="normal"
            fontWeight="400"
            lineHeight="22px"
            letterSpacing="1px"
          >
            {/* 顯示當前 slide 的索引及總數 */}
            {activeIndex + 1}/{images.length}
          </Text>
        </Box>
      </Box>
      {/* 分頁指示元件 */}
      <Box
        padding="22px 50px 0px 0px"
        
        // position="absolute" // 絕對定位於容器內
        // top="20px" // 距離容器底部的距離
        // right="55px" // 距離容器右邊的距離
        zIndex="1" // 設置層級，確保它顯示在圖片上面
      >
       <CustomPagination activeIndex={activeIndex} totalSlides={images.length} />
     </Box>
      {/* <Box padding="16px 118px 32px 119px" width="83px" height="8px">
        <svg xmlns="http://www.w3.org/2000/svg" width="83" height="8" viewBox="0 0 83 8" fill="none">
          <rect width="48" height="8" rx="4" fill="#7156E5"/>
          <rect x="52" width="8" height="8" rx="4" fill="#ADACAC"/>
          <rect x="64" width="8" height="8" rx="4" fill="#ADACAC"/>
          <rect x="75" width="8" height="8" rx="4" fill="#ADACAC"/>
        </svg>
      </Box> */}
    </Box>
  );
}
function Page7() {
  return (
    <Box
      // display="flex"
      width="320px"
      height="1028px"
      // padding="32px 16px 936px 16px"
      flexDirection="cloumn"
      alignItems="center"
      flexShrink="0"
      bg="var(--White--Background)"
    >
      <Box
       height="60px"
       flexShrink="0"
       margin="32px 16px 28px 16px"
      >
        <Text
          color="var(--Grey-100)"
          fontFamily={poppins.style.fontFamily}
          fontSize="20px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="30px"
        >
          Take a closer look at BaoDao Talk
        </Text>

      </Box>
      <Box
        height="910px"
      >

        
      </Box>
    </Box>
);
} 