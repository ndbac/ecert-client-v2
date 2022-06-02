import { NavigationForGuest } from "./NavigationForGuest";
import { NavigationForUser } from "./NavigationForUser";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/modules/common/common.interface";
import { IIamUser } from "../../redux/modules/auth/interfaces/auth.interface";
import _ from "lodash";
import { getItemFromLocalStorage } from "../../utils/helpers";

export const Navigation = () => {
  const userId = getItemFromLocalStorage("id");

  const auth = useSelector<RootState>((state) => state.authReducer) as IIamUser;
  if (!_.isEmpty(auth?.id) || userId) return <NavigationForUser />;
  else return <NavigationForGuest />;
};
