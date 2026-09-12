import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out">
      
      {/* Hero Section */}
      <section className="text-center space-y-6 max-w-2xl mt-10">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
          یادگیری <span className="text-gradient">حرفه‌ای‌تر</span> از همیشه
        </h1>
        <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
          با دوره‌های مدرن و کاربردی ما، در سریع‌ترین زمان ممکن به یک متخصص تبدیل شوید. مسیر یادگیری شما از اینجا آغاز می‌شود.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <button className="px-8 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            شروع کنید
          </button>
          <button className="px-8 py-3 rounded-full liquid-glass text-gray-800 font-medium hover:bg-white/90 transition-all">
            جستجوی دوره‌ها
          </button>
        </div>
      </section>

      {/* Featured Courses - Adobe InCopy */}
      <section className="w-full pt-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800">جدیدترین دوره‌ها</h2>
          <Link href="#" className="text-blue-600 text-sm font-medium hover:underline">مشاهده همه</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Adobe InCopy Course Card */}
          <Link href="/courses/adobe-incopy-2026" className="group block h-full">
            <div className="liquid-glass rounded-[2rem] p-4 h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-white/60">
              <div className="aspect-[4/3] w-full bg-gray-100 rounded-3xl mb-6 overflow-hidden relative border border-gray-200/50">
                {/* Placeholder for Course Thumbnail */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-50 flex items-center justify-center">
                  <span className="text-indigo-300 font-medium text-lg border border-indigo-200/50 rounded-xl px-4 py-2 bg-white/50 backdrop-blur-sm">تصویر دوره ۱</span>
                </div>
                
                {/* Badge */}
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-indigo-600 shadow-sm">
                  مبتدی تا پیشرفته
                </div>
              </div>
              
              <div className="px-2 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  آموزش جامع Adobe InCopy 2026
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2 mb-4 font-light">
                  یادگیری کامل نرم‌افزار این‌کپی از الفبا تا سطح حرفه‌ای. مناسب برای نویسندگان، ویراستاران و طراحان.
                </p>
                <div className="mt-auto flex items-center justify-between text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    ۱۲ ساعت
                  </span>
                  <span className="font-semibold text-gray-900">رایگان</span>
                </div>
              </div>
            </div>
          </Link>
          
          {/* Empty placeholders for other courses to show layout */}
          {[2, 3].map((num) => (
            <div key={num} className="liquid-glass rounded-[2rem] p-4 h-full flex flex-col opacity-60 grayscale">
              <div className="aspect-[4/3] w-full bg-gray-100 rounded-3xl mb-6 flex items-center justify-center border border-gray-200/50">
                <span className="text-gray-400 font-medium">به زودی...</span>
              </div>
              <div className="px-2">
                <div className="h-6 bg-gray-200 rounded-md w-3/4 mb-3"></div>
                <div className="h-4 bg-gray-200 rounded-md w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded-md w-2/3"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
