import React, { useState } from "react";
import Modal from "react-modal";
import Contact from "../contact/Contact";

Modal.setAppElement("#root");

const News = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <>
      <div className="row">
        <div
          className="col-md-6 m-15px-tb"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="blog-grid" onClick={toggleModalOne}>
            <div className="blog-img">
              <img
                src={`img/blog/HTYRLxskBEhrRWNJZg.png`}
                alt="blog post"
              ></img>
            </div>
            <div className="blog-info">
              <div className="meta">29/FEB/2024 - BY NYAMBURA</div>
              <h6>
                <a>Tech and Sleep: Finding Balance in a Digital World</a>
              </h6>
            </div>
          </div>
        </div>
        {/* End .col for blog-1 */}

        <div
          className="col-md-6 m-15px-tb"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div className="blog-grid" onClick={toggleModalTwo}>
            <div className="blog-img">
              <img src={`img/blog/HTYRLxskBEhnQWVD.png`} alt="blog post"></img>
            </div>
            <div className="blog-info">
              <div className="meta">05/JAN/2020 - BY NYAMBURA </div>
              <h6>
                <a>
                The Role of ML and AI in Sleep Technology: Dreaming Smarter
                </a>
              </h6>
            </div>
          </div>
        </div>
        {/* End .col for blog-2 */}

        <div
          className="col-md-6 m-15px-tb"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="400"
        >
          <div className="blog-grid" onClick={toggleModalThree}>
            <div className="blog-img">
              <img src={`img/blog/HTYRLxskBEhkRGNJ.png`} alt="blog post"></img>
            </div>

            <div className="blog-info">
              <div className="meta">12/AUG/2020 - BY NYAMBURA</div>
              <h6>
                <a>
                The Role of ML and AI in Sleep Technology: Dreaming Smarter
                </a>
              </h6>
            </div>
          </div>
        </div>
        {/* End .col for blog-3 */}

        <div
          className="col-md-6 m-15px-tb"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="800"
        >
          <div className="blog-grid" onClick={toggleModalFour}>
            <div className="blog-img">
              <img
                src={`img/blog/aotaro_A Drop Of Rainbow_YUdhQGZb.png`}
                alt="blog post"
              ></img>
            </div>

            <div className="blog-info">
              <div className="meta">22/JUN/2020 - BY NYAMBURA</div>
              <h6>
                <a>
                  What You Know About Design And What You Don't Know About
                  Design.
                </a>
              </h6>
            </div>
          </div>
        </div>
        {/* End .col for blog-4 */}
      </div>
      {/* End .row */}

      {/* Start Modal for Blog-1 */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="/img/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <img
                    src="img/blog/HTYRLxskBEhiRGVBa156.png"
                    alt="blog post"
                  ></img>
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    <h2>Tech and Sleep: Finding Balance in a Digital World</h2>
                    <div className="media">
                      <div className="avatar">
                        <img src="img/testimonial/team-1.jpg" alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>BY NYAMBURA</label>
                        <span>26 FEB 2024</span>
                      </div>
                    </div>
                  </div>
                  {/* End .article-title */}

                  <div className="article-content">
                    <p>
                      In today’s hyper-connected world, our lives revolve around
                      screens. Whether it’s scrolling through social media,
                      replying to emails, or binge-watching the latest series,
                      technology is ever-present—even when it shouldn’t be.
                      Ironically, the same gadgets designed to improve our lives
                      are robbing us of something priceless: sleep.
                    </p>
                    <p>
                      Research shows that blue light from devices disrupts our
                      circadian rhythm, tricking our brains into thinking it's
                      daytime. The result? Tossing, turning, and waking up
                      feeling like a zombie (without the thrill of a Halloween
                      costume). And let’s not even start on the doomscrolling
                      spiral right before bed—it’s a one-way ticket to
                      insomnia-ville.
                    </p>
                    <p>
                      But let’s be clear: Technology isn’t the villain of this
                      story. It’s the way we use it. Tech can also support
                      healthier sleep patterns. From sleep tracking apps to
                      calming white noise playlists and smart alarms, digital
                      tools can help us wind down. The key, like any good
                      relationship, is balance.
                    </p>
                    <h4>Tips for Tech-Sleep Harmony</h4>
                    <ul>
                      <li>
                        <strong>Set Digital Boundaries:</strong> Create a
                        no-screens rule at least an hour before bed. Replace
                        your phone with a book or meditation practice.
                      </li>
                      <li>
                        <strong>Leverage Sleep-Friendly Tech:</strong> Use apps
                        that guide relaxation or blue light filters on devices
                        to reduce strain in the evening.
                      </li>
                      <li>
                        <strong>Rethink Notifications:</strong> Do you really
                        need your phone pinging at 3 a.m. because your cousin
                        liked your post? Turn on “Do Not Disturb.”
                      </li>
                      <li>
                        <strong>Unplug Your Mind:</strong> Keep your bedroom
                        tech-free—a place for rest, not scrolling.
                      </li>
                    </ul>
                    <p>
                      Technology and sleep can coexist, but only when we become
                      intentional about our habits. After all, even our devices
                      need a reboot—why shouldn’t we? Balance isn’t just a
                      buzzword; it’s the secret to thriving in this digital
                      world without compromising our health.
                    </p>
                    <blockquote>
                      <p>Sleep well. Scroll smart. Thrive boldly.</p>
                      <p className="blockquote-footer">
                        Someone famous in{" "}
                        <cite title="Source Title">Dick Grayson</cite>
                      </p>
                    </blockquote>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                  {/* End article content */}
                  <ul className="nav tag-cloud">
                    <li href="#">Design</li>
                    <li href="#">Development</li>
                    <li href="#">Travel</li>
                    <li href="#">Web Design</li>
                    <li href="#">Marketing</li>
                    <li href="#">Research</li>
                    <li href="#">Managment</li>
                  </ul>
                  {/* End tag */}
                </article>
                {/* End Article */}

                <div className="contact-form article-comment">
                  <h4>Leave a Reply</h4>
                  <Contact />
                </div>
                {/* End .contact Form */}
              </div>
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for Blog-1 */}

      {/* Start Modal for Blog-2 */}
      <Modal
        isOpen={isOpen2}
        onRequestClose={toggleModalTwo}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalTwo}>
            <img src="/img/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src="img/blog/blog-2.jpg" alt="blog post"></img>
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    <h2>
                    The Role of ML and AI in Sleep Technology: Dreaming Smarter.
                    </h2>
                    <div className="media">
                      <div className="avatar">
                        <img src="img/testimonial/team-2.jpg" alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>BY NYAMBURA</label>
                        <span>05 JAN 2020</span>
                      </div>
                    </div>
                  </div>
                  {/* End .article-title */}

                  <div className="article-content">
                    <p>
                    Gone are the days when counting sheep was our best sleep aid. In today’s tech-driven world, Machine Learning (ML) and Artificial Intelligence (AI) are redefining the way we sleep—helping us understand, monitor, and improve this critical yet often elusive aspect of life.
                    </p>
                    <p>
                    At the forefront of sleep technology are smart sleep trackers, which do more than just count snores. Using ML algorithms, they analyze data from your heart rate, breathing patterns, and body movements to provide personalized insights. The result? You no longer wake up wondering why you feel like you’ve been hit by a truck—your tracker has the answers.
                    </p>                  
                    <p>
                    But AI doesn’t stop there. It powers adaptive sleep environments, like smart beds and lighting systems, which adjust based on your sleep stages. If you’re in deep sleep, AI ensures nothing interrupts you—not even your neighbor’s barking dog. And let’s not forget AI-driven apps that offer real-time relaxation techniques and sleep coaching, tailored to your unique patterns.
                    </p>
                    <p>
                    For those with sleep disorders, ML and AI play an even bigger role. They’re helping identify conditions like insomnia, sleep apnea, and narcolepsy through non-invasive, at-home solutions, reducing the reliance on costly sleep clinics. By analyzing vast datasets, AI systems can detect subtle patterns doctors might miss, enabling earlier intervention.
                    </p>
                    <p>However, the real magic lies in the future. As AI becomes smarter, sleep tech will likely evolve into a seamless ecosystem—one that not only monitors but actively optimizes sleep, creating truly restorative nights.</p>
                    <p>So, the next time you lie down to sleep, remember: AI is working overtime to ensure your dreams are sweet, your sleep is sound, and your mornings are brighter. Goodnight, sleep tight, and let the algorithms do the rest.</p>              
                    <blockquote>                  
                      <p className="blockquote-footer">
                      Want to dive deeper? Check out resources like{" "}
                        <cite title="Source Title"><a href="https://www.thensf.org/" target="_blank" rel="noreferrer">The Sleep Foundation </a>or <a href="https://executive.mit.edu/course/artificial-intelligence-in-health-care/a056g00000URaaTAAT.html" target="_blank" rel="noreferrer">MIT AI in Healthcare</a>.</cite>
                      </p>
                    </blockquote>                   
                  </div>
                  {/* End article content */}
                  <ul className="nav tag-cloud">
                    <li href="#">Design</li>
                    <li href="#">Development</li>
                    <li href="#">Travel</li>
                    <li href="#">Web Design</li>
                    <li href="#">Marketing</li>
                    <li href="#">Research</li>
                    <li href="#">Managment</li>
                  </ul>
                  {/* End tag */}
                </article>
                {/* End Article */}

                <div className="contact-form article-comment">
                  <h4>Leave a Reply</h4>
                  <Contact />
                </div>
                {/* End .contact Form */}
              </div>
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for Blog-2 */}

      {/* Start Modal for Blog-3 */}
      <Modal
        isOpen={isOpen3}
        onRequestClose={toggleModalThree}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalThree}>
            <img src="/img/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src="img/blog/blog-3.jpg" alt="blog post"></img>
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    <h2>
                      I Will Tell You The Truth About Design In The Next 60
                      Seconds.
                    </h2>
                    <div className="media">
                      <div className="avatar">
                        <img src="img/testimonial/team-3.jpg" alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>BY RIO</label>
                        <span>12 AUG 2020</span>
                      </div>
                    </div>
                  </div>
                  {/* End .article-title */}

                  <div className="article-content">
                    <p>
                      Aenean eleifend ante maecenas pulvinar montes lorem et
                      pede dis dolor pretium donec dictum. Vici consequat justo
                      enim. Venenatis eget adipiscing luctus lorem. Adipiscing
                      veni amet luctus enim sem libero tellus viverra venenatis
                      aliquam. Commodo natoque quam pulvinar elit.
                    </p>
                    <p>
                      Eget aenean tellus venenatis. Donec odio tempus. Felis
                      arcu pretium metus nullam quam aenean sociis quis sem
                      neque vici libero. Venenatis nullam fringilla pretium
                      magnis aliquam nunc vulputate integer augue ultricies
                      cras. Eget viverra feugiat cras ut. Sit natoque montes
                      tempus ligula eget vitae pede rhoncus maecenas
                      consectetuer commodo condimentum aenean.
                    </p>
                    <h4>What are my payment options?</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <blockquote>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam.
                      </p>
                      <p className="blockquote-footer">
                        Someone famous in{" "}
                        <cite title="Source Title">Dick Grayson</cite>
                      </p>
                    </blockquote>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                  {/* End article content */}
                  <ul className="nav tag-cloud">
                    <li href="#">Design</li>
                    <li href="#">Development</li>
                    <li href="#">Travel</li>
                    <li href="#">Web Design</li>
                    <li href="#">Marketing</li>
                    <li href="#">Research</li>
                    <li href="#">Managment</li>
                  </ul>
                  {/* End tag */}
                </article>
                {/* End Article */}

                <div className="contact-form article-comment">
                  <h4>Leave a Reply</h4>
                  <Contact />
                </div>
                {/* End .contact Form */}
              </div>
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for Blog-3 */}

      {/* Start Modal for Blog-4 */}
      <Modal
        isOpen={isOpen4}
        onRequestClose={toggleModalFour}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalFour}>
            <img src="/img/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src="img/blog/blog-1.jpg" alt="blog post"></img>
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    <h2>
                      They Now Bade Farewell To The Kind But Unseen People
                    </h2>
                    <div className="media">
                      <div className="avatar">
                        <img src="img/testimonial/team-4.png" alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>BY SVEIL</label>
                        <span>22 JAN 2020</span>
                      </div>
                    </div>
                  </div>
                  {/* End .article-title */}

                  <div className="article-content">
                    <p>
                      Aenean eleifend ante maecenas pulvinar montes lorem et
                      pede dis dolor pretium donec dictum. Vici consequat justo
                      enim. Venenatis eget adipiscing luctus lorem. Adipiscing
                      veni amet luctus enim sem libero tellus viverra venenatis
                      aliquam. Commodo natoque quam pulvinar elit.
                    </p>
                    <p>
                      Eget aenean tellus venenatis. Donec odio tempus. Felis
                      arcu pretium metus nullam quam aenean sociis quis sem
                      neque vici libero. Venenatis nullam fringilla pretium
                      magnis aliquam nunc vulputate integer augue ultricies
                      cras. Eget viverra feugiat cras ut. Sit natoque montes
                      tempus ligula eget vitae pede rhoncus maecenas
                      consectetuer commodo condimentum aenean.
                    </p>
                    <h4>What are my payment options?</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <blockquote>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam.
                      </p>
                      <p className="blockquote-footer">
                        Someone famous in{" "}
                        <cite title="Source Title">Dick Grayson</cite>
                      </p>
                    </blockquote>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                  {/* End article content */}
                  <ul className="nav tag-cloud">
                    <li href="#">Design</li>
                    <li href="#">Development</li>
                    <li href="#">Travel</li>
                    <li href="#">Web Design</li>
                    <li href="#">Marketing</li>
                    <li href="#">Research</li>
                    <li href="#">Managment</li>
                  </ul>
                  {/* End tag */}
                </article>
                {/* End Article */}

                <div className="contact-form article-comment">
                  <h4>Leave a Reply</h4>
                  <Contact />
                </div>
                {/* End .contact Form */}
              </div>
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for Blog-4 */}
    </>
  );
};

export default News;
