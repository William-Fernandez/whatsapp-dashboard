// Create a table showing feedback: name, service, date, rating using Tailwind
export default function FeedbackTable({ feedback }) {
    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4 text-[#1E3A8A]">
                Client Feedback
            </h2>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto bg-white rounded-lg shadow-lg">
                <table className="min-w-full">
                    <thead>
                        <tr className="bg-[#E5E7EB] text-[#1E3A8A]">
                            <th className="py-3 px-4 font-semibold border-b border-gray-300">
                                Name
                            </th>
                            <th className="py-3 px-4 font-semibold border-b border-gray-300">
                                Service
                            </th>
                            <th className="py-3 px-4 font-semibold border-b border-gray-300">
                                Date
                            </th>
                            <th className="py-3 px-4 font-semibold border-b border-gray-300">
                                Rating
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {feedback.map((item, index) => (
                            <tr
                                key={index}
                                className={
                                    index % 2 === 0
                                        ? "bg-[#F9FAFB]"
                                        : "bg-[#FFFFFF]"
                                }
                            >
                                <td className="py-3 px-4 text-center">
                                    {item.name}
                                </td>
                                <td className="py-3 px-4 text-center">
                                    {item.service}
                                </td>
                                <td className="py-3 px-4 text-center">
                                    {item.date}
                                </td>
                                <td className="py-3 px-4 text-center text-[#10B981]">
                                    {item.rating} / 5
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
                {feedback.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-lg p-4"
                    >
                        <div className="flex justify-between mb-2">
                            <span className="font-semibold text-[#1E3A8A]">
                                Name:
                            </span>
                            <span className="text-[#1E3A8A]">{item.name}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="font-semibold text-[#1E3A8A]">
                                Service:
                            </span>
                            <span className="text-[#1E3A8A]">
                                {item.service}
                            </span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="font-semibold text-[#1E3A8A]">
                                Date:
                            </span>
                            <span className="text-[#1E3A8A]">{item.date}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-semibold text-[#1E3A8A]">
                                Rating:
                            </span>
                            <span className="text-[#10B981]">
                                {item.rating} / 5
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
