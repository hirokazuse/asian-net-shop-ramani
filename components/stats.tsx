import { Clock, Users, Truck } from "lucide-react"

const stats = [
  {
    icon: Clock,
    value: "5年以上",
    label: "の実績",
    thaiLabel: "กว่า 5 ปี",
    description: "信頼と経験の積み重ね"
  },
  {
    icon: Users,
    value: "1,800+",
    label: "お客様",
    thaiLabel: "ลูกค้า",
    description: "ご愛顧いただいています"
  },
  {
    icon: Truck,
    value: "農場直送",
    label: "",
    thaiLabel: "ส่งตรงจากฟาร์ม",
    description: "新鮮さをそのままお届け"
  }
]

export function Stats() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-deep-green mb-2">
            私たちの実績
          </h2>
          <p className="font-thai text-muted-foreground">ผลงานของเรา</p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="relative bg-card rounded-3xl p-8 text-center border border-border hover:border-mango/50 transition-all hover:shadow-lg group"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-mango/20 rounded-2xl mb-6 group-hover:bg-mango/30 transition-colors">
                <stat.icon className="w-8 h-8 text-deep-green" />
              </div>
              
              {/* Value */}
              <div className="font-serif text-4xl md:text-5xl font-bold text-deep-green mb-2">
                {stat.value}
                <span className="text-2xl md:text-3xl">{stat.label}</span>
              </div>
              
              {/* Thai Label */}
              <p className="font-thai text-sm text-mango mb-3">{stat.thaiLabel}</p>
              
              {/* Description */}
              <p className="text-muted-foreground text-sm">{stat.description}</p>
              
              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-mango/30 rounded-tr-lg" />
            </div>
          ))}
        </div>
        
        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="text-xl">✓</span>
            <span>品質保証</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">✓</span>
            <span>安心配送</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">✓</span>
            <span>丁寧な梱包</span>
          </div>
        </div>
      </div>
    </section>
  )
}
