import { VideoContainer, VideoSection } from "./styles";

export function VideoPlayer({ thumb, videoFile }) {
  return (
    <VideoContainer>
      <VideoSection>
        <video poster={thumb} controls src={videoFile}></video>
      </VideoSection>
    </VideoContainer>
  );
}
