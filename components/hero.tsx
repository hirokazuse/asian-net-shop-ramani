import { Facebook, Leaf, Cherry, Citrus } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden bg-cream">
      {/* Background Pattern - Organic shapes */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-green/5 via-transparent to-mango/10" />
      
      {/* Decorative organic shapes */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-mango/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-leaf-green/10 rounded-full blur-3xl" />
      
      {/* Floating leaf decorations */}
      <div className="absolute top-32 left-10 opacity-10">
        <Leaf className="w-16 h-16 md:w-24 md:h-24 text-deep-green rotate-45" />
      </div>
      <div className="absolute top-1/2 right-8 opacity-10">
        <Leaf className="w-12 h-12 md:w-20 md:h-20 text-leaf-green -rotate-12" />
      </div>
      <div className="absolute bottom-32 left-1/4 opacity-10">
        <Cherry className="w-10 h-10 md:w-16 md:h-16 text-mango" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-mango/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-mango rounded-full" />
              <span className="text-sm font-medium text-deep-green">タイ直送・新鮮野菜＆フルーツ</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-deep-green leading-tight mb-4">
              <span className="block text-balance">日本とタイを</span>
              <span className="block text-balance">つなぐ</span>
              <span className="block text-mango text-balance">食のマーケット</span>
            </h1>
            
            {/* Thai Subtitle */}
            <p className="font-thai text-lg md:text-xl text-warm-earth mb-6">
              ตลาดอาหารที่เชื่อมต่อญี่ปุ่นและไทย
            </p>
            
            {/* Description */}
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              ノンカイ農園から、新鮮なタイ野菜や熱帯フルーツを日本のご家庭へ。
              マンゴー、ドリアン、ジャックフルーツなど、本場の味をお届けします。
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://www.facebook.com/groups/2538260863273895"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-deep-green text-cream font-semibold text-base rounded-full hover:bg-deep-green/90 transition-all hover:scale-105 shadow-lg shadow-deep-green/20"
              >
                <Facebook size={20} />
                Facebookグループに参加
              </a>
              <a
                href="https://ansramani.base.ec"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-deep-green text-deep-green font-semibold text-base rounded-full hover:bg-deep-green/5 transition-all"
              >
                オンラインショップを見る
              </a>
            </div>
          </div>
          
          {/* Hero Visual - Organic Market Feel */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main circular container with organic gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-mango/30 via-leaf-green/20 to-deep-green/30 rounded-full" />
              
              {/* Inner content - Premium market feel */}
              <div className="absolute inset-8 bg-cream rounded-full flex items-center justify-center overflow-hidden border-4 border-mango/30 shadow-2xl">
                <div className="text-center p-8">
                  <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 bg-gradient-to-br from-mango to-mango/70 rounded-full flex items-center justify-center shadow-lg">
                    <Citrus className="w-12 h-12 md:w-16 md:h-16 text-deep-green" />
                  </div>
                  <p className="font-serif text-xl md:text-2xl text-deep-green font-semibold">新鮮な果物</p>
                  <p className="font-thai text-sm text-warm-earth mt-1">ผลไม้สด</p>
                </div>
              </div>
              
              {/* Floating product cards */}
              <div className="absolute -top-4 -right-4 bg-card p-4 rounded-2xl shadow-xl border border-border">
                <div className="w-10 h-10 bg-leaf-green/20 rounded-xl flex items-center justify-center mb-2">
                  <Leaf className="w-5 h-5 text-leaf-green" />
                </div>
                <p className="text-xs font-medium text-deep-green">パクチー</p>
                <p className="font-thai text-xs text-muted-foreground">ผักชี</p>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-2xl shadow-xl border border-border">
                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center mb-2">
                  <svg className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C9.5 2 7 4 7 8c0 2.5 1.5 4.5 3 6l2 3 2-3c1.5-1.5 3-3.5 3-6 0-4-2.5-6-5-6z"/>
                  </svg>
                </div>
                <p className="text-xs font-medium text-deep-green">唐辛子</p>
                <p className="font-thai text-xs text-muted-foreground">พริก</p>
              </div>
              
              <div className="absolute top-1/2 -right-8 bg-mango p-4 rounded-2xl shadow-xl transform -translate-y-1/2">
                <div className="w-10 h-10 bg-deep-green/20 rounded-xl flex items-center justify-center mb-2">
                  <Cherry className="w-5 h-5 text-deep-green" />
                </div>
                <p className="text-xs font-medium text-deep-green">マンゴー</p>
                <p className="font-thai text-xs text-deep-green/80">มะม่วง</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto">
          <path 
            d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,90 1440,60 L1440,120 L0,120 Z" 
            fill="#F0EBE3"
            fillOpacity="0.5"
          />
        </svg>
      </div>
    </section>
  )
}
