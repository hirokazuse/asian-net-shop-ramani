import { MapPin, Heart, Sun, Waves } from "lucide-react"

export function Story() {
  return (
    <section id="story" className="py-16 md:py-24 bg-deep-green text-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-mango/20 rounded-full text-sm font-medium text-mango mb-6">
              <Heart size={14} />
              Our Story
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-4 leading-tight text-balance">
              メコン川沿いの<br />
              ノンカイ農園から
            </h2>
            
            <p className="font-thai text-lg text-mango mb-6">
              จากฟาร์มหนองคายริมแม่น้ำโขง
            </p>
            
            <div className="space-y-6 text-cream/90 leading-relaxed">
              <p>
                私の妻の家族が営むノンカイ農園は、タイ東北部イサーン地方、メコン川のほとりに位置しています。
                豊かな水と肥沃な大地に恵まれたこの地で、代々受け継がれてきた農法で野菜とフルーツを育てています。
              </p>
              
              <p>
                「日本に住む方々にも、私たちが毎日食べている新鮮で安全な野菜を届けたい」
                —そんな妻の想いから、このショップは始まりました。
              </p>
              
              <p>
                収穫したその日に梱包し、航空便で日本へ。鮮度を最大限に保つため、
                一つひとつ丁寧に扱い、皆様のもとへお届けしています。
              </p>
            </div>
            
            {/* Features */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-mango/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-mango" />
                </div>
                <div>
                  <p className="font-medium text-cream">ノンカイ県</p>
                  <p className="text-sm text-cream/70">タイ東北部イサーン地方</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-mango/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Waves className="w-5 h-5 text-mango" />
                </div>
                <div>
                  <p className="font-medium text-cream">メコン川沿い</p>
                  <p className="text-sm text-cream/70">豊かな水源と肥沃な土壌</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-mango/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sun className="w-5 h-5 text-mango" />
                </div>
                <div>
                  <p className="font-medium text-cream">熱帯の恵み</p>
                  <p className="text-sm text-cream/70">年中温暖な気候で栽培</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-mango/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-mango" />
                </div>
                <div>
                  <p className="font-medium text-cream">家族経営</p>
                  <p className="text-sm text-cream/70">妻の家族が心を込めて</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Main visual container */}
              <div className="absolute inset-0 bg-gradient-to-br from-leaf-green/30 via-mango/20 to-warm-earth/30 rounded-3xl" />
              
              {/* Content card */}
              <div className="absolute inset-6 bg-cream/10 backdrop-blur-sm rounded-2xl p-8 flex flex-col justify-center items-center text-center border border-cream/20">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-mango/30 rounded-full flex items-center justify-center mb-4">
                  <Sun className="w-10 h-10 md:w-12 md:h-12 text-mango" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-cream mb-2">
                  ノンカイ農園
                </h3>
                <p className="font-thai text-mango">ฟาร์มหนองคาย</p>
                <p className="mt-4 text-sm text-cream/80">
                  Nong Khai Province, Thailand
                </p>
                
                {/* Map indicator */}
                <div className="mt-6 flex items-center gap-2 text-xs text-cream/60">
                  <MapPin size={14} />
                  <span>17.8782° N, 102.7410° E</span>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-mango/30 rounded-2xl flex items-center justify-center">
                <Sun className="w-8 h-8 text-mango" />
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-leaf-green/30 rounded-2xl flex items-center justify-center">
                <Waves className="w-6 h-6 text-leaf-green" />
              </div>
              
              {/* River decoration */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-mango/40 to-transparent rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
