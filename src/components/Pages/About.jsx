import React, { useEffect } from "react";
import style from "./About.module.css";

export default function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className={style.about} style={{ color: '#FFFFFF' }}>
      <div className={`${style.responsivecontainerblock} ${style.bigContainer}`} style={{ color: '#FFFFFF' }}>
        <div className={`${style.responsivecontainerblock} ${style.container} ${style.bottomContainer}`} style={{ color: '#FFFFFF' }}>
          <div className={`${style.allText} ${style.bottomText}`} style={{ color: '#FFFFFF' }}>
            <p className={style.headingText} style={{ color: '#FFFFFF' }}>About Us</p>
            <p className={style.subHeadingText} style={{ color: '#FFFFFF' }}>We Are build</p>
            <p className={style.description} style={{ color: '#FFFFFF' }}>
            Welcome to Hridaya Sparsh, your dedicated mental health companion. We're here to support you – fostering an empathetic community where our AI actively listens, provides encouragement, and shares valuable resources. Together, we prioritize your well-being and encourage open dialogue about mental health. You're not alone; we stand with you on your journey. Let's build a space where understanding and support thrive.
            </p>
            <a
              href="https://www.youtube.com/watch?v=fUD5HcZhtQI"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={style.explore}>View More</button>
            </a>
          </div>
          <div className={style.videoContainer}>
            <iframe
              allowFullScreen
              className={style.mainVideo}
              controls
              src="https://www.youtube.com/embed/fUD5HcZhtQI?si=GwQPNzqdOjFZ8kXG"
            ></iframe>
            {/* Remove the ball design here */}
          </div>
        </div>
      </div>
      <script src="https://cdn.botpress.cloud/webchat/v2/inject.js"></script>
<script src="https://mediafiles.botpress.cloud/3fe671d3-dee8-4ea8-8cab-71b83ca9a387/webchat/v2/config.js"></script>
    </div>
    
  );
}
