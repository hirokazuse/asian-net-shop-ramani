import { Facebook, ExternalLink } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-muted py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="font-serif text-xl font-semibold text-deep-green block">
                アジアンネットショップラマニ
              </span>
              <span className="text-sm text-muted-foreground font-thai">
                Asian Net Shop Ramani
              </span>
            </Link>
            
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 max-w-sm">
              タイ・ノンカイ農園から、新鮮な野菜とフルーツを日本のご家庭へ直送しています。
            </p>
            
            <p className="font-thai text-sm text-warm-earth">
              ส่งตรงจากฟาร์มหนองคายถึงบ้านคุณในญี่ปุ่น
            </p>
            
            {/* Social */}
            <div className="mt-6">
              <a
                href="https://www.facebook.com/groups/2538260863273895"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-deep-green hover:text-mango transition-colors"
              >
                <Facebook size={20} />
                <span className="text-sm font-medium">Facebookグループ</span>
              </a>
            </div>
          </div>
          
          {/* Links Column */}
          <div>
            <h4 className="font-serif font-semibold text-deep-green mb-4">リンク</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://ansramani.base.ec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-deep-green transition-colors"
                >
                  オンラインショップ
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="#products" className="text-sm text-muted-foreground hover:text-deep-green transition-colors">
                  商品一覧
                </a>
              </li>
              <li>
                <a href="#story" className="text-sm text-muted-foreground hover:text-deep-green transition-colors">
                  私たちのストーリー
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-sm text-muted-foreground hover:text-deep-green transition-colors">
                  お客様の声
                </a>
              </li>
            </ul>
          </div>
          
          {/* Legal Column */}
          <div>
            <h4 className="font-serif font-semibold text-deep-green mb-4">法的情報</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://ansramani.base.ec/law"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-deep-green transition-colors"
                >
                  特定商取引法に基づく表記
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://ansramani.base.ec/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-deep-green transition-colors"
                >
                  プライバシーポリシー
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-border mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} アジアンネットショップラマニ. All rights reserved.
            </p>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <span className="text-red-500">❤️</span>
              <span>in Japan & Thailand</span>
              <span className="text-lg">🇯🇵</span>
              <span className="text-lg">🇹🇭</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
