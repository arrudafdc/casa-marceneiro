import { VideoContainer, VideoSection } from "./styles";
import videoFile from "/assets/video.mp4";
import teste from "/assets/thumb.png";

export function VideoPlayer() {
  return (
    <VideoContainer>
      <VideoSection>
        <video poster={teste} controls src={videoFile}></video>
      </VideoSection>
    </VideoContainer>
  );
}
