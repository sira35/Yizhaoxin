import Link from "next/link"
import { ExternalLink } from "lucide-react"

interface CompanyCardProps {
  name: string
  type: string
  url: string
  description?: string
  category?: string
}

export default function CompanyCard({ name, type, url, description, category }: CompanyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-5">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{name}</h3>
          <span
            className={`px-2 py-1 text-xs rounded-full ${
              type === "社招"
                ? "bg-blue-100 text-blue-800"
                : type === "校招"
                  ? "bg-green-100 text-green-800"
                  : type === "统招"
                    ? "bg-purple-100 text-purple-800"
                    : type === "创业服务"
                      ? "bg-orange-100 text-orange-800"
                      : type === "升学服务"
                        ? "bg-pink-100 text-pink-800"
                        : type === "就业统计"
                          ? "bg-indigo-100 text-indigo-800"
                          : type === "国际就业"
                            ? "bg-red-100 text-red-800"
                            : type === "区域就业"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-gray-100 text-gray-800"
            }`}
          >
            {type}
          </span>
        </div>

        {description && <p className="text-sm text-gray-600 mt-2 mb-3">{description}</p>}

        {category && <div className="text-xs text-gray-500 mb-3">{category}</div>}

        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          访问招聘网站
          <ExternalLink className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

