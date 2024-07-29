import React, { useState, useRef, useEffect } from 'react';
import { Box, Flex, Text, Stack } from '@chakra-ui/react';
import { poppins, roboto } from '../app/fonts';

// 表格數據
const data = [
  { name: 'Number of students', baodao: '1-on-1 classes', chinese: 'Group classes', other: '1-on-1 or group' },
  { name: 'Language types', baodao: 'Traditional Chinese', chinese: 'Simplified Chinese', other: 'Simplified Chinese' },
  { name: 'Teachers', baodao: 'Evaluated and graded', chinese: 'Fixed teachers', other: 'Large and uneven' },
  { name: 'Tutor professional support', baodao: 'Available', chinese: 'Not always', other: 'No' },
  { name: 'Course prices', baodao: 'Fixed based on tutors level', chinese: 'Varies by school', other: 'Set by tutors, vicious competition' },
  { name: 'Chinese proficiency test courses', baodao: 'Available', chinese: 'Available', other: 'Not necessarily' },
  { name: 'Teaching materials', baodao: 'Complete and serialized', chinese: 'Varies by school', other: 'Prepared by tutors' },
  { name: 'Customized lesson', baodao: 'Available', chinese: 'Not available', other: 'Not always' },
  { name: 'Payment method', baodao: 'Small installments', chinese: 'Long-term and large', other: 'Small installments' },
  { name: 'Refund service', baodao: 'Complete refund policy', chinese: 'Not necessarily', other: 'Only refund to the platform account' },
];

