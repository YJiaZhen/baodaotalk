import { Box, Image, Text, Button, Flex, AspectRatio, VStack, HStack, UnorderedList, ListItem, Link, 
          Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon,
          Input, Select, Textarea, IconButton,
          FormControl, FormLabel, FormErrorMessage,
          Menu, MenuButton, MenuList, MenuItem, useMediaQuery  } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useBreakpointValue } from '@chakra-ui/media-query';
import React, { useState } from 'react';
import { poppins, roboto } from '../app/fonts'
import { Swiper, SwiperSlide } from 'swiper/react';
import CustomPagination from './CustomPagination'; // 引入自訂分頁指示器
import StarRating from './StarRating';
import SwipeableTable from './SwipeableTable';
import 'swiper/css';
  
  
export default function Home() {
  const isMD = useBreakpointValue({ base: false,  md: true });
    console.log('poppins',poppins)
  return (
    <Box>
      <Box
        display="flex"
        padding="8px 14px 8px 0px"
        bg="var(--White--Background)"
      >
        <Box
          display="flex"
          height="60px"
          padding="4px 0px 5px 10px"
          justifyContent="flex-end"
          alignItems="center"
          bg="var(--White--Background)"
          border-bottom="1px solid #F5F6F9"
        >
          <Image
            src="https://static-prod-baodao.s3.amazonaws.com/logo-horizontal-v2.png"
            alt="Logo"
            width="100%" // 確保圖片填滿容器
            height="100%"
            objectFit="cover" // 確保圖片按比例縮放
          />
          {isMD ? (
          <Box 
            display="flex" 
            alignItems="center"
            position="absolute"
            right="14px"
          >
            <Button variant="link" marginRight="32px">
              <Text
                color="var(--Grey-100)"
                fontFamily={roboto.style.fontFamily}
                fontSize="16px"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="24px"
              >
                Find tutors
              </Text> 
            </Button>
            <Button variant="link" marginRight="32px">
            <Text
                color="var(--Grey-100)"
                fontFamily={roboto.style.fontFamily}
                fontSize="16px"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="24px"
              >
                Become a tutor
              </Text> 
            </Button>
            <Menu>
              <MenuButton 
                as={Button} 
                variant="link" 
                rightIcon={<ChevronDownIcon />} 
                marginRight="32px" 
                color="var(--Grey-100)"
                >
                  <Text
                    color="var(--Grey-100)"
                    fontFamily={roboto.style.fontFamily}
                    fontSize="16px"
                    fontStyle="normal"
                    fontWeight="500"
                    lineHeight="24px"
                  >
                English
              </Text>
              </MenuButton>
              <MenuList>
                <MenuItem>English</MenuItem>
                <MenuItem>Chinese</MenuItem>
                <MenuItem>Spanish</MenuItem>
              </MenuList>
            </Menu>
            <Button 
              background="#7156E5"
              color="white"
              display="inline-flex"
              padding="8px 37px"
              justify-content="center"
              align-items="center"
              borderRadius="4px"
            >Log in</Button>
          </Box>
        ) : (
          <Box
            position="absolute"
            top="26px"
            bottom="26px"
            right="14px"
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
        )}
        </Box>
      </Box>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
      <Page8 />
      <Page9 />
      <Page10 />
    </Box>
  );
}

function Page1() {
  return (
    <Flex
      bg="var(--White--Background)"
      direction={{ base: 'column', md: 'row' }}
      align={{ base: 'center', md: 'flex-start' }}
      justify="space-between"
      p={{ base: 0, md: 'auto' }}
    >
      <Box 
        flex="1"
        maxW={{ base: '100%', md: 'auto' }}
      >
        <Box
          color="#FDBA3E"
          fontFamily={poppins.style.fontFamily}
          fontSize={{ base: '18px', xl: '24px' }}
          fontWeight="700"
          lineHeight={{ base: '26px', xl: '36px' }}
          padding="16px"
        >
          Online Mandarin Learning
        </Box>
        <Box
          color="var(--Grey-100)"
          fontFamily={poppins.style.fontFamily}
          fontSize={{ base: '24px', xl: '48px' }}
          fontWeight="700"
          lineHeight={{ base: '33px', xl: '60px' }}
          padding="16px"
        >
          Learn Taiwan's Language: Traditional Chinese
        </Box>
        <Box
          color="var(--Grey-100)"
          fontFamily={roboto.style.fontFamily}
          fontSize={{ base: '16px', xl: '20px' }}
          fontWeight="400"
          lineHeight={{ base: '24px', xl: '30px' }}
          padding="16px"
        >
          1-on-1 online Mandarin classes: Immerse yourself in Mandarin and Taiwanese culture simultaneously and flexibly.
        </Box>
        <Button
          width="288px"
          height="40px"
          borderRadius="4px"
          background="#FDBA3E"
          _hover={{ bg: '#FE9000' }}
          mb="16px"
          ml="16px"
          
        >
          <Text
            color="var(--White--Background)"
            fontFamily={roboto.style.fontFamily}
            fontSize="16px"
            fontWeight="700"
            lineHeight="26px"
          >
            Get started
          </Text>
        </Button>
      </Box>
      
      <Box
        display="flex"
        justifyContent={{ base: 'center', md: 'flex-end' }}
        width={{ base: '100%', md: 'auto' }}
        mt={{ base: 8, md: 0 }}
        flex="1"
      >
        <Image
          src="https://static-prod-baodao.s3.amazonaws.com/taipei101+.png"
          alt="Taipei 101"
          maxW="100%"
          objectFit="contain"
        />
      </Box>
    </Flex>
  );
}

