import { VideoContainer, VideoSection } from "./styles";

// eslint-disable-next-line react/prop-types
export function VideoPlayer({ thumb, videoFile }) {
  return (
    <VideoContainer>
      <VideoSection>
        <video poster={thumb} controls src={videoFile}></video>
      </VideoSection>
    </VideoContainer>
  );
}
