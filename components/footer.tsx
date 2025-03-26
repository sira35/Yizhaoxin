import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">易招信</h3>
            <p className="text-gray-300 text-sm">
              易招信是一个招聘信息聚合平台，致力于为求职者提供全面的招聘信息，帮助他们找到理想的工作。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/#big-companies" className="hover:text-white">
                  大厂招聘
                </Link>
              </li>
              <li>
                <Link href="/#small-companies" className="hover:text-white">
                  中小企业
                </Link>
              </li>
              <li>
                <Link href="/#graduate-services" className="hover:text-white">
                  就业平台
                </Link>
              </li>
              <li>
                <Link href="/#jobs" className="hover:text-white">
                  最新职位
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <p className="text-gray-300 text-sm">如果您有任何问题或建议，请随时联系我们。</p>
            <p className="text-gray-300 text-sm mt-2">邮箱: contact@yizhaoxin.com</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-300">
          <p>© {new Date().getFullYear()} 易招信. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  )
}

