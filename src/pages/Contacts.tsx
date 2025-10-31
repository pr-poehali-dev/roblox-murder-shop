import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Contacts() {
  return (
    <div className="container py-8 max-w-4xl animate-fade-in">
      <h1 className="text-4xl font-bold mb-2">Контакты</h1>
      <p className="text-muted-foreground mb-8">
        Свяжитесь с нами любым удобным способом
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Icon name="MessageCircle" size={24} className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2">Telegram</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Самый быстрый способ связи. Ответим в течение 5 минут.
                </p>
                <Button variant="outline" className="gap-2">
                  <Icon name="Send" size={16} />
                  Написать в Telegram
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Icon name="Mail" size={24} className="text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Для подробных вопросов и предложений.
                </p>
                <a
                  href="mailto:support@mm2shop.ru"
                  className="text-primary hover:underline flex items-center gap-2"
                >
                  <Icon name="Mail" size={16} />
                  support@mm2shop.ru
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                <Icon name="MessageSquare" size={24} className="text-secondary" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2">Discord</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Присоединяйтесь к нашему сообществу игроков MM2.
                </p>
                <Button variant="outline" className="gap-2">
                  <Icon name="Users" size={16} />
                  Присоединиться
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Icon name="Globe" size={24} className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2">ВКонтакте</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Новости, акции и розыгрыши предметов.
                </p>
                <Button variant="outline" className="gap-2">
                  <Icon name="ExternalLink" size={16} />
                  Открыть группу
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-muted/30">
        <CardContent className="p-6">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <Icon name="Clock" size={20} />
            Время работы поддержки
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground mb-2">Telegram / Discord</p>
              <p className="font-medium">Круглосуточно, без выходных</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-2">Email / ВКонтакте</p>
              <p className="font-medium">Пн-Вс, 10:00 - 22:00 МСК</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-6 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <Icon name="HelpCircle" size={24} className="text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2">Часто задаваемые вопросы</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Возможно, ответ на ваш вопрос уже есть в разделе FAQ. Это сэкономит ваше время!
              </p>
              <Button variant="outline" asChild>
                <a href="/faq">Перейти в FAQ</a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