function Page2() {
  const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");

  return (
    <Box 
      display="flex"
      padding={{ base: "32px 16px 0px 16px", md: "32px 16px" }}
      flexDirection="column"
      alignItems="center"
      gap="20px"
      background="#FAFAFA"
      width="100%"
    >
      <AspectRatio maxW="580px" ratio={400 / 252} width="100%" zIndex="1" >
      <iframe
        src="https://www.youtube.com/embed/t5s7SBwDlYQ"
        allowFullScreen
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      </AspectRatio>
      
      {isLargerThanMD && (
        <Box position="relative" width="100%" maxWidth="700px">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="132" viewBox="0 0 42 142" fill="none" style={{position: 'absolute', left: '3%', transform: 'translateX(-50%)', top: '-150px'}}>
            <path d="M21.6342 113.146C23.3491 110.71 22.5434 108.523 22.8147 106.46C22.9891 105.047 23.251 103.537 23.9039 102.343C25.3081 99.787 29.2304 99.9345 30.4162 102.512C30.9886 103.815 31.3911 105.278 31.5079 106.698C32.2208 115.625 32.8926 124.583 33.4519 133.56C33.5721 135.202 33.2367 136.959 32.7389 138.582C32.0047 141.055 29.0334 142.121 26.882 140.874C26.2767 140.525 25.6877 140.067 25.1343 139.615C19.7792 135.119 14.3776 130.689 9.11012 126.096C7.88205 125.025 6.7739 123.641 6.00877 122.16C4.53379 119.318 6.14147 116.867 9.40132 116.804C10.3159 116.794 11.2641 117.047 12.8001 117.278C12.4797 115.754 12.3448 114.7 11.9902 113.651C9.77334 106.97 7.5511 100.325 5.29315 93.6752C0.308637 78.8655 0.134666 63.6358 2.02026 48.3101C2.62412 43.5299 3.89248 38.7022 5.79104 34.3014C8.7561 27.4041 12.2711 20.7372 15.9789 14.247C20.1732 6.94429 26.8318 2.7063 34.8231 0.550852C36.1541 0.197626 37.7439 0.0678592 39.0386 0.447208C39.9815 0.73671 41.122 1.90468 41.3088 2.85534C41.4956 3.806 40.83 5.3295 40.0132 5.90772C38.7336 6.896 37.0434 7.45349 35.4907 8.06857C29.1924 10.6264 24.47 14.8606 21.368 20.9623C18.2034 27.2391 14.4942 33.2494 12.5616 40.0806C8.33807 55.1651 8.41023 70.3427 12.1513 85.4081C14.1777 93.61 17.2635 101.565 19.8936 109.637C20.2732 110.764 20.9297 111.749 21.6342 113.146Z" fill="#7156E5"/>
          </svg>

          <Flex
            direction="row"
            alignItems="center"
            justifyContent="center"
            width="100%"
            height="140px"
            bg="var(--Primary-50)"
            borderRadius="8px"
            p={5}
            mt="-70px"
          >
            <Box
              width="auto"
              height="20px"
              pr="20px"
              pt="25px"
            >
            <Text
              color="var(--Grey-100)"
              fontFamily={poppins.style.fontFamily}
              fontSize="15px"
              fontStyle="normal"
              fontWeight="700"
              lineHeight="30px"
              textAlign="left"
            >
              Trusted by happy students and professional tutors
            </Text>
            </Box>
            
            <Button
              height="40px"
              padding="12px 24px"
              justifyContent="center"
              alignItems="center"
              _hover={{ bg: '#7156E5' }}
              borderRadius="4px"
              background="var(--Primary-200)"
              mt="45px"
            >
              <Text
                color="var(--White--Background)"
                fontFamily={roboto.style.fontFamily}
                fontSize="16px"
                fontWeight="700"
                lineHeight="26px"
              >
                Book a free trial 
              </Text>
            </Button>
          </Flex>
        </Box>
      )}

      {!isLargerThanMD && (
        <Button
          width="288px"
          height="40px"
          padding="12px 24px"
          mb={5}
          justifyContent="center"
          alignItems="center"
          _hover={{ bg: '#7156E5' }}
          borderRadius="4px"
          background="var(--Primary-200)"
        >
          <Text
            color="var(--White--Background)"
            fontFamily={roboto.style.fontFamily}
            fontSize="16px"
            fontWeight="700"
            lineHeight="26px"
          >
            Book a free trial 
          </Text>
        </Button>
      )}
    </Box>
  );
}
function Page3() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isXL = useBreakpointValue({ base: false, xl: true });
  
  const slides = [
    {
      title: 'Learning Taiwan\'s Language: Traditional Chinese',
      description: 'Want to learn Taiwanese Chinese? BaoDao Talk is the right place for you! We specialize...',
      linkText: 'read more',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 40 40" fill="none" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <path d="M19.9987 33.3332H8.66536C6.79852 33.3332 5.8651 33.3332 5.15206 32.9699C4.52486 32.6503 4.01492 32.1403 3.69534 31.5131C3.33203 30.8001 3.33203 29.8667 3.33203 27.9998V11.9998C3.33203 10.133 3.33203 9.19957 3.69534 8.48654C4.01492 7.85933 4.52486 7.34939 5.15206 7.02982C5.8651 6.6665 6.79852 6.6665 8.66536 6.6665H9.33203C13.0657 6.6665 14.9326 6.6665 16.3586 7.39313C17.613 8.03228 18.6329 9.05215 19.2721 10.3066C19.9987 11.7326 19.9987 13.5995 19.9987 17.3332M19.9987 33.3332V17.3332M19.9987 33.3332H31.332C33.1989 33.3332 34.1323 33.3332 34.8453 32.9699C35.4725 32.6503 35.9825 32.1403 36.3021 31.5131C36.6654 30.8001 36.6654 29.8667 36.6654 27.9998V11.9998C36.6654 10.133 36.6654 9.19957 36.3021 8.48654C35.9825 7.85933 35.4725 7.34939 34.8453 7.02982C34.1323 6.6665 33.1989 6.6665 31.332 6.6665H30.6654C26.9317 6.6665 25.0648 6.6665 23.6388 7.39313C22.3843 8.03228 21.3645 9.05215 20.7253 10.3066C19.9987 11.7326 19.9987 13.5995 19.9987 17.3332" stroke="#FE9000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: 'Comprehensive Customized Services',
      description: 'Want to learn Taiwanese Chinese? BaoDao Talk is the right place for you! We specialize...',
      linkText: 'read more',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 40 40" fill="none" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <path d="M36.6654 20.0002H33.332M31.7836 31.7853L29.4266 29.4283M6.66536 20.0002H3.33203M10.5702 10.5721L8.21322 8.21509M19.9987 6.66683V3.3335M29.4266 10.5721L31.7836 8.21509M19.9987 36.6668V33.3335M8.21322 31.7853L10.5702 29.4283M19.9987 11.6668L22.5737 16.8835L28.332 17.7252L24.1654 21.7835L25.1487 27.5168L19.9987 24.8085L14.8487 27.5168L15.832 21.7835L11.6654 17.7252L17.4237 16.8835L19.9987 11.6668Z" stroke="#FE9000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: 'Fully Integrated Teaching Material System',
      description: 'Want to learn Taiwanese Chinese? BaoDao Talk is the right place for you! We specialize...',
      linkText: 'read more',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <path d="M34.9987 26.6665V11.9998C34.9987 10.133 34.9987 9.19957 34.6354 8.48654C34.3158 7.85933 33.8059 7.34939 33.1787 7.02982C32.4656 6.6665 31.5322 6.6665 29.6654 6.6665H10.332C8.46519 6.6665 7.53177 6.6665 6.81873 7.02982C6.19152 7.34939 5.68159 7.85933 5.36201 8.48654C4.9987 9.19957 4.9987 10.133 4.9987 11.9998V26.6665M7.77648 33.3332H32.2209C33.2542 33.3332 33.7709 33.3332 34.1948 33.2196C35.3451 32.9114 36.2436 32.0129 36.5518 30.8626C36.6654 30.4387 36.6654 29.922 36.6654 28.8887C36.6654 28.3721 36.6654 28.1137 36.6086 27.9018C36.4545 27.3267 36.0052 26.8774 35.4301 26.7233C35.2181 26.6665 34.9598 26.6665 34.4431 26.6665H5.55425C5.0376 26.6665 4.77928 26.6665 4.56733 26.7233C3.99218 26.8774 3.54293 27.3267 3.38882 27.9018C3.33203 28.1137 3.33203 28.3721 3.33203 28.8887C3.33203 29.922 3.33203 30.4387 3.44561 30.8626C3.75384 32.0129 4.65233 32.9114 5.80263 33.2196C6.22652 33.3332 6.74317 33.3332 7.77648 33.3332Z" stroke="#FE9000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: 'Transparent User Contracts and Refund Policy',
      description: 'Want to learn Taiwanese Chinese? BaoDao Talk is the right place for you! We specialize...',
      linkText: 'read more',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <path d="M18.705 4.05278C19.1776 3.79019 19.414 3.65889 19.6642 3.60741C19.8858 3.56185 20.1142 3.56185 20.3358 3.60741C20.586 3.65889 20.8224 3.79019 21.295 4.05278L33.6284 10.9046C34.1276 11.182 34.3772 11.3206 34.5589 11.5179C34.7197 11.6923 34.8414 11.8992 34.9159 12.1244C35 12.3791 35 12.6646 35 13.2357V26.7642C35 27.3353 35 27.6208 34.9159 27.8755C34.8414 28.1008 34.7197 28.3076 34.5589 28.4821C34.3772 28.6793 34.1276 28.818 33.6284 29.0953L21.295 35.9472C20.8224 36.2098 20.586 36.3411 20.3358 36.3925C20.1142 36.4381 19.8858 36.4381 19.6642 36.3925C19.414 36.3411 19.1776 36.2098 18.705 35.9472L6.37162 29.0953C5.87241 28.818 5.62281 28.6793 5.44106 28.4821C5.28026 28.3076 5.15858 28.1008 5.08414 27.8755C5 27.6208 5 27.3353 5 26.7642V13.2357C5 12.6646 5 12.3791 5.08414 12.1244C5.15858 11.8992 5.28026 11.6923 5.44106 11.5179C5.62281 11.3206 5.87241 11.182 6.37162 10.9046L18.705 4.05278Z" stroke="#FE9000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M19.9943 15.1132C18.3282 13.1653 15.5498 12.6413 13.4622 14.425C11.3747 16.2086 11.0808 19.1908 12.7202 21.3003C13.7702 22.6515 16.4593 25.157 18.2571 26.7839C18.8545 27.3245 19.1532 27.5949 19.511 27.7033C19.8185 27.7965 20.17 27.7965 20.4776 27.7033C20.8354 27.5949 21.1341 27.3245 21.7315 26.7839C23.5293 25.157 26.2184 22.6515 27.2684 21.3003C28.9078 19.1908 28.6498 16.1899 26.5263 14.425C24.4029 12.6601 21.6604 13.1653 19.9943 15.1132Z" stroke="#FE9000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },  
    // 可以添加更多的 slide 內容
  ];

  return (
    <Box
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
      {isXL ? (
        <Box display="flex" flexWrap="wrap" justifyContent="space-around">
          {slides.map((slide, index) => (
            <Box
              key={index}
              display="flex"
              width="22%"
              height="312px"
              padding="20px"
              flexDirection="column"
              alignItems="flex-start"
              gap="16px"
              flexShrink="0"
              margin="24px 16px"
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
                {slide.icon}
              </Box>
              <Box width="258px">
                <Text
                  color="var(--Grey-100)"
                  fontFamily={poppins.style.fontFamily}
                  fontSize="20px"
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
                    fontFamily={roboto.style.fontFamily}
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="24px"
                    style={{ textDecoration: 'underline' }}
                  >
                    {slide.linkText}
                  </span>
                </Text>
              </Box>
            </Box>
          ))}
        </Box>
      ) : (
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Box
                display="flex"
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
                  {slide.icon}
                </Box>
                <Box width="258px">
                  <Text
                    color="var(--Grey-100)"
                    fontFamily={poppins.style.fontFamily}
                    fontSize="20px"
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
                      fontFamily={roboto.style.fontFamily}
                      fontSize="14px"
                      fontStyle="normal"
                      fontWeight="400"
                      lineHeight="24px"
                      style={{ textDecoration: 'underline' }}
                    >
                      {slide.linkText}
                    </span>
                  </Text>
                </Box>
              </Box>
              
            </SwiperSlide>
            
          ))}
          <CustomPagination activeIndex={activeIndex} totalSlides={slides.length} />
        </Swiper>
      )}
    </Box>
  );
}


function Page4() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isXL = useBreakpointValue({ base: false, xl: true });
  const isMD = useBreakpointValue({ base: false, md: true });
  const showArrows = useBreakpointValue({ base: false, md: true });
  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex < testimonials.length - 3 ? prevIndex + 1 : prevIndex));
  };
  const testimonials = [
    {
      text: "Culinary Essentials changed the way I cook! The personalized feedback from professional chefs helped me improve faster than I ever thought possible.",
      name: "Alex Lee",
      role: "Business manager",
      image: "https://static-prod-baodao.s3.amazonaws.com/man.png",
      rating: 5
    },
    {
      text: "Culinary Essentials changed the way I cook! The personalized feedback from professional chefs helped me improve faster than I ever thought possible.",
      name: "Lee ",
      role: "manager",
      image: "https://static-prod-baodao.s3.amazonaws.com/man.png",
      rating: 4
    },
    {
      text: "Culinary Essentials changed the way I cook! The personalized feedback from professional chefs helped me improve faster than I ever thought possible. I can now confidently prepare meals that rival those of my favorite restaurants.",
      name: "Alex Lee",
      role: "Teacher",
      image: "https://static-prod-baodao.s3.amazonaws.com/man.png",
      rating: 3
    },
    {
      text: "Culinary Essentials changed the way I cook! The personalized feedback from professional chefs helped me improve faster than I ever thought possible. I can now confidently prepare meals that rival those of my favorite restaurants.",
      name: "Alex Lee",
      role: "Teacher",
      image: "https://static-prod-baodao.s3.amazonaws.com/man.png",
      rating: 2
    },
    {
      text: "Culinary Essentials changed the way I cook! Culinary Essentials changed the way I cook! The personalized feedback from professional chefs helped me improve faster than I ever thought possible.",
      name: "Lee ",
      role: "manager",
      image: "https://static-prod-baodao.s3.amazonaws.com/man.png",
      rating: 1
    },
    {
      text: "Culinary Essentials changed the way I cook! Culinary Essentials changed the way I cook! The personalized feedback from professional chefs helped me improve faster than I ever thought possible.",
      name: "Lee ",
      role: "manager",
      image: "https://static-prod-baodao.s3.amazonaws.com/man.png",
      rating: 0
    },
    // 您可以在這裡添加更多testimonials
    
  ];
