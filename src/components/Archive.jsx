import Contexts from "./Contexts";
import PeopleAndGroups from "./PeopleAndGroups";
import Programs from "./Programs";
import Tags from "./Tags";
import Transmissions from "./Transmissions";

export default function Archive() {
  return (
    <>
      <PeopleAndGroups />
      <Tags />
      <Contexts />
      <Programs />
      <Transmissions />
    </>
  );
}
