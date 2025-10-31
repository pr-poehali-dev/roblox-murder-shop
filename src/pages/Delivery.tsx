import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Delivery() {
  return (
    <div className="container py-8 max-w-4xl animate-fade-in">
      <h1 className="text-4xl font-bold mb-2">Доставка</h1>
      <p className="text-muted-foreground mb-8">
        Как получить свое оружие в Murder Mystery 2
      </p>

      <div className="space-y-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Icon name="ShoppingCart" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">1. Выберите товары</h3>
                <p className="text-muted-foreground">
                  Добавьте интересующие вас ножи или пистолеты в корзину и оформите заказ
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Icon name="CreditCard" size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">2. Оплатите заказ</h3>
                <p className="text-muted-foreground">
                  Мы принимаем банковские карты, электронные кошельки и криптовалюту
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                <Icon name="MessageCircle" size={24} className="text-secondary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">3. Получите инструкции</h3>
                <p className="text-muted-foreground">
                  После оплаты вы получите данные для входа на специальный сервер и инструкции по получению предметов
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Icon name="Zap" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">4. Получите оружие</h3>
                <p className="text-muted-foreground">
                  Зайдите на сервер и заберите свои предметы. Весь процесс занимает 5-15 минут
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-muted/30">
          <CardContent className="p-6">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Icon name="Clock" size={20} />
              Время доставки
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Icon name="Check" size={16} className="text-primary" />
                Стандартная доставка: 5-15 минут
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Check" size={16} className="text-primary" />
                В часы пик: до 30 минут
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Check" size={16} className="text-primary" />
                Ночью (23:00-08:00 МСК): до 1 часа
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/30">
          <CardContent className="p-6">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Icon name="Shield" size={20} />
              Безопасность
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Все сделки проходят через защищенный канал. Мы не запрашиваем пароль от вашего аккаунта Roblox.
              Доставка происходит через внутриигровой обмен на специальном сервере.
            </p>
            <p className="text-sm text-muted-foreground">
              Если у вас возникли проблемы с получением предметов, свяжитесь с нашей поддержкой.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
