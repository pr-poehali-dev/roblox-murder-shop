import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Rarity, Category } from '@/types/product';

export default function Catalog() {
  const { addToCart } = useCart();
  const [selectedRarity, setSelectedRarity] = useState<Rarity | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');

  const filteredProducts = products.filter((product) => {
    const rarityMatch = selectedRarity === 'all' || product.rarity === selectedRarity;
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    return rarityMatch && categoryMatch;
  });

  return (
    <div className="container py-8 animate-fade-in">
      <h1 className="text-4xl font-bold mb-2">Каталог оружия</h1>
      <p className="text-muted-foreground mb-8">
        Найди идеальное оружие для своей коллекции
      </p>

      <div className="flex flex-wrap gap-4 mb-8">
        <div className="flex flex-wrap gap-2">
          <span className="text-sm font-medium self-center">Редкость:</span>
          <Button
            variant={selectedRarity === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedRarity('all')}
          >
            Все
          </Button>
          <Button
            variant={selectedRarity === 'common' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedRarity('common')}
          >
            Обычные
          </Button>
          <Button
            variant={selectedRarity === 'rare' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedRarity('rare')}
          >
            Редкие
          </Button>
          <Button
            variant={selectedRarity === 'legendary' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedRarity('legendary')}
          >
            Легендарные
          </Button>
          <Button
            variant={selectedRarity === 'godly' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedRarity('godly')}
          >
            Божественные
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="text-sm font-medium self-center">Тип:</span>
          <Button
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory('all')}
          >
            Все
          </Button>
          <Button
            variant={selectedCategory === 'knife' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory('knife')}
          >
            🔪 Ножи
          </Button>
          <Button
            variant={selectedCategory === 'gun' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory('gun')}
          >
            🔫 Пистолеты
          </Button>
        </div>
      </div>

      <div className="mb-4 text-sm text-muted-foreground">
        Найдено товаров: {filteredProducts.length}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Товары не найдены</p>
        </div>
      )}
    </div>
  );
}
