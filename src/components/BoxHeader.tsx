// icon? 是一个可选属性，这意味着它可以存在也可以不存在。
// 如果 icon 属性存在，则它的类型为 React.ReactNode。
// 如果 icon 属性不存在，则它的类型为 undefined。

import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import FlexBetween from './FlexBetween'

type Props = {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  sideText: string;
}

const BoxHeader = ({ icon, title, subtitle, sideText }: Props) => {
  const { palette } = useTheme();
  return (
    <FlexBetween color={palette.grey[400]} margin="1.5rem 1rem 0 1rem">
      <FlexBetween>
        {icon}
        <Box width="100%">
          <Typography variant="h4" mb="-0.1rem">
            {title}
          </Typography>
          <Typography variant="h6">{subtitle}</Typography>
        </Box>
      </FlexBetween>
      <Typography variant="h5" fontWeight="700" color={palette.secondary[500]}>
        {sideText}
      </Typography>
    </FlexBetween>
  );
};

export default BoxHeader;