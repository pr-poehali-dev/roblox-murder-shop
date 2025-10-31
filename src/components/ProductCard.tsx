import { Product } from '@/types/product';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const rarityColors = {
  common: 'bg-rarity-common text-gray-800',
  rare: 'bg-rarity-rare text-white',
  legendary: 'bg-rarity-legendary text-white',
  godly: 'bg-rarity-godly text-white',
};

const rarityLabels = {
  common: 'Обычный',
  rare: 'Редкий',
  legendary: 'Легендарный',
  godly: 'Божественный',
};

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur border-border/50 animate-fade-in">
      <div className="relative aspect-square overflow-hidden bg-muted/30">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <Badge
          className={`absolute top-2 right-2 ${rarityColors[product.rarity]}`}
        >
          {rarityLabels[product.rarity]}
        </Badge>
        <Badge variant="secondary" className="absolute top-2 left-2">
          {product.category === 'knife' ? '🔪 Нож' : '🔫 Пистолет'}
        </Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-2">{product.name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {product.price.toLocaleString()}₽
          </span>
        </div>
        <Button
          onClick={() => onAddToCart(product)}
          className="gap-2"
          size="sm"
        >
          <Icon name="ShoppingCart" size={16} />
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
}
