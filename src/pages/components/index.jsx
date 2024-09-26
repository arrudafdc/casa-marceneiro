import { VideoContainer, VideoSection } from "./styles";
import videoFile from "/assets/video.mp4";

export function VideoPlayer() {
  return (
    <VideoContainer>
      <VideoSection>
        <video controls src={videoFile}></video>
      </VideoSection>
    </VideoContainer>
  );
}
