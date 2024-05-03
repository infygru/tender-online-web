import React from "react";
import { ScrollArea } from "../ui/scroll-area";
export const formatDateTime = (dateTime: string) => {
  const date = new Date(dateTime);
  return date.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};
export const truncateTitle = (title: string, nowords: number = 10) => {
  const words = title.split(" ");
  if (words.length > nowords) {
    return words.slice(0, nowords).join(" ") + "...";
  }
  return title;
};
const ListTenders = ({ data }: any) => {
  const isLoading = false;
  return (
    <div className="overflow-x-auto pt-12">
      <h2 className="text-xl font-bold sm:text-3xl md:text-2xl dark:text-white mb-4">
        List of Tenders
      </h2>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="shadow-md  border rounded-3xl overflow-hidden">
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
                    Tender ID
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data?.result?.map((tender: any) => (
                  <tr key={tender._id?.$oid}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {truncateTitle(tender.title)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {formatDateTime(tender.openingDate)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {formatDateTime(tender.closeingDate)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {tender.TenderId}
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
