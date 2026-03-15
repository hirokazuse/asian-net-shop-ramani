import { Facebook, MessageCircle, ShoppingBag, Users } from "lucide-react"

export function CTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-deep-green via-deep-green to-leaf-green text-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-mango/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-mango/10 rounded-full blur-3xl" />
      
      {/* Floating emojis */}
      <div className="absolute top-12 right-12 text-5xl opacity-20">🥭</div>
      <div className="absolute bottom-12 left-12 text-5xl opacity-20">🌿</div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-mango/20 rounded-full text-sm font-medium text-mango mb-6">
          <Users size={14} />
          コミュニティに参加
        </span>
        
        {/* Main Heading */}
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-4 text-balance">
          Facebookグループで<br className="hidden md:block" />
          タイの味をもっと楽しもう
        </h2>
        
        <p className="font-thai text-lg text-mango mb-6">
          ร่วมกลุ่ม Facebook เพื่อรับข้อมูลสินค้าใหม่
        </p>
        
        <p className="text-cream/90 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          新商品のお知らせ、タイ料理のレシピ、季節のフルーツ情報など、
          メンバー限定の情報をお届けしています。
          お気軽にご参加ください！
        </p>
        
        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-cream/80">
            <ShoppingBag size={18} className="text-mango" />
            <span className="text-sm">新商品情報</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-cream/80">
            <MessageCircle size={18} className="text-mango" />
            <span className="text-sm">レシピ共有</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-cream/80">
            <Users size={18} className="text-mango" />
            <span className="text-sm">会員限定セール</span>
          </div>
        </div>
        
        {/* CTA Button */}
        <a
          href="https://www.facebook.com/groups/2538260863273895"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-mango text-deep-green font-bold text-lg rounded-full hover:bg-mango/90 transition-all hover:scale-105 shadow-xl shadow-black/20"
        >
          <Facebook size={24} />
          Facebookグループに参加する
        </a>
        
        <p className="mt-4 text-sm text-cream/60">
          無料でご参加いただけます
        </p>
      </div>
    </section>
  )
}
