import { NavigationForGuest } from "./NavigationForGuest";
import { NavigationForUser } from "./NavigationForUser";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/modules/common/common.interface";
import { IIamUser } from "../../redux/modules/auth/interfaces/auth.interface";
import _ from "lodash";

export const Navigation = () => {
  const auth = useSelector<RootState>((state) => state.authReducer) as IIamUser;
  if (!_.isEmpty(auth?.id)) return <NavigationForUser />;
  else return <NavigationForGuest />;
};
