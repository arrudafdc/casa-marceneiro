import { VideoContainer, VideoSection } from "./styles";
import videoFile from "/assets/main-video.mp4";
import thumb from "/assets/thumb-video.jpg";

export function VideoPlayer() {
  return (
    <VideoContainer>
      <VideoSection>
        <video poster={thumb} controls src={videoFile}></video>
      </VideoSection>
    </VideoContainer>
  );
}
