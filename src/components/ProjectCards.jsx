import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';

export default function TitlebarImageList() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Projects</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
        
          />
         
          <ImageListItemBar
            title={item.title}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
                href={item.link}
              >
                
                <OpenInBrowserIcon></OpenInBrowserIcon>
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://i.ibb.co/MfRt0Sd/Untitled-design.png',
    title: 'Password Generator',
    rows: 2,
    cols: 2,
    featured: true,
    link: 'https://github.com/ojpushpull/jay4'
  },
  {
    img: 'https://i.ibb.co/93WnLNw/Watermarke.png',
    title: 'Watermarke Data Analytics Site',
    link: 'https://watermarke.netlify.app/'
  },
  {
    img: 'https://i.ibb.co/xDbcyxM/Site.png',
    title: 'Trivia Site',
    link: 'https://ojtriv.onrender.com/Registration'
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Food Buckets Site',
    cols: 2,
    link: 'https://github.com/ojpushpull/BucketsOfFoodsList'
  },
  
  {
    img: 'https://i.ibb.co/WsLR8g7/Pet-store-3.png',
    title: 'Dog Care Store',
    link: 'https://www.dogcare.cc'
  },
  {
    img: 'https://i.ibb.co/frf4rs2/Okera-Tech-Blog.png',
    title: 'Okera Tech Blog',
    rows: 2,
    cols: 2,
    link: 'https://okerajohnson.com'
  },
  {
    img: 'https://i.ibb.co/j6nZ8Kj/Heading-6.png',
    title: 'Web Service Site',
    link: 'https://ojovertime.xyz/'
  },
  {
    img: 'https://i.ibb.co/v3K6Ky9/API-Mongo-DB.png',
    title: 'API & Mongo Database Implementation',
    link: 'https://github.com/ojpushpull/ojhabs'
  },



];