"use client";

interface player {
  videoKey: string;
}

const VideoPlayer: React.FC<player> = (props) => {
  let videosrc = `https://www.youtube.com/embed/${props.videoKey}?si=RQh8BHiNpUmIji79`;

  return (
    <iframe
      width="560"
      height="315"
      src={videosrc}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
      allowFullScreen
      className="rounded-3xl max-w-[90vw] lg:max-w-[35%]"></iframe>
  );
};

export default VideoPlayer;
