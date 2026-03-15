import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "田中 美咲",
    location: "東京都",
    avatar: "🙋‍♀️",
    rating: 5,
    text: "パクチーの香りが全然違います！スーパーで買うものとは比べものにならないほど新鮮で、タイ料理を作るのが楽しくなりました。毎月リピートしています。",
    product: "タイ野菜セット"
  },
  {
    name: "山本 健太",
    location: "大阪府",
    avatar: "🙋‍♂️",
    rating: 5,
    text: "ドリアンがこんなに美味しいとは思いませんでした。冷凍ではない新鮮なものを初めて食べて感動しました。梱包も丁寧で、安心して注文できます。",
    product: "熱帯フルーツ"
  },
  {
    name: "佐藤 由美",
    location: "愛知県",
    avatar: "🙋‍♀️",
    rating: 5,
    text: "タイ人の友人も「本場の味」と驚いていました。Facebookグループで料理のレシピも教えてもらえて、タイ料理の幅が広がりました。",
    product: "輸入食材セット"
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-mango/20 rounded-full text-sm font-medium text-deep-green mb-4">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-deep-green mb-3 text-balance">
            お客様の声
          </h2>
          <p className="font-thai text-lg text-mango">ความคิดเห็นจากลูกค้า</p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative bg-card rounded-3xl p-6 md:p-8 border border-border hover:border-mango/50 transition-all hover:shadow-lg"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 w-10 h-10 bg-mango/20 rounded-full flex items-center justify-center">
                <Quote className="w-5 h-5 text-mango" />
              </div>
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-mango text-mango" />
                ))}
              </div>
              
              {/* Text */}
              <p className="text-foreground leading-relaxed mb-6">
                「{testimonial.text}」
              </p>
              
              {/* Product tag */}
              <span className="inline-block px-3 py-1 bg-muted text-xs font-medium text-muted-foreground rounded-full mb-6">
                {testimonial.product}
              </span>
              
              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-12 h-12 bg-mango/20 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-medium text-deep-green">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust indicator */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            <span className="font-semibold text-deep-green">1,800人以上</span>のお客様にご愛顧いただいています
          </p>
          <p className="font-thai text-sm text-mango mt-1">ลูกค้ามากกว่า 1,800 คน</p>
        </div>
      </div>
    </section>
  )
}
