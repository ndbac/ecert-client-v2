import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  AppDispatch,
  RootState,
} from "../../redux/modules/common/common.interface";
import { getCertificationsByUserId } from "../../redux/modules/certification/slices/certification.slice";
import { CertState } from "../../redux/modules/certification/interfaces/certification.interface";
import { DashboardCard } from "./DashboardCard";
import { getItemFromLocalStorage } from "../../utils/helpers";

export const Dashboard = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getCertificationsByUserId(router.query.userId));
  }, [dispatch, router.query.userId]);
  const storeData = useSelector<RootState>(
    (store) => store.certiReducer
  ) as CertState;
  const { certs, loading, serverErr } = storeData;

  const localUserId = getItemFromLocalStorage("id");
  if (
    (!localUserId || localUserId !== router.query.userId) &&
    typeof window !== "undefined"
  ) {
    router.push(`/`);
  }
  return (
    <section className="py-20 bg-blueGray-50">
      <div className="container px-4 mx-auto">
        <table className="w-full bg-white rounded shadow">
          <thead>
            <tr className="text-left text-xs">
              <th className="pl-6 py-4 font-normal">Certificate</th>
              <th className="px-4 py-4 font-normal">Created time</th>
              <th className="px-4 py-4 font-normal">Updated time</th>
              <th className="px-4 py-4 font-normal">Signature</th>
            </tr>
          </thead>
          {loading ? (
            <h1 className="ml-5 text-sm mb-3">Loading...</h1>
          ) : serverErr ? (
            <h1>Not found</h1>
          ) : (
            <>
              {certs?.map((cert) => (
                <DashboardCard key={cert._id} data={cert} />
              ))}
            </>
          )}
        </table>
      </div>
    </section>
  );
};
