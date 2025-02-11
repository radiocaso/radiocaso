import Contexts from "./Contexts";
import PeopleAndGroups from "./PeopleAndGroups";
import Programs from "./Programs";
import Spaces from "./Spaces";
import Tags from "./Tags";
import Transmissions from "./Transmissions";

export default function Archive() {
  return (
    <>
      <PeopleAndGroups />
      <Spaces />
      <Tags />
      <Contexts />
      <Programs />
      <Transmissions />
    </>
  );
}
