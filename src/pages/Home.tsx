import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Icon from '@/components/ui/icon';

export default function Home() {
  const { addToCart } = useCart();
  const featuredProducts = products.filter((p) => p.rarity === 'godly' || p.rarity === 'legendary').slice(0, 3);

  return (
    <div className="animate-fade-in">
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-scale-in">
              Лучшие оружия Murder Mystery 2
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Редкие ножи и пистолеты для твоей коллекции. Быстрая доставка, безопасная сделка.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link to="/catalog">
                  <Icon name="ShoppingBag" size={20} />
                  Открыть каталог
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link to="/faq">
                  <Icon name="HelpCircle" size={20} />
                  Как купить?
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 rounded-lg bg-card/30 backdrop-blur border border-border/50 animate-fade-in">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
              <Icon name="Zap" size={24} className="text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2">Быстрая доставка</h3>
            <p className="text-sm text-muted-foreground">
              Получи свое оружие в течение 5-15 минут
            </p>
          </div>
          <div className="text-center p-6 rounded-lg bg-card/30 backdrop-blur border border-border/50 animate-fade-in">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
              <Icon name="Shield" size={24} className="text-accent" />
            </div>
            <h3 className="font-bold text-lg mb-2">Безопасность</h3>
            <p className="text-sm text-muted-foreground">
              Все сделки проходят через защищенный канал
            </p>
          </div>
          <div className="text-center p-6 rounded-lg bg-card/30 backdrop-blur border border-border/50 animate-fade-in">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
              <Icon name="Star" size={24} className="text-secondary" />
            </div>
            <h3 className="font-bold text-lg mb-2">Лучшие цены</h3>
            <p className="text-sm text-muted-foreground">
              Конкурентные цены на все редкие предметы
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2 text-center">Популярные товары</h2>
          <p className="text-center text-muted-foreground mb-8">
            Самые востребованные ножи и пистолеты
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link to="/catalog">Смотреть весь каталог</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
