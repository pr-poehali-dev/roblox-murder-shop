import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';

interface LayoutProps {
  children: ReactNode;
  cartCount?: number;
}

const navItems = [
  { name: 'Главная', path: '/' },
  { name: 'Каталог', path: '/catalog' },
  { name: 'Корзина', path: '/cart' },
  { name: 'Доставка', path: '/delivery' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Контакты', path: '/contacts' },
];

export default function Layout({ children, cartCount = 0 }: LayoutProps) {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="text-2xl">🔪</span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              MM2 SHOP
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary relative ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-muted-foreground'
                }`}
              >
                {item.name}
                {item.path === '/cart' && cartCount > 0 && (
                  <Badge className="ml-1 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-accent text-xs">
                    {cartCount}
                  </Badge>
                )}
              </Link>
            ))}
          </nav>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-2 ${
                      location.pathname === item.path
                        ? 'text-primary'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {item.name}
                    {item.path === '/cart' && cartCount > 0 && (
                      <Badge className="h-5 w-5 rounded-full p-0 flex items-center justify-center bg-accent text-xs">
                        {cartCount}
                      </Badge>
                    )}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border/40 bg-muted/20 py-8 mt-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <span className="text-xl">🔪</span>
                MM2 SHOP
              </h3>
              <p className="text-sm text-muted-foreground">
                Лучшие оружия для Murder Mystery 2
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Навигация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/catalog" className="hover:text-primary transition-colors">
                    Каталог
                  </Link>
                </li>
                <li>
                  <Link to="/delivery" className="hover:text-primary transition-colors">
                    Доставка
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:text-primary transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  support@mm2shop.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={16} />
                  Telegram поддержка
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/40 mt-8 pt-6 text-center text-sm text-muted-foreground">
            <p>© 2024 MM2 SHOP. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
