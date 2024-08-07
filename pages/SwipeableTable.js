import React, { useRef } from 'react';
import { Box, Flex, Text, Button } from '@chakra-ui/react';
import { poppins, roboto } from '../app/fonts';
import { useBreakpointValue } from '@chakra-ui/media-query';
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
// 三角形
const Triangle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M2.39019 18.0983L10.6151 3.89171C11.0696 3.10655 11.2969 2.71396 11.5935 2.58211C11.8521 2.4671 12.1474 2.4671 12.4061 2.58211C12.7026 2.71396 12.9299 3.10654 13.3844 3.89171L21.6093 18.0983C22.0655 18.8863 22.2936 19.2803 22.2599 19.6037C22.2305 19.8857 22.0827 20.142 21.8534 20.3088C21.5904 20.5 21.1352 20.5 20.2246 20.5H3.77487C2.86435 20.5 2.40908 20.5 2.14613 20.3088C1.91677 20.142 1.769 19.8857 1.73959 19.6037C1.70588 19.2803 1.93398 18.8863 2.39019 18.0983Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
// 圓形
const Circle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="12" r="11" stroke="#313030" stroke-width="2"/>
  <circle cx="12" cy="12" r="7" stroke="#313030" stroke-width="2"/>
</svg>
);
// X
const Xclose = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M18 6L6 18M6 6L18 18" stroke="#313030" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
);


