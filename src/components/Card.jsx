import React from "react";

const Card = () => {
  const cards = [
    {
      title: "Mental Health in the Workplace",
      text: "We've collected the best, tips, stats, and inspiring quotes on how to grow professionally while managing your mental health.",
      imgSrc:
        "https://storage.googleapis.com/joblist-content/hero-images/JL_Mental-Health-in-the-Workplace_Header.png",
      link: "https://www.healthcentral.com/mental-health/mental-health-work?legacy=psycom",
    },
    {
      title: "How to Stop Negative Thoughts",
      text: "Why your inner world has a natural tendency to go haywire and what to do about it.",
      imgSrc:
        "https://images.ctfassets.net/yixw23k2v6vo/psycom_page_fid31389_asset_31385/58f68d6c4721a10f92f5a673e123dc88/Conflict_Concept",
      link: "https://www.healthcentral.com/mental-heath/negative-thinking?legacy=psycom",
    },
    {
      title: "What Is Imposter Syndrome?",
      text: 'For starters, it is a real thing. And, if you\'ve ever said or thought the words, "I\'m fooling everyone. I feel like a fraud," you already have some experience with it.',
      imgSrc:
        "https://image.chitra.live/api/v1/wps/5345b6f/f9e404b5-0c62-4e29-912a-d6d25aeca153/4/Impostor-syndrome-TA-design-Shutterstock-679x419.jpg",
      link: "https://www.healthcentral.com/mental-health/imposter-syndrome?legacy=psycom",
    },
    {
      title: "The Negativity Bias",
      text: "What is the negativity bias? How can you overcome it?",
      imgSrc:
        "https://images.ctfassets.net/yixw23k2v6vo/psycom_page_fid31958_asset_14576/281851e26aa5ffe36d6879c3a8afdb09/Seesaw_Scale_with_Emoticons_-_3D_Rendering?fm=webp&fit=thumb&q=65&w=864&h=576",
      link: "https://www.healthcentral.com/mental-health/negativity-bias?legacy=psycom",
    },
  ];

  return (
    <section className="parent-section grid lg:grid-cols-2 gap-6 px-4 py-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="card flex flex-col lg:flex-row rounded-lg bg-slate-200 p-4 mb-5"
        >
          <img
            src={card.imgSrc}
            className="thumbnail rounded-lg mb-4 lg:mb-0 lg:mr-4 object-cover h-[300px] w-[400px]"
            alt="img"
          />
          <div className="flex flex-col justify-between flex-grow">
            <div className="top font-bold text-xl mb-2">{card.title}</div>
            <div className="middle flex-grow font-semibold text-gray-700 text-base mb-4">
              {card.text}
            </div>
            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto"
            >
              <div className="button rounded-lg bg-black text-white w-full text-center py-2">
                Learn more
              </div>
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Card;