return (
  <Box
    bg="var(--Grey-100)"
    pb="16px"
  >
    {isMD ? (
    <Flex justify="center">
    <Box 
      color="var(--Primary-200)"
      fontFamily={poppins.style.fontFamily}
      fontSize="18px"
      fontStyle="normal"
      fontWeight="700"
      lineHeight="28px"
      padding="32px 0px 12px 0px"
    >
      TESTIMONIALS
    </Box>
    </Flex>
    ) : (
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
    )}
    {isMD ? (
    <Flex justify="center">
    <Box 
      color="var(--White--Background)"
      fontFamily={poppins.style.fontFamily}
      fontSize="32px"
      fontStyle="normal"
      fontWeight="700"
      lineHeight="48px"
      padding="0px 16px 0px 16px"
    >
      What our students say about us
    </Box>
    </Flex>
    ) : (
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
    )}
    {showArrows && (
    <Box 
    position="absolute" 
    // top="60px" 
    right="30px" 
    display="flex" 
    gap="10px"
    >
        <Box as="button" onClick={handlePrev}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M33.3346 20H6.66797M6.66797 20L16.668 30M6.66797 20L16.668 10" stroke={activeIndex > 0 ? "#F5F6F9" : "#6F6E6E"} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Box>
        <Box as="button" onClick={handleNext}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M6.66537 20L33.332 20M33.332 20L23.332 10M33.332 20L23.332 30" stroke={activeIndex < testimonials.length - 3 ? "#F5F6F9" : "#6F6E6E"} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Box>
      </Box>
    )}
    {/* 白色框*/}
    {isXL ? (
      
    <Box display="flex" alignItems="center" justifyContent="center" padding="20px">
    

    <Box overflow="hidden" display="flex" width="auto">
      {testimonials.slice(activeIndex, activeIndex + 3).map((testimonial, index) => (
        <Box 
          key={index}
          display="flex"
          width="400px"
          height="330px"
          padding="21.93px 24px 20px 24px"
          flexDirection="column"
          alignItems="flex-start"
          gap="20.148px"
          margin="24px 16px 0px 16px"
          borderRadius="8px"
          background="var(--White--Background)"
          boxShadow="0px 1px 7.2px 0px rgba(0, 0, 0, 0.11)"
        >
          <StarRating rating={testimonial.rating} />
          <Box
            display="flex"
            flexDirection="column"
            height="240px"
            overflow="auto"
          >
            <Text
              color="var(--Grey-100)"
              fontFamily={roboto.style.fontFamily}
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
                fontFamily={roboto.style.fontFamily}
                fontSize="16px"
                fontStyle="normal"
                fontWeight="600"
                lineHeight="24px"
              >
                {testimonial.name}
              </Text>
              <Text
                color="var(--Grey-100)"
                fontFamily={roboto.style.fontFamily}
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
      ))}
    </Box>
    
  </Box>
  
) : isMD ? (
  <Box display="flex" alignItems="center" justifyContent="center" padding="20px">
    <Box overflow="hidden" display="flex" width="auto">
      {testimonials.slice(activeIndex, activeIndex + 2).map((testimonial, index) => (
        <Box 
          key={index}
          display="flex"
          width="400px"
          height="330px"
          padding="21.93px 24px 20px 24px"
          flexDirection="column"
          alignItems="flex-start"
          gap="20.148px"
          margin="24px 16px 0px 16px"
          borderRadius="8px"
          background="var(--White--Background)"
          boxShadow="0px 1px 7.2px 0px rgba(0, 0, 0, 0.11)"
        >
          <StarRating rating={testimonial.rating} />
          <Box
            display="flex"
            flexDirection="column"
            height="240px"
            overflow="auto"
          >
            <Text
              color="var(--Grey-100)"
              fontFamily={roboto.style.fontFamily}
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
                fontFamily={roboto.style.fontFamily}
                fontSize="16px"
                fontStyle="normal"
                fontWeight="600"
                lineHeight="24px"
              >
                {testimonial.name}
              </Text>
              <Text
                color="var(--Grey-100)"
                fontFamily={roboto.style.fontFamily}
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
      ))}
    </Box>
  </Box>
) : (
  <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index} >
          <Box 
            display="flex"
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
            flexDirection="column" // 設定為縱向排列
            height="240px" // 高度根據內容自適應
            overflow="auto" // 超出內容顯示滾動條 
            >
              <Text
                color="var(--Grey-100)"
                fontFamily={roboto.style.fontFamily}
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
                  fontFamily={roboto.style.fontFamily}
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="600"
                  lineHeight="24px"
                >
                  {testimonial.name}
                </Text>
                <Text
                  color="var(--Grey-100)"
                  fontFamily={roboto.style.fontFamily}
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
      <CustomPagination activeIndex={activeIndex} totalSlides={testimonials.length} />
    </Swiper>
    )}
    
  </Box>
);
}
function Page5() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [bgColor, setBgColor] = useState('#E2D4F4');
  const [title, setTitle] = useState('BaoDao series');
  const [content, setContent] = useState('Our teaching materials are in Traditional Chinese, focusing on Taiwanese life and culture. The course includes various exercises and practical example sentences. Designed in a spiral structure, it continually revisits, deepens, and expands learned content while integrating new and old material.');
  const [activeButton, setActiveButton] = useState('reset'); // 用來追蹤哪個按鈕被點擊
  
  const isXL = useBreakpointValue({ base: false, xl: true });

  const PrevIcon = () => (
    <Box display="flex" alignItems="center" justifyContent="center" width="32px" height="32px">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="16" fill="white"/>
      <path d="M11 16L7 12L11 8" stroke="#ADACAC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="translate(5 4)"/>
    </svg>
  </Box>
  );
  
  const NextIcon = () => (
    <Box display="flex" alignItems="center" justifyContent="center" width="32px" height="32px">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="16" fill="white"/>
      <path d="M11 16L15 12L11 8" stroke="#313030" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="translate(4 4)"/>
    </svg>
  </Box>
  );

  const onPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const onNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const [images, setImages] = useState([
    { src: 'https://static-prod-baodao.s3.amazonaws.com/bread.png', alt: 'Image 1' },
    { src: 'https://static-prod-baodao.s3.amazonaws.com/bread2.png', alt: 'Image 2' },
    { src: 'https://static-prod-baodao.s3.amazonaws.com/bread3.png', alt: 'Image 3' },
    // 這裡可以添加更多圖片
  ]);

  

  const handleUpdate = () => {
    setBgColor("#DDE9EF");
    setTitle("Let’s Learn Chinese");
    setContent('Designed for adults, our courses are graded according to learners\' Chinese proficiency levels, allowing users of different abilities to learn at their desired level. The teaching materials are based on the "Taiwan Basic Chinese Language Proficiency" (TBCL) guidelines, quantitatively ranked according to learners\' environments and abilities.');

    // 更新圖片數組
    setImages([
      { src: 'https://static-prod-baodao.s3.amazonaws.com/bread.png', alt: 'New Image 1' },
      { src: 'https://static-prod-baodao.s3.amazonaws.com/bread.png', alt: 'New Image 2' },
      { src: 'https://static-prod-baodao.s3.amazonaws.com/bread.png', alt: 'New Image 3' },
      // 這裡可以添加更多新的圖片
    ]);

    setActiveButton('update'); // 設置為 Update 按鈕為活躍狀態
  };

  const handleReset = () => {
    setBgColor('#E2D4F4');
    setTitle('BaoDao series');
    setContent('Our teaching materials are in Traditional Chinese, focusing on Taiwanese life and culture. The course includes various exercises and practical example sentences. Designed in a spiral structure, it continually revisits, deepens, and expands learned content while integrating new and old material.');

    // 恢復原始圖片數組
    setImages([
      { src: 'https://static-prod-baodao.s3.amazonaws.com/bread.png', alt: 'Image 1' },
      { src: 'https://static-prod-baodao.s3.amazonaws.com/bread2.png', alt: 'Image 2' },
      { src: 'https://static-prod-baodao.s3.amazonaws.com/bread3.png', alt: 'Image 3' },
      // 這裡可以添加更多圖片
    ]);

    setActiveButton('reset'); // 設置為 Reset 按鈕為活躍狀態
  };