const SwipeableTable = () => {
  // 是否顯示提示的狀態
  const [showHint, setShowHint] = useState(true);
  // 滾動位置
  const [scrollPosition, setScrollPosition] = useState(0);
  // 參考滾動容器的引用
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // 如果不需要顯示提示則返回
    if (!showHint) return;
    
    // 設定 3 秒後隱藏提示
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 3000);

    // 清除計時器
    return () => clearTimeout(timer);
  }, [showHint]);

  // 滾動事件處理
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      setScrollPosition(scrollContainerRef.current.scrollLeft);
      setShowHint(false);
    }
  };

  // 列寬設置
  const columnWidths = [135, 185, 185, 185];
  const totalWidth = columnWidths.reduce((a, b) => a + b, 0);

  return (
    <Box position="relative" width="100%" overflowX="hidden" padding="0px 16px 0px 16px">
      <Flex ref={scrollContainerRef} overflowX="auto" onScroll={handleScroll} direction="column">
        {data.map((item, index) => (
          <Flex
            key={index}
            bg={index % 2 === 0 ? '#D9D9D9' : 'var(--White--Background)'}
            borderBottom="1px solid #E2E8F0"
            p={4}
            width={`calc(${320 + totalWidth}px + 32px)`} // Add extra padding for horizontal scroll
            align="center"
            justify="space-between"
          >
            <Box width={`${columnWidths[0]}px`} color="#262626" fontFamily={poppins.style.fontFamily} fontSize="16px" fontWeight="700">
              {item.name}
            </Box>
            <Flex
            
              bg={index % 2 === 0 ? '#2F5289' : '#385C95'}
              // width={`${columnWidths[1]}px`}
              width="325px"
              color="var(--White--Background)"
              fontFamily={poppins.style.fontFamily}
              fontSize="16px"
              fontWeight="700"
              align="center"
              justify="center"
              textAlign="center"
              direction="column"
            >
              <Box width="20px" height="20px" flexShrink="0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="9" stroke="white" strokeWidth="2"/>
                  <circle cx="10" cy="10" r="5.66667" stroke="white" strokeWidth="2"/>
                </svg>
              </Box>
              <Text>{item.baodao}</Text>
            </Flex>
            <Box width={`${columnWidths[2]}px`} color="#262626" fontFamily={poppins.style.fontFamily} fontSize="16px" fontWeight="700">
              {item.chinese}
            </Box>
            <Box width={`${columnWidths[3]}px`} color="#262626" fontFamily={poppins.style.fontFamily} fontSize="16px" fontWeight="700">
              {item.other}
            </Box>
          </Flex>
        ))}
      </Flex>
      {showHint && (
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          width="122px"
          height="122px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexShrink="0"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="122" height="122" viewBox="0 0 122 122" fill="none">
            <g clipPath="url(#clip0_12744_10698)">
              <rect width="122" height="122" rx="61" fill="#F5F6F9"/>
              <path d="M86.2578 0H35.7422C16.003 0 0 16.003 0 35.7422V86.2578C0 105.997 16.003 122 35.7422 122H86.2578C105.997 122 122 105.997 122 86.2578V35.7422C122 16.003 105.997 0 86.2578 0ZM61.9031 26.2395L65.8276 22.315C66.3828 21.7598 67.2906 21.7694 67.8315 22.346C68.3557 22.9036 68.3009 23.79 67.76 24.3309L66.2589 25.8321H79.9958L78.497 24.3333C77.9394 23.7757 77.9108 22.8345 78.4803 22.2912C78.7496 22.0339 79.0951 21.9076 79.443 21.9076C79.7909 21.9076 80.1578 22.0434 80.4295 22.3174L84.354 26.2419C84.8996 26.7876 84.8996 27.6716 84.354 28.2173L80.4295 32.1418C79.8743 32.697 78.9664 32.6874 78.4255 32.1108C77.9013 31.5532 77.9561 30.6668 78.497 30.1259L79.9982 28.6247H66.2612L67.76 30.1235C68.3176 30.6811 68.3462 31.6223 67.7767 32.1656C67.5075 32.4229 67.1619 32.5492 66.8141 32.5492C66.4662 32.5492 66.0992 32.4134 65.8276 32.1394L61.9031 28.2149C61.3574 27.6692 61.3574 26.7852 61.9031 26.2395ZM34.5746 61.641C32.5754 59.6418 32.5754 56.4012 34.5746 54.402C36.5738 52.4028 39.8144 52.4028 41.8136 54.402L47.53 60.1184V23.3039C47.53 20.4755 49.8222 18.1856 52.6482 18.1856C55.4766 18.1856 57.7665 20.4779 57.7665 23.3039V42.4784C57.7665 39.65 60.0588 37.3601 62.8848 37.3601C65.7132 37.3601 68.0031 39.6524 68.0031 42.4784V47.5037C68.0031 44.6754 70.2953 42.3855 73.1214 42.3855C75.9498 42.3855 78.2396 44.6777 78.2396 47.5037V53.0891C78.2396 50.2607 80.5319 47.9708 83.3579 47.9708C86.1863 47.9708 88.4762 50.263 88.4762 53.0891V64.6743C88.4762 66.0492 88.2236 67.4098 87.728 68.6917L83.5462 79.5383C83.0529 80.8202 82.798 82.1832 82.798 83.5557C82.798 84.3516 82.1522 84.9997 81.354 84.9997H53.3369C52.6268 84.9997 52.0335 84.4802 51.912 83.7797C51.5593 81.7614 50.6562 79.8647 49.2837 78.3111L34.5627 61.6434L34.5746 61.641ZM88.9218 98.2314C88.9218 101.315 86.4222 103.817 83.3365 103.817H51.6927C48.6094 103.817 46.1074 101.317 46.1074 98.2314V92.6461C46.1074 89.5628 48.607 87.0608 51.6927 87.0608H83.3389C86.4222 87.0608 88.9242 89.5604 88.9242 92.6461V98.2314H88.9218Z" fill="#313030" fillOpacity="0.95"/>
            </g>
            <defs>
              <clipPath id="clip0_12744_10698">
                <rect width="122" height="122" rx="61" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <Box position="absolute" bottom="20px" textAlign="center" color="#313030">
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default SwipeableTable;
