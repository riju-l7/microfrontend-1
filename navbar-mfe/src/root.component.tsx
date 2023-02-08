import './index.css?modules=false';
import Navbar from './components/navbar.js'

export default function Root(props) {
  console.log('props mfe', props?.root_mfe);
  return (
    <Navbar props={props} />
  );
}
