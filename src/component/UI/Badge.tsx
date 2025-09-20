interface BadgeProps {
  status: string;
}

const statusColors: Record<string, string> = {
  "In Progress": "bg-indigo-100 text-indigo-600",
  "Complete": "bg-green-100 text-green-600",
  "Pending": "bg-blue-100 text-blue-600",
  "Approved": "bg-yellow-100 text-yellow-600",
  "Rejected": "bg-gray-200 text-gray-600",
};

export default function Badge({ status }: BadgeProps) {
  return (
    <span
      className={`px-3 py-1 text-xs font-medium rounded-full ${statusColors[status] || "bg-gray-100 text-gray-600"}`}
    >
      {status}
    </span>
  );
}
