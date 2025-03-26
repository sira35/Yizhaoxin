"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, MapPin, Briefcase, GraduationCap, Calendar, ExternalLink } from "lucide-react"

interface Job {
  title: string
  company: string
  type: string
  location: string
  education: string
  date: string
  url: string
  category: string
}

interface JobListProps {
  jobs: Job[]
}

export default function JobList({ jobs }: JobListProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("全部")
  const [filterCategory, setFilterCategory] = useState("全部")
  const [filterLocation, setFilterLocation] = useState("全部")

  // 获取所有类型和分类
  const types = ["全部", ...Array.from(new Set(jobs.map((job) => job.type)))]
  const categories = ["全部", ...Array.from(new Set(jobs.map((job) => job.category)))]
  const locations = ["全部", ...Array.from(new Set(jobs.map((job) => job.location)))]

  // 过滤职位
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = filterType === "全部" || job.type === filterType
    const matchesCategory = filterCategory === "全部" || job.category === filterCategory
    const matchesLocation = filterLocation === "全部" || job.location === filterLocation
    return matchesSearch && matchesType && matchesCategory && matchesLocation
  })

  return (
    <section id="jobs" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">最新职位</h2>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex flex-col md:flex-row justify-between mb-6 space-y-4 md:space-y-0 md:space-x-4">
            <div className="relative w-full md:w-1/3">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="搜索职位或公司"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="w-full md:w-auto">
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  {types.map((type) => (
                    <option key={type} value={type}>
                      {type === "全部" ? "所有类型" : type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="w-full md:w-auto">
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category === "全部" ? "所有公司类型" : category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="w-full md:w-auto">
                <select
                  value={filterLocation}
                  onChange={(e) => setFilterLocation(e.target.value)}
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location === "全部" ? "所有城市" : location}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {filteredJobs.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <p className="text-gray-500">没有找到匹配的职位</p>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                    <p className="text-lg text-gray-700 mt-1">{job.company}</p>

                    <div className="mt-3 flex flex-wrap gap-y-2 gap-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <MapPin className="mr-1.5 h-4 w-4 text-gray-400" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="mr-1.5 h-4 w-4 text-gray-400" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <GraduationCap className="mr-1.5 h-4 w-4 text-gray-400" />
                        {job.education}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="mr-1.5 h-4 w-4 text-gray-400" />
                        {job.date}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 md:mt-0 flex items-center">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        job.category === "大厂" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
                      }`}
                    >
                      {job.category}
                    </span>
                    <Link
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      申请
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

