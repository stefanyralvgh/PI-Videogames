import { Spinner, LoadingText } from "./LoadingStyles";

export default function Loading() {
  return (
    <div>
      <div>
        <Spinner />
      </div>
      <LoadingText>Loading</LoadingText>
    </div>
  );
  
}