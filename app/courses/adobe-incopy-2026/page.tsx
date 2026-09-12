import Link from "next/link";

export default function CourseInCopy() {
  const levels = [
    {
      id: "beginner",
      title: "سطح مبتدی (الفبا و مبانی)",
      description: "آشنایی با محیط نرم‌افزار، ابزارهای پایه و مفاهیم اولیه برای شروع کار با InCopy.",
      lessons: [
        { title: "معرفی کامل و تاریخچه InCopy 2026", duration: "۱۵ دقیقه" },
        { title: "کارکرد و موارد استفاده در صنعت نشر", duration: "۲۰ دقیقه" },
        { title: "آشنایی با رابط کاربری (UI) و نوار ابزارها", duration: "۲۵ دقیقه" },
      ],
      status: "active"
    },
    {
      id: "intermediate",
      title: "سطح متوسط (ویرایش و تعامل)",
      description: "نحوه ارتباط با طراحان InDesign، استفاده از استایل‌ها و ویرایش متون طولانی.",
      lessons: [
        { title: "کار با استایل‌های پاراگراف و کاراکتر", duration: "۳۰ دقیقه" },
        { title: "مدیریت تغییرات (Track Changes)", duration: "۲۵ دقیقه" },
        { title: "لینک کردن فایل‌ها و هماهنگی با InDesign", duration: "۴۰ دقیقه" },
      ],
      status: "active"
    },
    {
      id: "advanced",
      title: "سطح حرفه‌ای (ترفندها و اتوماسیون)",
      description: "تسلط کامل بر میان‌برها، ماکروها و شخصی‌سازی محیط کار برای حداکثر سرعت.",
      lessons: [
        { title: "شخصی‌سازی پیشرفته Workspace", duration: "۲۰ دقیقه" },
        { title: "کار با جداول و داده‌های پیچیده", duration: "۳۵ دقیقه" },
        { title: "خروجی گرفتن نهایی و آماده‌سازی برای چاپ", duration: "۳۰ دقیقه" },
      ],
      status: "active"
    }
  ];

  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      
      {/* Breadcrumb & Navigation */}
      <nav className="mb-8 text-sm text-gray-500 flex items-center gap-2 font-medium">
        <Link href="/" className="hover:text-blue-600 transition-colors">خانه</Link>
        <span>/</span>
        <Link href="/courses" className="hover:text-blue-600 transition-colors">دوره‌ها</Link>
        <span>/</span>
        <span className="text-gray-900">Adobe InCopy 2026</span>
      </nav>

      {/* Course Header */}
      <div className="liquid-glass rounded-[2.5rem] p-8 md:p-12 mb-12 flex flex-col md:flex-row gap-10 items-center">
        <div className="w-full md:w-1/3 aspect-square bg-gradient-to-tr from-indigo-50 to-blue-50 rounded-[2rem] border border-blue-100/50 flex items-center justify-center relative overflow-hidden shadow-inner">
          {/* Main Course Image Placeholder */}
          <span className="text-blue-300 font-bold text-xl px-4 py-2 bg-white/50 rounded-xl backdrop-blur-sm border border-blue-200/50">تصویر اصلی دوره (1)</span>
          
          {/* Liquid floating element */}
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"></div>
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-indigo-400/20 rounded-full blur-2xl"></div>
        </div>
        
        <div className="w-full md:w-2/3 space-y-6">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-full text-xs font-bold border border-indigo-100">
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            جدیدترین نسخه
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            آموزش جامع Adobe InCopy <span className="text-gradient">2026</span>
          </h1>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            تنها دوره‌ای که برای تسلط کامل بر Adobe InCopy نیاز دارید. از معرفی اولیه ابزارها و فضای کار تا ترفندهای حرفه‌ای تعامل با تیم طراحی را با متدی روان و مدرن بیاموزید.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-8 py-3.5 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all shadow-lg hover:-translate-y-0.5 text-sm md:text-base">
              شروع یادگیری (سطح مبتدی)
            </button>
            <button className="px-8 py-3.5 rounded-full border border-gray-200 bg-white/50 text-gray-800 font-medium hover:bg-white transition-all text-sm md:text-base">
              دانلود سرفصل‌ها
            </button>
          </div>
        </div>
      </div>

      {/* Course Curriculum */}
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold text-gray-900">سرفصل‌های آموزشی</h2>
          <div className="h-px bg-gray-200 flex-1 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {levels.map((level, idx) => (
            <div 
              key={level.id} 
              className={`liquid-glass rounded-3xl p-6 transition-all duration-300 flex flex-col ${
                level.status === "active" ? "ring-2 ring-blue-500/20 shadow-lg hover:-translate-y-1" : "opacity-80"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                  فاز {idx + 1}
                </span>
                {level.status === "active" ? (
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                ) : (
                  <span className="text-xs text-gray-400 font-medium">به زودی</span>
                )}
              </div>
              
              <h3 className={`text-xl font-bold mb-3 ${level.status === "active" ? "text-gray-900" : "text-gray-700"}`}>
                {level.title}
              </h3>
              <p className="text-sm text-gray-500 mb-6 font-light leading-relaxed flex-1">
                {level.description}
              </p>
              
              <ul className="space-y-3 mt-auto">
                {level.lessons.map((lesson, lIdx) => (
                  <li key={lIdx} className="flex items-start gap-3 text-sm">
                    <svg className={`w-5 h-5 shrink-0 mt-0.5 ${level.status === "active" ? "text-blue-500" : "text-gray-300"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="flex flex-col">
                      <span className={level.status === "active" ? "text-gray-800" : "text-gray-500"}>
                        {lesson.title}
                      </span>
                      <span className="text-xs text-gray-400 mt-0.5">{lesson.duration}</span>
                    </div>
                  </li>
                ))}
              </ul>

              {level.status === "active" && (
                <Link 
                  href={`/courses/adobe-incopy-2026/${level.id}`}
                  className="mt-8 block w-full py-3 text-center rounded-xl bg-blue-50 text-blue-600 font-semibold text-sm hover:bg-blue-100 transition-colors"
                >
                  ورود به بخش {level.title.split(' ')[1]}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