return (
  <Box>
  {isXL ? (
  <Box bg={bgColor} display="flex" flexDirection="column">
  <Box bg="var(--White--Background)" padding="0px 0px 1px 0px" textAlign="center">
    <Text
      color="#7156E5"
      fontFamily={poppins.style.fontFamily}
      fontSize="18px"
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
      fontSize="32px"
      fontStyle="normal"
      fontWeight="700"
      lineHeight="48px"
      padding="0px 16px 0px 16px"
    >
      Exclusive teaching & learning materials
    </Text>
    <Flex
      mt="24px"
      mb="-1.55px"
      justifyContent="center"
    >
      <Button
        width="288px"
        height="48px"
        borderRadius="4px 0px 0px 0px"
        background={activeButton === 'reset' ? '#E2D4F4' : '#F5F6F9'}
        color={activeButton === 'reset' ? 'var(--Grey-100)' : '#6F6E6E'}
        _hover={{ bg: '#E2D4F4', color: 'var(--Grey-100)' }}
        onClick={handleReset}
      >
        <Text
          alignItems="center"
          fontFamily={poppins.style.fontFamily}
          fontSize="18px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="28px"
        >
          BaoDao series
        </Text>
      </Button>
      <Button
        width="288px"
        height="48px"
        borderRadius="4px 0px 0px 0px"
        background={activeButton === 'update' ? '#DDE9EF' : '#F5F6F9'}
        color={activeButton === 'update' ? 'var(--Grey-100)' : '#6F6E6E'}
        _hover={{ bg: '#DDE9EF', color: 'var(--Grey-100)' }}
        onClick={handleUpdate}
      >
        <Text
          alignItems="center"
          fontFamily={poppins.style.fontFamily}
          fontSize="18px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="28px"
        >
          Let’s Learn Chinese
        </Text>
      </Button>
    </Flex>
  </Box>

  <Box display="flex" gap="60px" padding="40px">
    <Box
      padding="20px"
      flexShrink="0"
      borderRadius="4px"
      background="var(--White--Background)"
      margin="16px"
      flexBasis={{ base: "100%", xl: "calc(50% - 32px)" }}
    >
      <Box position="relative" display="inline-block">
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
            <path
              d="M1 6.20212C18.0604 4.79099 80.1601 2.04644 131 6.20213C104.61 6.20213 70.2256 6.62234 48.0866 11"
              stroke={bgColor}
              strokeWidth="8"
              strokeLinejoin="round"
            />
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
          {title}
        </Text>
      </Box>
      <Box padding="12px 0px 0px 0px" overflow="auto">
        <Text
          color="var(--Grey-100)"
          fontFamily={roboto.style.fontFamily}
          fontSize="16px"
          fontStyle="normal"
          fontWeight="400"
          lineHeight="24px"
        >
          {content}
        </Text>
        <Box strokeWidth="1px" stroke="var(--Grey-100)" padding="20px 0px 0px 0px">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="2" viewBox="0 0 261 1" fill="none">
            <path d="M0 1H261" stroke="#313030" />
          </svg>
        </Box>
      </Box>

      <Box display="flex">
        <Box padding="17px 0px 0px 0px">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M9.80952 0C4.39957 0 0 4.485 0 10C0 15.515 4.39957 20 9.80952 20C15.2195 20 19.619 15.515 19.619 10C19.619 4.485 15.2195 0 9.80952 0ZM15.8865 6.96L8.61276 14.375C8.12719 14.785 7.69557 14.785 7.24433 14.375L3.72762 10.8C3.36467 10.43 3.36467 9.825 3.72762 9.455C4.09057 9.085 4.67424 9.085 5.03719 9.455L7.92119 12.395L14.572 5.615C14.935 5.245 15.5187 5.245 15.8816 5.615C16.2446 5.985 16.2446 6.59 15.8816 6.96H15.8865Z"
              fill="#313030"
            />
          </svg>
        </Box>
        <Box padding="14px 0px 0px 8px">
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

  <Box position="relative" margin="16px">
  {/* 顯示圖片的部分 */}
  <Flex align="center" justify="center" position="relative">
      <IconButton
        aria-label="Previous image"
        icon={<PrevIcon />}
        position="absolute"
        left="-50px"
        top="50%"
        transform="translateY(-50%)"
        onClick={onPrev}
        variant="outline"
        background="transparent"
        border="none"
        zIndex="1"
      />
      <Box overflow="hidden" borderRadius="8px" maxWidth="100%">
        <Image
          src={images[activeIndex].src}
          alt={images[activeIndex].alt}
          flexShrink="0"
          boxShadow="0px 2px 4px 0px rgba(0, 0, 0, 0.15)"
          width="100%"
          height="auto"
        />
      </Box>
      <IconButton
        aria-label="Next image"
        icon={<NextIcon />}
        position="absolute"
        right="-50px"
        top="50%"
        transform="translateY(-50%)"
        onClick={onNext}
        variant="outline"
        background="transparent"
        border="none"
        zIndex="1"
      />
    </Flex>
  {/* 分頁指示部分 */}
  <Box
    position="absolute"
    top="10px"
    left="8px"
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
      {activeIndex + 1}/{images.length}
    </Text>
  </Box>
</Box>
  </Box>
</Box>

) : (
  <Box
    bg={bgColor}
  >
    
    <Box
      bg="var(--White--Background)"
      padding="0px 0px 1px 0px"
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
      <Button
        width="288px"
        height="48px"
        borderRadius="4px"
        background={activeButton === 'reset' ? '#E2D4F4' : '#F5F6F9'}
        color={activeButton === 'reset' ? 'var(--Grey-100)' : '#6F6E6E'}
        _hover={{ bg: '#E2D4F4', color: 'var(--Grey-100)' }}
        mt="24px"
        ml="16px"
        mr="16px"
        display="flex"
        justifyContent="center"
        onClick={handleReset}
      >
        <Text
          alignItems="center"
          fontFamily={poppins.style.fontFamily}
          fontSize="18px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="28px"
        >
          BaoDao series
        </Text>
      </Button>
      <Button
        width="288px"
        height="48px"
        borderRadius="4px"
        background={activeButton === 'update' ? '#DDE9EF' : '#F5F6F9'}
        color={activeButton === 'update' ? 'var(--Grey-100)' : '#6F6E6E'}
        _hover={{ bg: '#DDE9EF', color: 'var(--Grey-100)' }}
        mt="12px"
        ml="16px"
        mb="16px"
        mr="16px"
        display="flex"
        justifyContent="center"
        onClick={handleUpdate}
      >
        <Text
          alignItems="center"
          fontFamily={poppins.style.fontFamily}
          fontSize="18px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="28px"
        >
          Let’s Learn Chinese
        </Text>
      </Button>
    </Box>
    <Box 
      padding="20px"
      flexShrink="0"
      borderRadius="4px"
      background="var(--White--Background)"
      margin="16px"
    >
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
            <path d="M1 6.20212C18.0604 4.79099 80.1601 2.04644 131 6.20213C104.61 6.20213 70.2256 6.62234 48.0866 11" stroke={bgColor} strokeWidth="8" strokeLinejoin="round"/>
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
          {title}
        </Text>
      </Box>
      <Box 
        padding="12px 0px 0px 0px"
        overflow="auto" 
      >
        <Text
          color="var(--Grey-100)"
          fontFamily={roboto.style.fontFamily}
          fontSize="16px"
          fontStyle="normal"
          fontWeight="400"
          lineHeight="24px"
        >
          {content}
        </Text>
        <Box
        strokeWidth="1px"
        stroke="var(--Grey-100)"
        padding="20px 0px 0px 0px"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="2" viewBox="0 0 261 1" fill="none">
          <path d="M0 1H261" stroke="#313030"/>
        </svg>
      </Box>
      </Box> 
      
      <Box display="flex">
        <Box padding="17px 0px 0px 0px">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M9.80952 0C4.39957 0 0 4.485 0 10C0 15.515 4.39957 20 9.80952 20C15.2195 20 19.619 15.515 19.619 10C19.619 4.485 15.2195 0 9.80952 0ZM15.8865 6.96L8.61276 14.375C8.12719 14.785 7.69557 14.785 7.24433 14.375L3.72762 10.8C3.36467 10.43 3.36467 9.825 3.72762 9.455C4.09057 9.085 4.67424 9.085 5.03719 9.455L7.92119 12.395L14.572 5.615C14.935 5.245 15.5187 5.245 15.8816 5.615C16.2446 5.985 16.2446 6.59 15.8816 6.96H15.8865Z" fill="#313030"/>
          </svg>
        </Box>
        <Box 
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
    
    <Box position="relative"   margin="16px">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={(swiper) => {
          console.log(`Current slide index: ${swiper.activeIndex}`);
          setActiveIndex(swiper.activeIndex);
        }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image.src}
              flexShrink="0"
              boxShadow="0px 2px 4px 0px rgba(0, 0, 0, 0.15)"
            />
            
          </SwiperSlide>
        ))}
      </Swiper>
      <Box
        position="absolute"
        top="10px"
        left="8px"
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
          {activeIndex + 1}/{images.length}
        </Text>
      </Box>
    </Box>
    <Box
      padding="0px 10px 0px 10px"
      zIndex="1"
    >
      <CustomPagination activeIndex={activeIndex} totalSlides={images.length} />
    </Box>
  </Box>
)}
</Box>
);
}
function Page6() {
  const isXL = useBreakpointValue({ base: false, xl: true });
  return (
    <Box
      flexDirection="cloumn"
      alignItems="center"
      flexShrink="0"
      bg="#F9FAFC"
    >
      {isXL ? (
      <Box
      flexShrink="0"
      padding="32px 16px 16px 16px"
      textAlign="center"
      >
        <Text
          color="var(--Grey-100)"
          fontFamily={poppins.style.fontFamily}
          fontSize="32px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="48px"
        >
          Take a closer look at BaoDao Talk
        </Text>

      </Box>
      ) : (
        <Box
      flexShrink="0"
      padding="32px 16px 0px 16px"
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
      )}
      <Box>
      
        <SwipeableTable />
      </Box>
    </Box>
);
} 
function Page7() {
  const isMD = useBreakpointValue({ base: false, md: true });
  const buttonRanges = ['0-80', '80-240', '240-360', '360-480', '480-960'];
  const contentMap = {
    '0-80': {
      list: [
        'Understanding of correct pronunciation rules',
        'Ability to recognize simple characters',
        'Learning 300 common Mandarin words',
      ],
      text: 'Can handle greetings and self-introductions; with help, can understand texts indirectly.'
    },
    '80-240': {
      list: [
        'Able to engage in simple Q&A',
        'Able to differentiate units and use classifiers',
        'Capable of conducting slow-paced conversations',
        'Learning 500 Mandarin words',
      ],
      text: 'Meets basic travel needs and daily conversations with slow-paced conversation and body language.'
    },
    '240-360': {
      list: [
        'Able to understand common phrases and sentences',
        'Capable of conducting simple, longer Q&A sessions',
        'Comprehend commonly used texts in daily life',
        'Learning 1000 Mandarin words',
      ],
      text: 'Understands most questions and conversations, responds appropriately, overcomes travel language barriers, and engages in basic business conversations.'
    },
    '360-480': {
      list: [
        'Able to engage in general communication',
        'Capable of understanding the majority of conversations',
        'Able to conduct conversations at a moderate pace',
        'Learning 2500 Mandarin words',
      ],
      text: 'Proficient in Mandarin, understands most Taiwanese speech, and converses effectively for travel, business, or living in Taiwan despite some vocabulary and grammar inaccuracies.'
    },
    '480-960': {
      list: [
        'Able to converse fluently with native speakers',
        'Capable of understanding the majority of articles',
        'Able to use sophisticated vocabulary',
        'Learning more than 5000 Mandarin words',
      ],
      text: 'Fluent in Mandarin, including idioms and slang, and meets most business needs; further education would cover mid to high-level requirements.'
    },
  };
  const [selectedButton, setSelectedButton] = useState(buttonRanges[0]);

  const handleButtonClick = (num) => {
    setSelectedButton(num);
  };
return (
  
  <Box
    bg="var(--Grey-100)"
    padding="0px 0px 16px 0px"
  >
    {isMD ? (
    <Box
      flexShrink="0"
      padding="32px 16px 0px 16px"
      textAlign="center"
    >
        <Text
          color="var(--White--Background)"
          fontFamily={poppins.style.fontFamily}
          fontSize="32px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="48px"
        >
          What can you learn from BaoDao Talk?
        </Text>

      </Box>
      ) : (
        <Box
      flexShrink="0"
      padding="32px 16px 0px 16px"
    >
        <Text
          color="var(--White--Background)"
          fontFamily={poppins.style.fontFamily}
          fontSize="20px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="30px"
        >
          What can you learn from BaoDao Talk?
        </Text>

      </Box>
      )}
      {isMD ? (
      <Box
      flexShrink="0"
      padding="24px 16px 0px 16px"
      textAlign="center"
      >
        <Text
          color="var(--White--Background)"
          fontFamily={roboto.style.fontFamily}
          fontSize="18px"
          fontStyle="normal"
          fontWeight="400"
          lineHeight="22px"
        >
          Based on your learning time, we have an average learning outcome for your reference:
        </Text>

      </Box>
      ) : (
        <Box
      flexShrink="0"
      padding="24px 16px 0px 16px"
      >
        <Text
          color="var(--White--Background)"
          fontFamily={roboto.style.fontFamily}
          fontSize="16px"
          fontStyle="normal"
          fontWeight="400"
          lineHeight="24px"
        >
          Based on your learning time, we have an average learning outcome for your reference:
        </Text>

      </Box>
      )}
      {isMD ? (
      <Box 
        padding="16px 16px 0px 16px"
      >
        <Flex  gap="20px"  alignItems="center" justifyContent="center"> 
          {buttonRanges.map((num) =>(
            <Box
              key={num}
              as="button"
              width="115px"
              height="45px"
              padding="5px"
              bg={selectedButton === num ? "orange" : "var(--White--Background)"}
              color={selectedButton === num ? "white" : "black"}
              borderRadius="4px"
              flexShrink="0"
              onClick={() => handleButtonClick(num)}
              transition="background-color 0.3s, color 0.3s"
              
            >
              <Text
                color="var(--Grey-100)"
                fontFamily={roboto.style.fontFamily}
                fontSize="16px"
                fontStyle="normal"
                fontWeight="600"
                lineHeight="24px"
                textAlign="center"
              >
                {num} hrs
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>
      ) : (
      <Box 
        overflowX="auto" 
        padding="16px 16px 0px 16px"
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          '-ms-overflow-style': 'none',
          'scrollbarWidth': 'none',
        }}
      >
        <Flex width="425px" gap="20px" > 
          {buttonRanges.map((num) =>(
            <Box
              key={num}
              as="button"
              width="105px"
              height="40px"
              padding="5px"
              bg={selectedButton === num ? "orange" : "var(--White--Background)"}
              color={selectedButton === num ? "white" : "black"}
              borderRadius="4px"
              flexShrink="0"
              onClick={() => handleButtonClick(num)}
              transition="background-color 0.3s, color 0.3s"
            >
              <Text
                color="var(--Grey-100)"
                fontFamily={roboto.style.fontFamily}
                fontSize="16px"
                fontStyle="normal"
                fontWeight="600"
                lineHeight="24px"
                textAlign="center"
              >
                {num} hrs
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>
      )}

      {/* 新增的學習卡片內容 */}
      {isMD ? (
      <Box
      bg="white"
      borderRadius="8px"
      margin="46px 46px 16px 46px"
    >
      <HStack align="stretch" spacing={0} flex={1}> {/* 包含三個 VStack 的 HStack */}
        <VStack align="stretch" spacing={0} flex={1} borderRight="1px solid #6F6E6E">  {/* 第一個表格 */}
          <Box bg="#F5F6F9" p={4} borderTopRadius="8px" borderBottom="1px solid #6F6E6E" display="flex" alignItems="center" justifyContent="center">
            <Text
              color="var(--Grey-100)"
              fontFamily={poppins.style.fontFamily}
              fontSize="18px"
              fontStyle="normal"
              fontWeight="700"
              lineHeight="28px"
              textAlign="center"
            >
              Duration
            </Text>
          </Box>
          {selectedButton && (
            <Box p={4} display="flex" alignItems="center" justifyContent="center" minHeight="150px" >
              <Text
                color="var(--Grey-100)"
                fontFamily={poppins.style.fontFamily}
                fontSize="18px"
                fontStyle="normal"
                fontWeight="700"
                lineHeight="28px"
                textAlign="center"
              >
                {selectedButton} hrs
              </Text>
            </Box>
          )}
        </VStack>
    
        <VStack align="stretch" spacing={0} flex={1} borderRight="1px solid #6F6E6E"> {/* 第二個表格 */}
          <Box bg="#F5F6F9" p={4} borderBottom="1px solid #6F6E6E" display="flex" alignItems="center" justifyContent="center">
            <Text
              color="var(--Grey-100)"
              fontFamily={poppins.style.fontFamily}
              fontSize="18px"
              fontStyle="normal"
              fontWeight="700"
              lineHeight="28px"
              textAlign="center"
            >
              Learning goals
            </Text>
          </Box>
          <Box p={4} padding="16px" display="flex" alignItems="center" justifyContent="center">
            <UnorderedList pl={4} spacing={2}>
              {contentMap[selectedButton].list.map((item, index) => (
                <ListItem key={index}>{item}</ListItem>
              ))}
            </UnorderedList>
          </Box>
        </VStack>
    
        <VStack align="stretch" spacing={0} flex={1}> {/* 第三個表格 */}
          <Box bg="#F5F6F9" p={4} borderTopRadius="8px" borderBottom="1px solid #6F6E6E" display="flex" alignItems="center" justifyContent="center">
            <Text
              color="var(--Grey-100)"
              fontFamily={poppins.style.fontFamily}
              fontSize="18px"
              fontStyle="normal"
              fontWeight="700"
              lineHeight="28px"
              textAlign="center"
            >
              Learning outcomes
            </Text>
          </Box>
          <Box p={4} padding="16px" display="flex" alignItems="center" justifyContent="center" minHeight="150px">
            <Text>
              {contentMap[selectedButton].text}
            </Text>
          </Box>
        </VStack>
      </HStack>
      
    </Box>
    
) : (
  <Box 
        bg="white"  // 背景顏色為白色
        borderRadius="8px"  // 圓角半徑為 8px
        boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"  // 設定陰影效果
        margin="16px"  // 設定外邊距為 16px
        
      >
        <VStack align="stretch" spacing={0}>  {/* 垂直排列，對齊方式為拉伸，間距為 0 */}
        <Box bg="#F5F6F9" p={4} borderTopRadius="8px">  {/* 設定底部邊框顏色和間距 */}
          <Text 
            color="var(--Grey-100)"
            fontFamily={poppins.style.fontFamily}
            fontSize="18px"
            fontStyle="normal"
            fontWeight="700"
            lineHeight="28px"
            textAlign="center"

          >
            Duration
          </Text>  {/* 設定文字為粗體 */}
        </Box>
        {/* 根據選中的按鈕更換文字內容 */}
      {selectedButton && (
        <Box borderBottom="4px solid #6F6E6E" p={4}>
          <Text
            color="var(--Grey-100)"
            fontFamily={poppins.style.fontFamily}
            fontSize="18px"
            fontStyle="normal"
            fontWeight="700"
            lineHeight="28px"
            textAlign="center"
          >
            {selectedButton} hrs
          </Text>
        </Box>
      )}
        <Box bg="#F5F6F9" p={4}>  {/* 設定底部邊框顏色和間距 */}
          <Text 
            color="var(--Grey-100)"
            fontFamily={poppins.style.fontFamily}
            fontSize="18px"
            fontStyle="normal"
            fontWeight="700"
            lineHeight="28px"
            textAlign="center"
          >Learning goals</Text>  {/* 設定文字為粗體 */}
        </Box>
        {/* 根據選中的按鈕更換文字內容 */}
        <Box borderBottom="4px solid #6F6E6E" p={4}  padding="16px" >
          <UnorderedList pl={4} spacing={2}>
            {contentMap[selectedButton].list.map((item, index) => (
              <ListItem key={index}>{item}</ListItem>
            ))}
          </UnorderedList>
        </Box>
        <Box bg="#F5F6F9" p={4} >  {/* 設定底部邊框顏色和間距 */}
          <Text 
            color="var(--Grey-100)"
            fontFamily={poppins.style.fontFamily}
            fontSize="18px"
            fontStyle="normal"
            fontWeight="700"
            lineHeight="28px"
            textAlign="center"
          >Learning outcomes</Text>  {/* 設定文字為粗體 */}
        </Box>
        {/* 根據選中的按鈕更換文本內容 */}
        <Box p={4}  padding="16px">
          <Text>
            {contentMap[selectedButton].text}
          </Text>
        </Box>
      </VStack>
    </Box>
)}
{/* 添加的提示文本 */}
{isMD && (
  <Box pl="46px" pb="46px" width="575px">
    <Text
      color="var(--White--Background)"
      fontFamily={roboto.style.fontFamily}
      fontSize="14px"
      fontStyle="normal"
      fontWeight="400"
      lineHeight="22px"
    >
      *Actual progress and outcomes will primarily depend on individual learning pace and learning environment.
    </Text>
  </Box>
)}
</Box>
);
} 
function Page8() {
return (
  <Box
    bg="var(--Primary-50)"
    padding="0px 0px 16px 0px"
  >
    <Box
      height="30px"
      flexShrink="0"
      padding="32px 16px 24px 16px"
    >
      <Text
        color="var(--Grey-100)"
        fontFamily={poppins.style.fontFamily}
        fontSize="20px"
        fontStyle="normal"
        fontWeight="700"
        lineHeight="30px"
        align="center"
      >
        Frequently asked questions
      </Text>
    </Box>
      <Accordion allowToggle maxWidth="660px" mx="auto">
        {[
          "How is Mandarin in Taiwan different?",
          "How to sign up for a free Mandarin class?",
          "How to choose a tutor?",
          "How to pay for the course fees?",
          "What is spiral curriculum design?"
        ].map((question, index) => (
          <AccordionItem key={index} bg="var(--White--Background)" borderRadius="4px" margin="16px">
            <h2>
              <AccordionButton
                _expanded={{ color: "var(--Primary-300)" }}
              >
                <Box flex="1" >
                  <Text
                    textAlign="left"
                    fontFamily={roboto.style.fontFamily}
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="22px"
                  >
                    {question}
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <Text
              color="var(--Grey-100)"
              fontFamily={roboto.style.fontFamily}
              fontSize="14px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="23px"
            >
              {index === 0 ? (
                <>
                  Taiwanese Mandarin offers a unique and enriching linguistic experience, differing from mainland Mandarin in pronunciation, vocabulary, and writing. It features fewer retroflex sounds and uses Traditional Chinese characters, adding depth to your language skills.
                  <br /><br />
                  Learning Traditional Chinese provides cultural insights, enhances communication, supports learning Simplified Chinese, and boosts professional opportunities.
                </>
              ) : (
                "Information about this topic would go here."
              )}
            </Text>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
  </Box>
);
} 
function Page9() {
  const isMD = useBreakpointValue({ base: false, md: true });
  const [errors, setErrors] = React.useState({});
  return (
    <Box bg="var(--White--Background)" padding="0px 0px 16px 0px">
      <Flex direction={isMD ? "row" : "column"} padding={isMD ? "32px" : "0"}>
        <Box flexBasis={isMD ? "50%" : "100%"} pr={isMD ? "32px" : "0"}>
          <Box padding={isMD ? "0" : "32px 16px 0px 16px"}>
            <Text
              color="var(--Grey-100)"
              fontFamily={poppins.style.fontFamily}
              fontSize={isMD ? "32px" : "20px"}
              fontWeight="700"
              lineHeight="30px"
            >
              Contact us
            </Text>
          </Box>
          <Box padding={isMD ? "16px 0 0 0" : "16px"}>
            <Text
              color="var(--Grey-100)"
              fontFamily={roboto.style.fontFamily}
              fontSize={isMD ? "18px" : "16px"}
              fontWeight="400"
              lineHeight="26px"
            >
              Fill out the form, we will get in touch with you within 2 business days. You can also use Intercom for immediate online consultation with us.
            </Text>
          </Box>
          {isMD && (
            <Box mt="120px">
              
              <Flex align="center">
              <HStack spacing="8px">
                  {[1, 2, 3].map((i) => (
                    <Box
                      key={i}
                      position="relative"
                      width="60px"
                      height="60px"
                      borderRadius="50%"
                      overflow="hidden"
                      // border="1px solid var(--Grey-100)"
                      zIndex="1"
                    >
                      <Box
                        position="absolute"
                        top="0"
                        left="0"
                        width="100%"
                        height="100%"
                        background={`url(https://static-prod-baodao.s3.amazonaws.com/man.png) center / cover no-repeat`}
                        backgroundSize="250%"
                        backgroundPosition="top 2px right -50px"
                        zIndex="-1"
                      />
                    </Box>
                  ))}
                </HStack>
                
                <HStack ml="16px" spacing="4px" wrap="wrap" width="160px">
                <Text 
                  color="var(--Grey-100)"
                  fontFamily={roboto.style.fontFamily}
                  fontSize="18px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="0px"
                  mb="16px"
                  >Trusted by learners</Text>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Box key={i} as="span" color="yellow.400" fontSize="24px">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clipPath="url(#clip0_12457_29592)">
                          <path d="M23.5477 8.90137C23.3715 8.37675 22.9174 7.99425 22.3706 7.91062L16.0072 6.93825L13.149 0.849375C12.9052 0.330375 12.3844 0 11.8121 0C11.2395 0 10.719 0.330375 10.4752 0.849375L7.61661 6.93863L1.25324 7.911C0.706486 7.99463 0.252361 8.37675 0.0764861 8.90175C-0.099389 9.42675 0.033361 10.005 0.419986 10.4018L5.06699 15.1669L3.96636 21.9083C3.87561 22.4662 4.11224 23.0273 4.57386 23.3535C5.03511 23.6798 5.64411 23.7128 6.14024 23.439L11.8125 20.3021L17.4847 23.439C17.7086 23.5627 17.955 23.6235 18.2002 23.6235C18.4987 23.6235 18.7972 23.5328 19.0511 23.3535C19.5127 23.0276 19.749 22.4666 19.6582 21.9083L18.5576 15.1669L23.205 10.4018C23.5909 10.005 23.7236 9.42675 23.5477 8.90137Z" fill="#FFE70A"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_12457_29592">
                            <rect width="24" height="24" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </Box>
                  ))}
                </HStack>
                <Text ml="8px" fontWeight="500">5.0</Text>
              </Flex>
            </Box>
          )}
        </Box>
        <VStack spacing={4} align="stretch" padding={isMD ? "0" : "10px 16px 0px 16px"} flexBasis={isMD ? "50%" : "100%"}>
          {isMD ? (
            <>
              <HStack spacing={4} align="flex-start">
                <FormControl isInvalid={errors.fullName} flex={1}>
                  <FormLabel>
                    <Text 
                      color="var(--Grey-100)"
                      fontFamily={roboto.style.fontFamily}
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight="400"
                      >Full name *</Text>
                    </FormLabel>
                  <Input placeholder="" bg="#F5F6F9"/>
                  <FormErrorMessage>{errors.fullName}</FormErrorMessage>
                </FormControl>
                
                <FormControl isInvalid={errors.email} flex={1}>
                  <FormLabel>
                  <Text 
                      color="var(--Grey-100)"
                      fontFamily={roboto.style.fontFamily}
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight="400"
                      >Email *</Text>
                  </FormLabel>
                  <Input placeholder="" type="email" bg="#F5F6F9"/>
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
              </HStack>
              
              <HStack spacing={4} align="flex-end">
                <FormControl isInvalid={errors.chineseExperience} flex={1}>
                  <FormLabel>
                  <Text 
                      color="var(--Grey-100)"
                      fontFamily={roboto.style.fontFamily}
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight="400"
                      >Have you learned Chinese ? *</Text>
                  </FormLabel>
                  <Select defaultValue="" aria-label="Select an option" bg="#F5F6F9">
                    <option value="" disabled hidden></option>
                    <option value="No, I haven't learned Chinese">No, I haven't learned Chinese</option>
                    <option value="Less than a year">Less than a year</option>
                    <option value="1 year to 2 years">1 year to 2 years</option>
                    <option value="2 years to 3 years">2 years to 3 years</option>
                    <option value="More than 3 years">More than 3 years</option>
                  </Select>
                  <FormErrorMessage>{errors.chineseExperience}</FormErrorMessage>
                </FormControl>
                
                <FormControl isInvalid={errors.goal} flex={1}>
                  <FormLabel>
                  <Text 
                      color="var(--Grey-100)"
                      fontFamily={roboto.style.fontFamily}
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight="400"
                      >What is your goal? *</Text>
                  </FormLabel>
                  <Select defaultValue="" aria-label="Select your goal" bg="#F5F6F9">
                    <option value="" disabled hidden></option>
                    <option value="Work">Work</option>
                    <option value="Schools or Exams">Schools or Exams</option>
                    <option value="Culture, Travel or Hobbies">Culture, Travel or Hobbies</option>
                    <option value="Family or Relationships">Family or Relationships</option>
                  </Select>
                  <FormErrorMessage>{errors.goal}</FormErrorMessage>
                </FormControl>
              </HStack>
            </>
          ) : (
            <>
              <FormControl isInvalid={errors.fullName}>
                <FormLabel>
                <Text 
                  color="var(--Grey-100)"
                  fontFamily={roboto.style.fontFamily}
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="400"
                  >Full name *</Text>
                </FormLabel>
                <Input placeholder="" bg="#F5F6F9"/>
                <FormErrorMessage>{errors.fullName}</FormErrorMessage>
              </FormControl>
              
              <FormControl isInvalid={errors.email}>
                <FormLabel>
                <Text 
                  color="var(--Grey-100)"
                  fontFamily={roboto.style.fontFamily}
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="400"
                  >Email *</Text>
                </FormLabel>
                <Input placeholder="" type="email" bg="#F5F6F9"/>
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              
              <FormControl isInvalid={errors.chineseExperience}>
                <FormLabel>
                <Text 
                  color="var(--Grey-100)"
                  fontFamily={roboto.style.fontFamily}
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="400"
                  >Have you learned Chinese ? *</Text>
                </FormLabel>
                <Select defaultValue="" aria-label="Select an option" bg="#F5F6F9">
                  <option value="" disabled hidden></option>
                  <option value="No, I haven't learned Chinese">No, I haven't learned Chinese</option>
                  <option value="Less than a year">Less than a year</option>
                  <option value="1 year to 2 years">1 year to 2 years</option>
                  <option value="2 years to 3 years">2 years to 3 years</option>
                  <option value="More than 3 years">More than 3 years</option>
                </Select>
                <FormErrorMessage>{errors.chineseExperience}</FormErrorMessage>
              </FormControl>
              
              <FormControl isInvalid={errors.goal}>
                <FormLabel>
                <Text 
                  color="var(--Grey-100)"
                  fontFamily={roboto.style.fontFamily}
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="400"
                  >What is your goal? *</Text>
                </FormLabel>
                <Select defaultValue="" aria-label="Select your goal" bg="#F5F6F9">
                  <option value="" disabled hidden></option>
                  <option value="Work">Work</option>
                  <option value="Schools or Exams">Schools or Exams</option>
                  <option value="Culture, Travel or Hobbies">Culture, Travel or Hobbies</option>
                  <option value="Family or Relationships">Family or Relationships</option>
                </Select>
                <FormErrorMessage>{errors.goal}</FormErrorMessage>
              </FormControl>
            </>
          )}
          
          <Box>
            <Text 
              mb={2} 
              color="var(--Grey-100)"
              fontFamily={roboto.style.fontFamily}
              fontSize="16px"
              fontStyle="normal"
              fontWeight="400"
            >Message</Text>
            <Textarea 
              placeholder="Tell us your challenge, requirements or ask us a question" 
              resize="vertical"
              bg="#F5F6F9"
            />
          </Box>
          <Flex justify="center">
            <Button
              width="288px"
              height="40px"
              justifyContent="center"
              alignItems="center"
              borderRadius="4px"
              background="var(--Primary-200)"
              _hover={{ bg: '#7156E5' }}
              mt={4} 
              colorScheme="purple" 
            >
              Send message
            </Button>
          </Flex>
        </VStack>
      </Flex>
    </Box>
  );
}
function Page10() {
  const isMD = useBreakpointValue({ base: false, md: true });
  const DesktopLayout = () => (
    <Box
      bg="var(--Grey-10)"
      padding="32px 16px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
  
      <Flex flex="1" gap="65px" borderBottom="1px solid #ADACAC" pb="40px">
      <Box>
        <Box width="160px" height="60px" >
          <Image
            src="https://static-prod-baodao.s3.amazonaws.com/logo-horizontal-v2.png"
            alt="Logo"
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </Box>
      </Box>
        <Box >
          <Text fontSize="16px" fontWeight="bold" mb="16px">BaoDao Talk</Text>
          <Link href="/blog" color="gray.600" fontSize="14px" display="block" mb="8px">Blog</Link>
          <Link href="/faqs" color="gray.600" fontSize="14px" display="block" mb="8px">FAQs</Link>
          <Link href="/help-center" color="gray.600" fontSize="14px" display="block">Help center</Link>
        </Box>
        
        <Box >
          <Text fontSize="16px" fontWeight="bold" mb="16px">For teachers</Text>
          <Link href="/become-a-tutor" color="gray.600" fontSize="14px" display="block">Become a tutor</Link>
        </Box>
        
        <Box >
          <Text fontSize="16px" fontWeight="bold" mb="16px">Learning resources</Text>
          <Link href="/1-on-1-lessons" color="gray.600" fontSize="14px" display="block" mb="8px">1-on-1 lessons</Link>
          <Link href="/find-tutors" color="gray.600" fontSize="14px" display="block" mb="8px">Find tutors</Link>
          <Link href="/chinese-speaking-challenge" color="gray.600" fontSize="14px" display="block" mb="8px">Chinese speaking challenge</Link>
          <Link href="/practice-chinese-strokes" color="gray.600" fontSize="14px" display="block">Practice Chinese strokes</Link>
        </Box>
        
        <Box display="flex" flexDirection="row" gap="20px" alignItems="flex-end" marginLeft="auto" mb="-30px">
        <Link href="https://www.linkedin.com/" isExternal >
          <Box
            display="flex"
            width="32px"
            height="32px"
            padding="6px"
            justifyContent="center"
            alignItems="center"
            flexShrink="0"
            bg="black"
            borderRadius="50%"
            
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <g clipPath="url(#clip0_12923_2810)">
                <path d="M2.00172 14.3996H4.40172V5.51961H2.00172V14.3996ZM3.20172 1.59961C2.40172 1.59961 1.76172 2.23961 1.76172 3.03961C1.76172 3.83961 2.40172 4.47961 3.20172 4.47961C4.00172 4.47961 4.64172 3.83961 4.64172 3.03961C4.64172 2.23961 4.00172 1.59961 3.20172 1.59961ZM8.48172 6.87961V5.51961H6.08172V14.3996H8.48172V9.83961C8.48172 7.27961 11.7617 7.11961 11.7617 9.83961V14.3996H14.1617V8.95961C14.1617 4.63961 9.60172 4.79961 8.48172 6.87961Z" fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0_12923_2810">
                  <rect width="16" height="16" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </Box>
        </Link>
        <Link href="https://www.facebook.com/" isExternal>
          <Box
            display="flex"
            width="32px"
            height="32px"
            padding="6px"
            justifyContent="center"
            alignItems="center"
            flexShrink="0"
            bg="black"
            borderRadius="50%"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <g id="facebook-svgrepo-com 1">
                <path id="Vector" d="M13.7188 3.12848L11.6525 3.12598C9.64875 3.12598 8.35437 4.45348 8.35437 6.51035V8.06973H6.28125V10.8916H8.35437L8.35187 16.876H11.2525L11.255 10.8916H13.6337L13.6319 8.07035H11.255V6.74723C11.255 6.11098 11.4056 5.7891 12.2337 5.7891L13.7125 5.78848L13.7188 3.12848Z" fill="white"/>
              </g>
            </svg>
          </Box>
        </Link>
        <Link href="https://www.instagram.com/" isExternal>
          <Box
            display="flex"
            width="32px"
            height="32px"
            padding="6px"
            justifyContent="center"
            alignItems="center"
            flexShrink="0"
            bg="black"
            borderRadius="50%"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <g clip-path="url(#clip0_13591_2959)">
                <path d="M8 1.44133C10.136 1.44133 10.3893 1.44933 11.2327 1.488C12.1047 1.528 13.0027 1.72667 13.638 2.362C14.2793 3.00333 14.472 3.89267 14.512 4.76733C14.5507 5.61067 14.5587 5.864 14.5587 8C14.5587 10.136 14.5507 10.3893 14.512 11.2327C14.4727 12.1 14.2693 13.0067 13.638 13.638C12.9967 14.2793 12.108 14.472 11.2327 14.512C10.3893 14.5507 10.136 14.5587 8 14.5587C5.864 14.5587 5.61067 14.5507 4.76733 14.512C3.90667 14.4727 2.988 14.2647 2.362 13.638C1.724 13 1.528 12.102 1.488 11.2327C1.44933 10.3893 1.44133 10.136 1.44133 8C1.44133 5.864 1.44933 5.61067 1.488 4.76733C1.52733 3.90333 1.73267 2.99133 2.362 2.362C3.002 1.722 3.89467 1.528 4.76733 1.488C5.61067 1.44933 5.864 1.44133 8 1.44133ZM8 0C5.82733 0 5.55467 0.00933333 4.70133 0.048C3.46467 0.104667 2.23667 0.448667 1.34267 1.34267C0.445333 2.24 0.104667 3.46533 0.048 4.70133C0.00933333 5.55467 0 5.82733 0 8C0 10.1727 0.00933333 10.4453 0.048 11.2987C0.104667 12.534 0.45 13.7653 1.34267 14.6573C2.23933 15.554 3.46667 15.8953 4.70133 15.952C5.55467 15.9907 5.82733 16 8 16C10.1727 16 10.4453 15.9907 11.2987 15.952C12.5347 15.8953 13.764 15.5507 14.6573 14.6573C15.5553 13.7593 15.8953 12.5347 15.952 11.2987C15.9907 10.4453 16 10.1727 16 8C16 5.82733 15.9907 5.55467 15.952 4.70133C15.8953 3.46467 15.5507 2.236 14.6573 1.34267C13.762 0.447333 12.5313 0.104 11.2987 0.048C10.4453 0.00933333 10.1727 0 8 0Z" fill="white"/>
                <path d="M7.99863 3.89062C5.72996 3.89062 3.89062 5.72996 3.89062 7.99863C3.89062 10.2673 5.72996 12.1066 7.99863 12.1066C10.2673 12.1066 12.1066 10.2673 12.1066 7.99863C12.1066 5.72996 10.2673 3.89062 7.99863 3.89062ZM7.99863 10.6653C6.52596 10.6653 5.33196 9.47129 5.33196 7.99863C5.33196 6.52596 6.52596 5.33196 7.99863 5.33196C9.47129 5.33196 10.6653 6.52596 10.6653 7.99863C10.6653 9.47129 9.47129 10.6653 7.99863 10.6653Z" fill="white"/>
                <path d="M12.2725 4.68953C12.8027 4.68953 13.2325 4.25972 13.2325 3.72953C13.2325 3.19934 12.8027 2.76953 12.2725 2.76953C11.7423 2.76953 11.3125 3.19934 11.3125 3.72953C11.3125 4.25972 11.7423 4.68953 12.2725 4.68953Z" fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0_13591_2959">
                  <rect width="16" height="16" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </Box>
        </Link>
      </Box>

      </Flex>
      <Flex  mt={4}>
        <Text fontSize="14px" color="gray.600">© 2024 BaoDao Talk company Limited</Text>
        <Box marginLeft="auto" marginRight="50px">
        <Link href="/terms-of-use" color="gray.600" fontSize="14px">Terms of Use</Link>
        </Box>
        <Box marginRight="50px">
        <Link href="/privacy-policy" color="gray.600" fontSize="14px">Privacy Policy</Link>
        </Box>
        <Box>
        <Link href="/contact-us" color="gray.600" fontSize="14px">Contact us</Link>
      </Box>
      </Flex>
      
      
    </Box>
    
  );

  const MobileLayout = () => (
    <Box
    bg="var(--Grey-10)"
    padding="32px 16px"
    flexDirection="column"
    justifyContent="center"
    alignItems="flex-start"
    gap="19px"
  >
      <Box
        // display="flex"
        width="160px"
        height="60px"
        bg="var(--Grey-10)"
        mb="16px"
      >
        <Image
          src="https://static-prod-baodao.s3.amazonaws.com/logo-horizontal-v2.png"
          alt="Logo"
          width="100%" // 確保圖片填滿容器
          height="100%"
          objectFit="cover" // 確保圖片按比例縮放
        />
      </Box>
      <Box
        borderBottom="1px solid #ADACAC"
      >
        <Text fontSize="16px" fontWeight="bold" mb="5px">BaoDao Talk</Text>
        <Box mb="5px"> 
          <Link href="/blog" color="gray.600" fontSize="14px">Blog</Link>
        </Box>
        <Box mb="10px">
          <Link href="/faqs" color="gray.600" fontSize="14px">FAQs</Link>
        </Box>
        <Text fontSize="16px" fontWeight="bold" mb="5px">Learn resources</Text>
        <Box mb="5px">
          <Link href="/1-on-1lessons" color="gray.600" fontSize="14px">1- on -1 lessons</Link>
        </Box>
        <Box mb="5px">
          <Link href="/find-tutors" color="gray.600" fontSize="14px">Find tutors</Link>
        </Box>
        <Box mb="5px">
          <Link href="/chinese-speaking" color="gray.600" fontSize="14px">Chinese speaking challenge</Link>
        </Box>
        <Box mb="10px"> 
          <Link href="/practice-chinese" color="gray.600" fontSize="14px">Practice Chinese strokes</Link>
        </Box>
        <Text fontSize="16px" fontWeight="bold" mb="5px">For teacher</Text>
        <Box mb="20px"> 
          <Link href="/address" color="gray.600" fontSize="14px">Become a tutor</Link>
        </Box>
        <Box display="flex" flexDirection="row" gap="20px">
        <Link href="https://www.linkedin.com/" isExternal>
          <Box
            display="flex"
            width="32px"
            height="32px"
            padding="6px"
            justifyContent="center"
            alignItems="center"
            flexShrink="0"
            bg="black"
            borderRadius="50%"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <g clipPath="url(#clip0_12923_2810)">
                <path d="M2.00172 14.3996H4.40172V5.51961H2.00172V14.3996ZM3.20172 1.59961C2.40172 1.59961 1.76172 2.23961 1.76172 3.03961C1.76172 3.83961 2.40172 4.47961 3.20172 4.47961C4.00172 4.47961 4.64172 3.83961 4.64172 3.03961C4.64172 2.23961 4.00172 1.59961 3.20172 1.59961ZM8.48172 6.87961V5.51961H6.08172V14.3996H8.48172V9.83961C8.48172 7.27961 11.7617 7.11961 11.7617 9.83961V14.3996H14.1617V8.95961C14.1617 4.63961 9.60172 4.79961 8.48172 6.87961Z" fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0_12923_2810">
                  <rect width="16" height="16" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </Box>
        </Link>
        <Link href="https://www.facebook.com/" isExternal>
          <Box
            display="flex"
            width="32px"
            height="32px"
            padding="6px"
            justifyContent="center"
            alignItems="center"
            flexShrink="0"
            bg="black"
            borderRadius="50%"
            mb="20px"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <g id="facebook-svgrepo-com 1">
                <path id="Vector" d="M13.7188 3.12848L11.6525 3.12598C9.64875 3.12598 8.35437 4.45348 8.35437 6.51035V8.06973H6.28125V10.8916H8.35437L8.35187 16.876H11.2525L11.255 10.8916H13.6337L13.6319 8.07035H11.255V6.74723C11.255 6.11098 11.4056 5.7891 12.2337 5.7891L13.7125 5.78848L13.7188 3.12848Z" fill="white"/>
              </g>
            </svg>
          </Box>
        </Link>
        <Link href="https://www.instagram.com/" isExternal>
          <Box
            display="flex"
            width="32px"
            height="32px"
            padding="6px"
            justifyContent="center"
            alignItems="center"
            flexShrink="0"
            bg="black"
            borderRadius="50%"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <g clip-path="url(#clip0_13591_2959)">
                <path d="M8 1.44133C10.136 1.44133 10.3893 1.44933 11.2327 1.488C12.1047 1.528 13.0027 1.72667 13.638 2.362C14.2793 3.00333 14.472 3.89267 14.512 4.76733C14.5507 5.61067 14.5587 5.864 14.5587 8C14.5587 10.136 14.5507 10.3893 14.512 11.2327C14.4727 12.1 14.2693 13.0067 13.638 13.638C12.9967 14.2793 12.108 14.472 11.2327 14.512C10.3893 14.5507 10.136 14.5587 8 14.5587C5.864 14.5587 5.61067 14.5507 4.76733 14.512C3.90667 14.4727 2.988 14.2647 2.362 13.638C1.724 13 1.528 12.102 1.488 11.2327C1.44933 10.3893 1.44133 10.136 1.44133 8C1.44133 5.864 1.44933 5.61067 1.488 4.76733C1.52733 3.90333 1.73267 2.99133 2.362 2.362C3.002 1.722 3.89467 1.528 4.76733 1.488C5.61067 1.44933 5.864 1.44133 8 1.44133ZM8 0C5.82733 0 5.55467 0.00933333 4.70133 0.048C3.46467 0.104667 2.23667 0.448667 1.34267 1.34267C0.445333 2.24 0.104667 3.46533 0.048 4.70133C0.00933333 5.55467 0 5.82733 0 8C0 10.1727 0.00933333 10.4453 0.048 11.2987C0.104667 12.534 0.45 13.7653 1.34267 14.6573C2.23933 15.554 3.46667 15.8953 4.70133 15.952C5.55467 15.9907 5.82733 16 8 16C10.1727 16 10.4453 15.9907 11.2987 15.952C12.5347 15.8953 13.764 15.5507 14.6573 14.6573C15.5553 13.7593 15.8953 12.5347 15.952 11.2987C15.9907 10.4453 16 10.1727 16 8C16 5.82733 15.9907 5.55467 15.952 4.70133C15.8953 3.46467 15.5507 2.236 14.6573 1.34267C13.762 0.447333 12.5313 0.104 11.2987 0.048C10.4453 0.00933333 10.1727 0 8 0Z" fill="white"/>
                <path d="M7.99863 3.89062C5.72996 3.89062 3.89062 5.72996 3.89062 7.99863C3.89062 10.2673 5.72996 12.1066 7.99863 12.1066C10.2673 12.1066 12.1066 10.2673 12.1066 7.99863C12.1066 5.72996 10.2673 3.89062 7.99863 3.89062ZM7.99863 10.6653C6.52596 10.6653 5.33196 9.47129 5.33196 7.99863C5.33196 6.52596 6.52596 5.33196 7.99863 5.33196C9.47129 5.33196 10.6653 6.52596 10.6653 7.99863C10.6653 9.47129 9.47129 10.6653 7.99863 10.6653Z" fill="white"/>
                <path d="M12.2725 4.68953C12.8027 4.68953 13.2325 4.25972 13.2325 3.72953C13.2325 3.19934 12.8027 2.76953 12.2725 2.76953C11.7423 2.76953 11.3125 3.19934 11.3125 3.72953C11.3125 4.25972 11.7423 4.68953 12.2725 4.68953Z" fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0_13591_2959">
                  <rect width="16" height="16" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </Box>
        </Link>
      </Box>
      </Box>
      <Box mb="5px" mt="20px"> 
      <Text fontSize="14px" color="gray.600" >© 2024 BaoDao Talk company Limited</Text>
      </Box>
      <Box mb="5px">
        <Link href="/terms-of-use" color="gray.600" fontSize="14px">Terms of Use</Link>
      </Box>
      <Box mb="5px">
        <Link href="/privacy-policy" color="gray.600" fontSize="14px">Privacy Policy</Link>
      </Box>
      <Box mb="5px">
        <Link href="/contact-us" color="gray.600" fontSize="14px">Contact us</Link>
      </Box>
  

  </Box>
  );

  return isMD ? <DesktopLayout /> : <MobileLayout />;

} 