import { useRouteMatch } from 'react-router-dom';

function PathComp() {
  const match = useRouteMatch().url.replace('/','>');
  return (
    <>
        <h2 className="PathComp" >Home{match}</h2>
    </>
  );
}

export default PathComp;