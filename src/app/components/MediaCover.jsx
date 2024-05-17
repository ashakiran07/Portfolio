import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

export default function MediaCover() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <Box
      component="ul"
      sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
    >
        <Card>
            <div>
              <img
                src="/images/media/gallery0.png"
                alt="First slide"
                className="slick-image"
              />
              <div className="slick-caption">
                <h5>
                  Breathing life and soothing soul with what dwells on the Other Side; over the mountains and through the woods.

                </h5>
              </div>
            </div>
            <div>
              <img
                src="/images/media/gallery1.png"
                alt="Second slide"
                className="slick-image"
              />
              <div className="slick-caption">
                <h5>
                As long as there are memories, we’ll meet.

                </h5>
              </div>
            </div>
            <div>
              <img
                src="/images/media/gallery2.png"
                alt="Third slide"
                className="slick-image"
              />
              <div className="slick-caption">
                <h5>
                The Long Run

                </h5>
              </div>
            </div>
            <div>
              <img
                src="/images/media/gallery3.png"
                alt="Third slide"
                className="slick-image"
              />
              <div className="slick-caption">
                <h5>
                As long as there are memories, we’ll meet.

                </h5>
              </div>
              </div>
              <div>
              <img
                src="/images/media/gallery4.png"
                alt="Third slide"
                className="slick-image"
              />
              <div className="slick-caption">
                <h5>
                Here I stand and look back. The moment that is over. And I wonder over the countless hours. We won’t be living together anymore.
            It made me smile and embrace you then. Now I can only smile. But, look, that smile. Have lasted all this while.
                </h5>
              </div>
              </div>
              <div>
              <img
                src="/images/media/gallery5.png"
                alt="Third slide"
                className="slick-image"
              />
              <div className="slick-caption">
                <h5>
                Lost in alleys with the beautiful half-timbered houses on the Schlossberg built in around 1920s that remind me of fairy tales. Doesn’t it look like a postcard or is it only me who feels so?

                </h5>
              </div>
              </div>
              <div>
              <img
                src="/images/media/gallery6.png"
                alt="Third slide"
                className="slick-image"
              />
              <div className="slick-caption">
                <h5>
                I guess then it’s so much true- Who feels becomes free.

                </h5>
              </div>
              </div>
              <div>
              <img
                src="/images/media/gallery7.png"
                alt="Third slide"
                className="slick-image"
              />
              <div className="slick-caption">
                <h5>
                What does your heart say when the world around you becomes quiet?

                </h5>
              </div>
              </div>
              <div>
              <img
                src="/images/media/gallery8.png"
                alt="Third slide"
                className="slick-image"
              />
              <div className="slick-caption">
                <h5>
                Here’s the summer in the light and winter in the shade. Oh!hello Vitamin D.

                </h5>
              </div>
              </div>
              <div>
              <img
                src="/images/media/gallery9.png"
                alt="Third slide"
                className="slick-image"
              />
              <div className="slick-caption">
                <h5>
                I remember times through my senses. I see, I smell, I hear and I feel it.

                </h5>
              </div>
              </div>
              <div>
              <img
                src="/images/media/gallery10.png"
                alt="Third slide"
                className="slick-image"
              />
              <div className="slick-caption">
                <h5>
                I leave a part of me in you and take a part of you with me. Auf Wiedersehen my friend. Bid you farewell. Meet you on the other side with a new story to begin with.

                </h5>
              </div>
              </div>
              <div>
              <video
            autoPlay
            loop
            muted
            poster="https://assets.codepen.io/6093409/river.jpg"
          >
            <source
              src="https://assets.codepen.io/6093409/river.mp4"
              type="video/mp4"
            />
          </video>
              <div className="slick-caption">
                <h4>

                </h4>
              </div>
              </div>
        </Card>
        </Box>
  );
}
