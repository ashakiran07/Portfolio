"use client"; // Add this at the top of the file

import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Image from 'next/image';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/system';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export default function MediaCover() {
  const [open, setOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const handleOpen = (media) => {
    setSelectedMedia(media);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedMedia(null);
  };

  return (
    <>
      <Box
        component="ul"
        sx={{
          display: 'flex',
          gap: 2,
          flexWrap: 'wrap',
          bgcolor: 'black',
          p: 0,
          m: 0,
          listStyle: 'none',
          justifyContent: 'space-between',
        }}
      >
        {[
          {
            src: '/images/media/gallery6.png',
            alt: 'First slide',
            caption:
              'Breathing life and soothing soul with what dwells on the Other Side; over the mountains and through the woods.',
          },
          {
            src: '/images/media/gallery1.png',
            alt: 'Second slide',
            caption: 'The Long Run',
          },
          {
            src: '/images/media/gallery2.png',
            alt: 'Third slide',
            caption: 'As long as there are memories, we’ll meet.',
          },
          {
            src: '/images/media/gallery3.png',
            alt: 'Fourth slide',
            caption: 'As long as there are memories, we’ll meet.',
          },
          {
            src: '/images/media/gallery4.png',
            alt: 'Fifth slide',
            caption:
              'Here I stand and look back. The moment that is over. And I wonder over the countless hours. We won’t be living together anymore. It made me smile and embrace you then. Now I can only smile. But, look, that smile. Have lasted all this while.',
          },
          {
            src: '/images/media/gallery5.png',
            alt: 'Sixth slide',
            caption:
              'Lost in alleys that remind me of fairy tales. Doesn’t it look like a postcard or is it only me who feels so?',
          },
          {
            src: '/images/media/gallery0.png',
            alt: 'Seventh slide',
            caption: 'I guess then it’s so much true- Who feels becomes free.',
          },
          {
            src: '/images/media/gallery7.png',
            alt: 'Eighth slide',
            caption: 'What does your heart say when the world around you becomes quiet?',
          },
          {
            src: '/images/media/gallery8.png',
            alt: 'Ninth slide',
            caption: 'Here’s the summer in the light and winter in the shade. Oh!hello Vitamin D.',
          },
          {
            src: '/images/media/gallery9.png',
            alt: 'Tenth slide',
            caption: 'I remember times through my senses. I see, I smell, I hear and I feel it.',
          },
          {
            src: '/images/media/gallery10.png',
            alt: 'Eleventh slide',
            caption:
              'I leave a part of me in you and take a part of you with me. Auf Wiedersehen my friend. Bid you farewell. Meet you on the other side with a new story to begin with.',
          },
          {
            src: 'https://assets.codepen.io/6093409/river.mp4',
            alt: 'Video slide',
            caption: '',
            isVideo: true,
          },
        ].map((item, index) => (
          <MediaCard key={index} item={item} onOpen={handleOpen} />
        ))}
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            maxWidth: '90%',
            maxHeight: '90%',
            overflow: 'auto',
          }}
        >
          {selectedMedia && (
            <div>
              {selectedMedia.isVideo ? (
                <video controls style={{ width: '100%' }}>
                  <source src={selectedMedia.src} type="video/mp4" />
                </video>
              ) : (
                <Image src={selectedMedia.src} alt={selectedMedia.alt} width={800} height={600} layout="responsive" />
              )}
            </div>
          )}
        </Box>
      </Modal>
    </>
  );
}

function MediaCard({ item, onOpen }) {
  const [readMore, setReadMore] = useState(false);

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  const isLongCaption = item.caption.split(' ').length > 20;

  return (
    <Card sx={{ width: '30%', maxWidth: 300 }}>
      <div onClick={() => onOpen(item)} style={{ cursor: 'pointer' }}>
        {item.isVideo ? (
          <video autoPlay loop muted poster="https://assets.codepen.io/6093409/river.jpg" style={{ width: '100%', height: '200px', objectFit: 'cover' }}>
            <source src={item.src} type="video/mp4" />
          </video>
        ) : (
          <Image src={item.src} alt={item.alt} width={300} height={200} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
        )}
      </div>
      <CardContent sx={{ p: 2 }}>
        <Typography variant="h5" component="div">
          {readMore ? item.caption : item.caption.split(' ').slice(0, 20).join(' ') + (isLongCaption ? '...' : '')}
        </Typography>
        {isLongCaption && (
          <Typography variant="body2" sx={{ color: 'blue', cursor: 'pointer' }} onClick={toggleReadMore}>
                        {readMore ? 'Read less' : 'Read more'} <ArrowForwardIcon sx={{ ml: 0.5, fontSize: '1rem' }} />
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
