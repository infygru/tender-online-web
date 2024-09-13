import React from "react";
import { ScrollArea } from "../ui/scroll-area";

export const formatDateTime = (dateTime: string) => {
  const date = new Date(dateTime);

  const day = date.getDate(); // Get the day of the month
  const month = date.toLocaleString(undefined, { month: "short" }); // Get the abbreviated month
  const year = date.getFullYear().toString().slice(-2); // Extract the last two digits of the year

  return `${day}/${month}/${year}`; // Format: "01/Jan/24"
};

export const truncateTitle = (title: string, nowords: number = 5) => {
  const words = title?.split(" ");
  if (words?.length > nowords) {
    return words?.slice(0, nowords).join(" ") + "...";
  }
  return title;
};

const ListTenders = ({ data }: any) => {
  const isLoading = false;
  return (
    <div className=" px-8 overflow-x-auto">
      {isLoading ? (
        <div className="py-24 px-24">Loading...</div>
      ) : (
        <div className="shadow-md   border rounded-3xl overflow-hidden">
          <ScrollArea className="h-[80vh]">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Opening Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Closing Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    District
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Department
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Bid Opening Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data?.result?.map((tender: any) => (
                  <tr key={tender._id?.$oid}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div
                        title={tender.refNo}
                        className="text-sm text-gray-900"
                      >
                        {truncateTitle(tender.tenderName)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {formatDateTime(tender.epublishedDate)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {formatDateTime(tender.bidSubmissionDate)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div
                        title={tender.refNo}
                        className="text-sm text-gray-900"
                      >
                        {truncateTitle(tender.district)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div
                        title={tender.refNo}
                        className="text-sm text-gray-900"
                      >
                        {truncateTitle(tender.department)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div
                        title={tender.refNo}
                        className="text-sm text-gray-900"
                      >
                        {truncateTitle(tender.bidOpeningDate)}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollArea>
        </div>
      )}
    </div>
  );
};

export default ListTenders;
