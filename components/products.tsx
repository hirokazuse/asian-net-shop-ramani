import { Leaf, Package, Apple } from "lucide-react"

const products = [
  {
    icon: Leaf,
    emoji: "🥬",
    title: "タイ野菜直送",
    thaiTitle: "ผักไทยสด",
    description: "パクチー、バジル、レモングラス、カー（タイ生姜）など、本格タイ料理に欠かせない新鮮なハーブと野菜をお届けします。",
    items: ["パクチー", "タイバジル", "レモングラス", "ガランガル"]
  },
  {
    icon: Package,
    emoji: "🍜",
    title: "輸入食材",
    thaiTitle: "วัตถุดิบนำเข้า",
    description: "ナンプラー、チリペースト、ココナッツミルクなど、タイ料理の本格的な味を再現するための調味料と食材。",
    items: ["ナンプラー", "チリペースト", "ココナッツミルク", "タピオカ"]
  },
  {
    icon: Apple,
    emoji: "🥭",
    title: "熱帯フルーツ",
    thaiTitle: "ผลไม้เขตร้อน",
    description: "マンゴー、ドリアン、マンゴスチン、ランブータンなど、タイの太陽をたっぷり浴びた甘くジューシーなフルーツ。",
    items: ["マンゴー", "ドリアン", "マンゴスチン", "ランブータン"]
  }
]

export function Products() {
  return (
    <section id="products" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-mango/20 rounded-full text-sm font-medium text-deep-green mb-4">
            Our Products
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-deep-green mb-3 text-balance">
            タイから届く、新鮮な恵み
          </h2>
          <p className="font-thai text-lg text-mango">ความสดใหม่จากประเทศไทย</p>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            ノンカイ農園から直送される新鮮な野菜、フルーツ、そして本格的なタイ食材を取り揃えています。
          </p>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group relative bg-card rounded-3xl overflow-hidden border border-border hover:border-mango transition-all duration-300 hover:shadow-xl"
            >
              {/* Top colored section */}
              <div className="relative h-48 bg-gradient-to-br from-deep-green/10 via-leaf-green/10 to-mango/20 flex items-center justify-center">
                <span className="text-8xl group-hover:scale-110 transition-transform duration-300">
                  {product.emoji}
                </span>
                
                {/* Decorative circle */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-mango/20 rounded-full" />
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-deep-green/10 rounded-full" />
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Icon badge */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-mango/20 rounded-xl mb-4">
                  <product.icon className="w-6 h-6 text-deep-green" />
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-deep-green mb-1">
                  {product.title}
                </h3>
                <p className="font-thai text-sm text-mango mb-4">{product.thaiTitle}</p>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {product.description}
                </p>
                
                {/* Item tags */}
                <div className="flex flex-wrap gap-2">
                  {product.items.map((item, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-muted text-xs font-medium text-deep-green rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://ansramani.base.ec"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-mango text-deep-green font-semibold rounded-full hover:bg-mango/90 transition-all hover:scale-105"
          >
            商品をもっと見る
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
