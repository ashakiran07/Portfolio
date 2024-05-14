// PoemsComponent.jsx
import React from "react";

const PoemsComponent = () => {
  // Define your Poems content here
  return (

      <section className="poems">
        <article>
          <div className="article-wrapper">
            <figure>
              <img
                src="https://picsum.photos/id/1011/800/450"
                alt=""
              />
            </figure>
            <div className="article-body">
              <h2> From Plant Biotech to Tech: A Personal Journey of Growth and Exploration</h2>
              <p>
              Growing up in the picturesque landscapes of Nepal, my fascination with plants began at an early age. Surrounded by the vibrant colors and intricate structures of nature, I found solace and inspiration in the world of botany. Little did I know that this childhood curiosity would shape my future in ways I could have never imagined.

My journey into the realm of science led me to pursue a Master’s degree in Plant Biotechnology at Leibniz University Hannover in Germany. It was a dream come true to study in a country known for its innovation and excellence in research. During my studies, I delved deep into the world of plant science, learning the intricacies of plant growth, propagation techniques, and molecular analysis.

In the labs, I spent countless hours meticulously culturing plants, micropropagating rare species, and analyzing data to unravel the secrets of nature. Each experiment was a puzzle waiting to be solved, and I thrived on the challenges it presented. From designing experiments to interpreting results, every step was a testament to my passion for scientific inquiry.

However, life had another remarkable chapter in store for me. As I embarked on the journey of motherhood, my priorities shifted, and I took a career break to nurture and care for my child. It was a deeply fulfilling time, watching my little one grow and learn, but amidst the joys of motherhood, a newfound curiosity began to stir within me.

During those precious moments spent with my child, I discovered a growing interest in technology and its transformative potential. The world of coding and software development intrigued me, offering endless possibilities for creativity and innovation. With each passing day, my desire to explore this new frontier grew stronger, fueling a passion for learning and self-discovery.

Now, as I stand at the crossroads of my journey, I am ready to embark on a new adventure into the world of tech. Armed with a diverse skill set and a thirst for knowledge, I am determined to pursue my dreams with courage and conviction. The path ahead may be uncertain, but I am filled with excitement and optimism for the opportunities that lie ahead.

From optimizing plant growth algorithms to coding dynamic web applications, I am eager to apply my unique blend of expertise and experience to make a meaningful impact in the world of technology. With each line of code, I am reminded of the resilience and adaptability of nature, inspiring me to push boundaries and embrace new challenges with an open heart and a curious mind.

As I take this leap of faith into the unknown, I carry with me the lessons and memories of my past, shaping the person I am today. Though the journey may be challenging, I am guided by the belief that every step forward is a step closer to realizing my dreams. And so, with unwavering determination and a spirit of adventure, I embrace the future that awaits, ready to write the next chapter of my story.
              </p>
              <a href="#" className="read-more">
                Read more{" "}
                <span className="sr-only">about this is some title</span>


              </a>
            </div>
          </div>
        </article>
        {/* Add more articles here */}
      </section>
    );
};

export default PoemsComponent;