const SwipeableTable = () => {
  const [showHint, setShowHint] = React.useState(true);
  const scrollContainerRef = useRef(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      setShowHint(false);
    }
  };
  
  const isXL = useBreakpointValue({ base: false, xl: true });

  return (
    <Box position="relative" width="100%"  padding="16px" >
      {isXL ? (
      <Flex borderRadius="8px" direction="row" overflowX="auto" onScroll={handleScroll} ref={scrollContainerRef} alignItems="center" justifyContent="center">
      
        {/* 第一個區塊 */}
        <Flex direction="column" width="258px"  marginTop="-40px">

          {data.map((item, index) => (
            <Flex
              
              key={index}
              bg={index % 2 === 0 ? '#D9D9D9' : 'var(--White--Background)'}
              // borderBottom="1px solid #E2E8F0"
              width="258px" // 固定寬度
              height="84px" // 固定高度
              p={4}
              align="center"
              justify="space-between"
              borderTopLeftRadius={item.name === 'Number of students' ? '8px' : '0px'}
              borderBottomLeftRadius={item.name === 'Refund service' ? '8px' : '0px'}
            >
              
              <Text color="#262626" fontFamily={poppins.style.fontFamily} fontSize="16px" fontWeight="700">
                {item.name}
              </Text>
            </Flex>
          ))}
          
        </Flex>

        {/* 第二個區塊 */}
        <Flex direction="column" width="300px" >
        <Flex borderTopRadius="8px" bg="#385C95" height="40px" align="center" justify="center">
            <Text color="white" fontFamily={poppins.style.fontFamily} fontSize="16px" fontWeight="700">
              BaoDao Talk
            </Text>
          </Flex>
          {data.map((item, index) => (
            <Flex
              key={index}
              bg={index % 2 === 0 ? '#2F5289' : '#385C95'}
              borderBottom="1px solid #385C95"
              borderTop="1px solid #2F5289"
              // width="157px" // 固定寬度
              height="84px" // 固定高度
              p={4}
              align="center"
              justify="space-between"
              
            >
              <Flex
                width="100%"
                color="var(--White--Background)"
                fontFamily={poppins.style.fontFamily}
                fontSize="16px"
                fontWeight="700"
                align="center"
                justify="center"
                textAlign="center"
                direction="column"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="9" stroke="white" strokeWidth="2"/>
                  <circle cx="10" cy="10" r="5.66667" stroke="white" strokeWidth="2"/>
                </svg>
                <Text>{item.baodao}</Text>
              </Flex>
              
            </Flex>
            
            
          ))}
          {/* Get started橘色按鈕區塊 */}
          <Flex
            bg="#2F5289"
            width="300px" // 固定寬度
            height="81px" // 固定高度
            align="center"
            justify="center"
            borderBottomRadius="8px" // 只有底部邊角圓角
            
          >
            <Button 
              bg="var(--Secondary-200)"  
              _hover={{ bg: '#FE9000' }}
              display="flex"
              width="134px"
              height="40px"
              padding="12px 24px"
              justifyContent="center"
              alignItems="center"
              flexShrink="0"
              borderRadius="4px"
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
          </Flex>
        </Flex>

        {/* 第三個區塊 */}
        <Flex direction="column" width="300px" marginTop="-80px">
        <Flex borderTopRadius="8px" bg="var(--Grey-100)" width="230px" height="40px"  alignItems="center" justifyContent="center" marginLeft="40px">
            <Text color="var(--White--Background)" fontFamily={poppins.style.fontFamily} fontSize="16px" fontWeight="700">
            Chinese language School
            </Text>
          </Flex>
        
          {data.map((item, index) => (
            <Flex
              key={index}
              bg={index % 2 === 0 ? '#D9D9D9' : 'var(--White--Background)'}
              // borderBottom="1px solid #E2E8F0"
              width="300px" // 固定寬度
              height="84px" // 固定高度
              p={4}
              align="center"
              // justify="space-between"
              justify="center" // 置中內容
              textAlign="center" // 文字置中
              direction="column" // 垂直排列
            >
              {['Group classes', 'Simplified Chinese', 'Not always', 'Varies by school', 'Long-term and large', 'Not necessarily'].includes(item.chinese) && <Triangle />}
              {['Available'].includes(item.chinese) && <Circle />}
              {['Not available'].includes(item.chinese) && <Xclose />}
              <Text 
                color="#262626" 
                fontFamily={poppins.style.fontFamily} 
                fontSize="16px" 
                fontWeight="700"
                >
                {item.chinese}
              </Text>
            </Flex>
          ))}
        </Flex>

        {/* 第四個區塊 */}
        <Flex direction="column" width="300px" marginTop="-80px">
        <Flex borderTopRadius="8px" bg="var(--Grey-100)" width="230px" height="40px"  alignItems="center" justifyContent="center" marginLeft="40px">
            <Text color="var(--White--Background)" fontFamily={poppins.style.fontFamily} fontSize="16px" fontWeight="700">
            Other Online Brands
            </Text>
          </Flex>
          {data.map((item, index) => (
            <Flex
              key={index}
              bg={index % 2 === 0 ? '#D9D9D9' : 'var(--White--Background)'}
              // borderBottom="1px solid #E2E8F0"
              width="300px" // 固定寬度
              height="84px" // 固定高度
              p={4}
              align="center"
              justify="center" // 置中內容
              textAlign="center" // 文字置中
              direction="column" // 垂直排列
              borderTopRightRadius={item.name === 'Number of students' ? '8px' : '0px'} 
              borderBottomRightRadius={item.name === 'Refund service' ? '8px' : '0px'} 
              
            >
              {['Simplified Chinese', 'Prepared by tutors'].includes(item.other) && <Triangle />}
              {['Small installments'].includes(item.other) && <Circle />}
              {['No'].includes(item.other) && <Xclose />}
              <Text color="#262626" fontFamily={poppins.style.fontFamily} fontSize="16px" fontWeight="700">
                {item.other}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
) : (
  <Flex borderRadius="8px" direction="row" overflowX="auto" onScroll={handleScroll} ref={scrollContainerRef} alignItems="center" >
      
        {/* 第一個區塊 */}
        <Flex direction="column" width="200px"  marginTop="-40px" position="sticky" left="0" zIndex="1" bg="white" 
        _after={{
          content: '""',
          position: 'absolute', // 使用 absolute 定位偽元素
          bottom: '-100',
          left: '-2px',
          width: '202px',
          height: '1000px', // 根據需要設置底部區域的高度
          bg: "#F9FAFC", // 設置底部背景顏色
          zIndex: '-1', // 確保背景在內容下層
        }}
        >

          {data.map((item, index) => (
            <Flex
              
              key={index}
              bg={index % 2 === 0 ? '#D9D9D9' : 'var(--White--Background)'}
              // borderBottom="1px solid #E2E8F0"
              width="200px" // 固定寬度
              height="84px" // 固定高度
              p={4}
              align="center"
              justify="space-between"
              borderTopLeftRadius={item.name === 'Number of students' ? '8px' : '0px'}
              borderBottomLeftRadius={item.name === 'Refund service' ? '8px' : '0px'}
            >
              
              <Text color="#262626" fontFamily={poppins.style.fontFamily} fontSize="16px" fontWeight="700">
                {item.name}
              </Text>
            </Flex>
          ))}
          
        </Flex>

        {/* 第二個區塊 */}
        <Flex direction="column" width="200px" >
        <Flex borderTopRadius="8px" bg="#385C95" height="40px" align="center" justify="center">
            <Text color="white" fontFamily={poppins.style.fontFamily} fontSize="16px" fontWeight="700">
              BaoDao Talk
            </Text>
          </Flex>
          {data.map((item, index) => (
            <Flex
              key={index}
              bg={index % 2 === 0 ? '#2F5289' : '#385C95'}
              borderBottom="1px solid #385C95"
              borderTop="1px solid #2F5289"
              // width="157px" // 固定寬度
              height="84px" // 固定高度
              p={4}
              align="center"
              justify="space-between"
              
            >
              <Flex
                width="100%"
                color="var(--White--Background)"
                fontFamily={poppins.style.fontFamily}
                fontSize="16px"
                fontWeight="700"
                align="center"
                justify="center"
                textAlign="center"
                direction="column"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="9" stroke="white" strokeWidth="2"/>
                  <circle cx="10" cy="10" r="5.66667" stroke="white" strokeWidth="2"/>
                </svg>
                <Text>{item.baodao}</Text>
              </Flex>
              
            </Flex>
            
            
          ))}
          {/* Get started橘色按鈕區塊 */}
          <Flex
            bg="#2F5289"
            width="200px" // 固定寬度
            height="81px" // 固定高度
            align="center"
            justify="center"
            borderBottomRadius="8px" // 只有底部邊角圓角
            
          >
            <Button 
              bg="var(--Secondary-200)"  
              _hover={{ bg: '#FE9000' }}
              display="flex"
              width="134px"
              height="40px"
              padding="12px 24px"
              justifyContent="center"
              alignItems="center"
              flexShrink="0"
              borderRadius="4px"
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
          </Flex>
        </Flex>

        {/* 第三個區塊 */}
        <Flex direction="column" width="300px" marginTop="-80px">
        <Flex borderTopRadius="8px" bg="var(--Grey-100)" width="230px" height="40px"  alignItems="center" justifyContent="center" marginLeft="40px">
            <Text color="var(--White--Background)" fontFamily={poppins.style.fontFamily} fontSize="16px" fontWeight="700">
            Chinese language School
            </Text>
          </Flex>
        
          {data.map((item, index) => (
            <Flex
              key={index}
              bg={index % 2 === 0 ? '#D9D9D9' : 'var(--White--Background)'}
              // borderBottom="1px solid #E2E8F0"
              width="300px" // 固定寬度
              height="84px" // 固定高度
              p={4}
              align="center"
              // justify="space-between"
              justify="center" // 置中內容
              textAlign="center" // 文字置中
              direction="column" // 垂直排列
            >
              {['Group classes', 'Simplified Chinese', 'Not always', 'Varies by school', 'Long-term and large', 'Not necessarily'].includes(item.chinese) && <Triangle />}
              {['Available'].includes(item.chinese) && <Circle />}
              {['Not available'].includes(item.chinese) && <Xclose />}
              <Text 
                color="#262626" 
                fontFamily={poppins.style.fontFamily} 
                fontSize="16px" 
                fontWeight="700"
                >
                {item.chinese}
              </Text>
            </Flex>
          ))}
        </Flex>

        {/* 第四個區塊 */}
        <Flex direction="column" width="300px" marginTop="-80px">
        <Flex borderTopRadius="8px" bg="var(--Grey-100)" width="230px" height="40px"  alignItems="center" justifyContent="center" marginLeft="40px">
            <Text color="var(--White--Background)" fontFamily={poppins.style.fontFamily} fontSize="16px" fontWeight="700">
            Other Online Brands
            </Text>
          </Flex>
          {data.map((item, index) => (
            <Flex
              key={index}
              bg={index % 2 === 0 ? '#D9D9D9' : 'var(--White--Background)'}
              // borderBottom="1px solid #E2E8F0"
              width="300px" // 固定寬度
              height="84px" // 固定高度
              p={4}
              align="center"
              justify="center" // 置中內容
              textAlign="center" // 文字置中
              direction="column" // 垂直排列
              borderTopRightRadius={item.name === 'Number of students' ? '8px' : '0px'} 
              borderBottomRightRadius={item.name === 'Refund service' ? '8px' : '0px'} 
              
            >
              {['Simplified Chinese', 'Prepared by tutors'].includes(item.other) && <Triangle />}
              {['Small installments'].includes(item.other) && <Circle />}
              {['No'].includes(item.other) && <Xclose />}
              <Text color="#262626" fontFamily={poppins.style.fontFamily} fontSize="16px" fontWeight="700">
                {item.other}
              </Text>
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
          zIndex="1"
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
      </Flex>
      
      )}
      
    </Box>
  );
};

export default SwipeableTable;
