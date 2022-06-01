/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export const DashboardCard = (data: any) => {
  return (
    <tr className="border-t border-blueGray-100">
      <td>
        <Link href={`/certification/${data.data.signature}`} replace>
          <div className="flex px-6 py-4 text-xs cursor-pointer">
            <img className="w-8 rounded" alt="" src={data.data.qrCode}></img>
            <div className="pl-4">
              <p className="font-semibold">{data.data.name}</p>
              <p className="text-blueGray-400">
                {data.data.data.slice(0, 20)}...
              </p>
            </div>
          </div>
        </Link>
      </td>
      <td className="px-4 py-2 text-xs font-semibold">
        {new Date(Date.parse(data.data.createdAt)).toDateString()}
      </td>
      <td className="px-4 py-2 text-xs font-semibold">
        {new Date(Date.parse(data.data.updatedAt)).toString()}
      </td>
      <td className="px-4 py-2">
        <div className="flex">
          <h1 className="font-semibold text-xs">{data.data.signature}</h1>
        </div>
      </td>
    </tr>
  );
};
