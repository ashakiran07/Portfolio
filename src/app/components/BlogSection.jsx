"use client";
import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

const cards = [
  { id: 'poem1', category: 'poems', title: 'Poem 1', description: 'This is the first poem.',
  image: '/images/blog/oauth.png', link: 'https://medium.com/@aashahope01/essential-git-commands-your-quick-reference-for-efficient-version-control-42a1bd0b912e' },
  { id: 'poem2', category: 'poems', title: 'Poem 2', description: 'This is the second poem.',
  image: '/images/blog/oauth.png', link: 'https://medium.com/@aashahope01/essential-git-commands-your-quick-reference-for-efficient-version-control-42a1bd0b912e' },
  { id: 'poem3', category: 'poems', title: 'Poem 3', description: 'This is the third poem.',
  image: '/images/blog/oauth.png', link: 'https://medium.com/@aashahope01/essential-git-commands-your-quick-reference-for-efficient-version-control-42a1bd0b912e' },
  { id: 'story1', category: 'stories', title: 'Story 1', description: 'This is the first story.',
  image: '/images/blog/oauth.png', link: 'https://medium.com/@aashahope01/essential-git-commands-your-quick-reference-for-efficient-version-control-42a1bd0b912e' },
  { id: 'story2', category: 'stories', title: 'Story 2', description: 'This is the second story.',
  image: '/images/blog/oauth.png', link: 'https://medium.com/@aashahope01/essential-git-commands-your-quick-reference-for-efficient-version-control-42a1bd0b912e' },
  { id: 'story3', category: 'stories', title: 'Story 3', description: 'This is the third story.',
  image: '/images/blog/oauth.png', link: 'https://medium.com/@aashahope01/essential-git-commands-your-quick-reference-for-efficient-version-control-42a1bd0b912e' },
  { id: 'article1', category: 'articles', title: '🚀 Essential Git Commands: Your Quick Reference for Efficient Version Control', description: 'This is the first article.',
  image: '/images/blog/git.png', link: 'https://medium.com/@aashahope01/essential-git-commands-your-quick-reference-for-efficient-version-control-42a1bd0b912e' },
  { id: 'article2', category: 'articles', title: '💎 Embarking on Ruby on Rails: A Beginner’s Manual ', description: 'This is the second article.',
  image: '/images/blog/rails.png', link: 'https://medium.com/@aashahope01/embarking-on-ruby-on-rails-a-beginners-manual-a29793eb5b6c' },
  { id: 'article3', category: 'articles', title: 'OAuth 2.0 Protocol Guidelines(What I learned)', description: 'This is the third article.',
  image: '/images/blog/oauth.png', link: 'https://medium.com/@aashahope01/oauth-2-0-protocol-guidelines-what-i-learned-dc9603667fef' },
];

export default function MediaCard() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const filteredCards = value === 0 ? cards : cards.filter(card => card.category === (value === 1 ? 'poems' : value === 2 ? 'stories' : 'articles'));

  return (
    <section id="gallery" className="my-12 text-center">
      <h2 className="text-4xl font-bold text-white mb-5">My Blog</h2>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="All" {...a11yProps(0)} sx={{ color: 'white', '&.Mui-selected': { color: 'blue' } }} />
          <Tab label="Poems" {...a11yProps(1)} sx={{ color: 'white', '&.Mui-selected': { color: 'blue' } }} />
          <Tab label="Stories" {...a11yProps(2)} sx={{ color: 'white', '&.Mui-selected': { color: 'blue' } }} />
          <Tab label="Articles" {...a11yProps(3)} sx={{ color: 'white', '&.Mui-selected': { color: 'blue' } }} />
        </Tabs>
      </Box>
      <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
        {filteredCards.map(card => (
          <Grid item key={card.id} xs={12} sm={6} md={4}>
            <Link href={card.link} passHref legacyBehavior>
              <Card sx={{ maxWidth: 345, cursor: 'pointer'}} component="a">
                <CardMedia
                  sx={{ height: 140 }}
                  image={card.image}
                  title={card.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" color="white">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="white">
                    {card.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" component="a" href={card.link}>Share</Button>
                  <Button size="small" component="a" href={card.link}>Learn More</Button>
                </CardActions>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </section>
  );
}
