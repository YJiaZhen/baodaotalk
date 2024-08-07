import React from 'react';
import { Box } from '@chakra-ui/react';

const CustomPagination = ({ activeIndex, totalSlides }) => {
  // 根據總頁數生成每個分頁指示項
const paginationItems = Array.from({ length: totalSlides }).map((_, index) => {
    const isActive = index === activeIndex; // 判斷當前項是否為活動項
    const fillColor = isActive ? '#7156E5' : '#ADACAC'; // 活動項與非活動項的顏色
    const width = isActive ? '8.5' : '8'; // 活動項與非活動項的寬度
    const x = index === 0 ? '0' : `${index * 13}`; // 調整每個項目的 x 位置

    return (
    <rect
        key={index}
        x={x}
        width={width}
        height="8"
        rx="4"
        fill={fillColor}
    />
    );
});

return (
    <Box padding="16px 118px 32px 130px" align="center" justify="center" >
    <svg xmlns="http://www.w3.org/2000/svg" width="83" height="8" viewBox="0 0 83 8" fill="none">
        {paginationItems}
    </svg>
    </Box>
);
};

export default CustomPagination;