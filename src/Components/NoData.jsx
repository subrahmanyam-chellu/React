import React from 'react'
import NewsItem from './NewsItem'
import noDataLogo from '/src/assets/7466140.png';


const NoData = () => {
    const title="No data found";
    const description=".......................";
    const url='';
    const src=noDataLogo;
  return (
     <NewsItem
          key={0}
          title={title}
          description={description}
          src={src}
          url={url}
        /> 
  )
}

export default NoData
