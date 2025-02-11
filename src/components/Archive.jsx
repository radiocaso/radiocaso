import Contexts from "./Contexts";
import Programs from "./Programs";
import Tags from "./Tags";
import Transmissions from "./Transmissions";

export default function Archive() {
  return (
    <>
      <Tags />
      <Contexts />
      <Programs />
      <Transmissions />
    </>
  );
}
