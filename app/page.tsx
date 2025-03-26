import Navbar from "@/components/navbar"
import CompanyList from "@/components/company-list"
import JobList from "@/components/job-list"
import Footer from "@/components/footer"
import { bigCompanies, smallCompanies, graduateServices, jobs } from "@/data/companies"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* 英雄区域 */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">找到你理想的工作</h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl">
              易招信汇集了各大企业和平台的招聘信息，帮助你轻松找到合适的工作机会。
            </p>
            <div className="mt-10">
              <a
                href="#jobs"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-50"
              >
                浏览最新职位
              </a>
            </div>
          </div>
        </section>

        {/* 职位列表 */}
        <JobList jobs={jobs} />

        {/* 大厂公司列表 */}
        <CompanyList companies={bigCompanies} title="大厂招聘" id="big-companies" category="大厂" />

        {/* 中小企业公司列表 */}
        <CompanyList companies={smallCompanies} title="中小企业招聘" id="small-companies" category="中小企业" />

        {/* 大学生就业招聘平台列表 */}
        <CompanyList companies={graduateServices} title="大学生就业招聘平台" id="graduate-services" />
      </main>

      <Footer />
    </div>
  )
}

