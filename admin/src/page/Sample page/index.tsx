import Breadcrumbs from "../../CommonElements/Breadcrumbs";
import SamplepageConatiner from "../../Components/SamplePage";
const Samplepage = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Pages" title="Sample page" />
      <SamplepageConatiner />
    </div>
  );
};

export default Samplepage;
