import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container py-12 animate-fade-in">
        <div className="max-w-md mx-auto text-center py-16">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
            <Icon name="ShoppingCart" size={40} className="text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Корзина пуста</h2>
          <p className="text-muted-foreground mb-6">
            Добавьте товары из каталога, чтобы начать покупки
          </p>
          <Button asChild>
            <Link to="/catalog">Перейти в каталог</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8 animate-fade-in">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold">Корзина</h1>
        <Button variant="outline" onClick={clearCart} className="gap-2">
          <Icon name="Trash2" size={16} />
          Очистить корзину
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg bg-muted"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-bold text-lg">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {item.category === 'knife' ? '🔪 Нож' : '🔫 Пистолет'}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Icon name="X" size={20} />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Icon name="Minus" size={16} />
                        </Button>
                        <span className="w-12 text-center font-medium">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Icon name="Plus" size={16} />
                        </Button>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold">
                          {(item.price * item.quantity).toLocaleString()}₽
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {item.price.toLocaleString()}₽ × {item.quantity}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-20">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Итого</h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Товары</span>
                  <span>{cart.length}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Количество</span>
                  <span>{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>К оплате</span>
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {totalPrice.toLocaleString()}₽
                    </span>
                  </div>
                </div>
              </div>
              <Button className="w-full gap-2" size="lg">
                <Icon name="CreditCard" size={20} />
                Оформить заказ
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-4">
                После оплаты вы получите инструкции по доставке
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
