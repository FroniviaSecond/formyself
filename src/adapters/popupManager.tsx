import Alert from '../UI/Alert';
import { GET_POPUPS, QUERY_PARAMS } from '../configs/config';
import useGetParams from '../customHooks/useGetParams';

const popups = {
  [GET_POPUPS.alert]: Alert,
}

const GetParametrsPopups = () => {
  const popupName = useGetParams(QUERY_PARAMS.popup);

  if (popupName === null) return null;

  const Component = popups[popupName as keyof typeof popups];

  if (!Component) return null;

  return <Component/>
}

export default GetParametrsPopups;