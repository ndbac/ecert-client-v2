/* eslint-disable @next/next/no-img-element */
export const DashboardCard = ({ data }) => {
  return (
    <tr className="border-t border-blueGray-100">
      <td>
        <a
          className="flex px-6 py-4 text-xs"
          href={`/certification/${data.signature}`}
        >
          <img className="w-8 rounded" alt="" src={data.qrCode}></img>
          <div className="pl-4">
            <p className="font-semibold">{data.name}</p>
            <a className="text-blueGray-400" href="#">
              {data.data.slice(0, 20)}...
            </a>
          </div>
        </a>
      </td>
      <td className="px-4 py-2 text-xs font-semibold">{data.createdAt}</td>
      <td className="px-4 py-2 text-xs font-semibold">{data.updatedAt}</td>
      <td className="px-4 py-2">
        <div className="flex">
          <h1 className="font-semibold text-xs">{data.signature}</h1>
        </div>
      </td>
    </tr>
  );
};
