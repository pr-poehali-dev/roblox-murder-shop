import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQ() {
  return (
    <div className="container py-8 max-w-4xl animate-fade-in">
      <h1 className="text-4xl font-bold mb-2">Вопросы и ответы</h1>
      <p className="text-muted-foreground mb-8">
        Ответы на часто задаваемые вопросы о покупке оружия MM2
      </p>

      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="item-1" className="border rounded-lg px-6 bg-card/30">
          <AccordionTrigger className="text-left">
            Как происходит доставка предметов?
          </AccordionTrigger>
          <AccordionContent>
            После оплаты заказа вы получите инструкции по входу на специальный сервер в Roblox.
            Там мы встретимся с вами в игре и передадим предметы через внутриигровой обмен.
            Обычно это занимает 5-15 минут.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border rounded-lg px-6 bg-card/30">
          <AccordionTrigger className="text-left">
            Безопасно ли покупать здесь?
          </AccordionTrigger>
          <AccordionContent>
            Да, абсолютно безопасно. Мы не запрашиваем пароль от вашего аккаунта Roblox.
            Все сделки проходят через официальную систему обмена в игре. У нас более 1000
            довольных клиентов и положительные отзывы.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border rounded-lg px-6 bg-card/30">
          <AccordionTrigger className="text-left">
            Какие способы оплаты вы принимаете?
          </AccordionTrigger>
          <AccordionContent>
            Мы принимаем банковские карты (Visa, MasterCard, МИР), электронные кошельки
            (ЮMoney, QIWI), а также криптовалюту (Bitcoin, Ethereum, USDT). Все платежи
            проходят через защищенный канал.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="border rounded-lg px-6 bg-card/30">
          <AccordionTrigger className="text-left">
            Что делать, если я не получил предметы?
          </AccordionTrigger>
          <AccordionContent>
            Если возникла проблема с доставкой, немедленно свяжитесь с нашей поддержкой через
            Telegram или email. Мы решим вашу проблему в течение часа. Если по нашей вине
            доставка не состоялась, мы вернем деньги полностью.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5" className="border rounded-lg px-6 bg-card/30">
          <AccordionTrigger className="text-left">
            Могу ли я вернуть предметы после получения?
          </AccordionTrigger>
          <AccordionContent>
            К сожалению, возврат виртуальных предметов после получения невозможен согласно
            правилам Roblox. Убедитесь, что выбрали правильный предмет перед оформлением заказа.
            Если у вас есть сомнения, свяжитесь с нашей поддержкой.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6" className="border rounded-lg px-6 bg-card/30">
          <AccordionTrigger className="text-left">
            Как быстро обрабатываются заказы?
          </AccordionTrigger>
          <AccordionContent>
            Большинство заказов обрабатываются в течение 5-15 минут после оплаты. В часы пик
            (16:00-22:00 МСК) время может увеличиться до 30 минут. Ночью (23:00-08:00 МСК)
            доставка может занять до 1 часа.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7" className="border rounded-lg px-6 bg-card/30">
          <AccordionTrigger className="text-left">
            Можно ли купить несколько предметов одновременно?
          </AccordionTrigger>
          <AccordionContent>
            Да, вы можете добавить любое количество предметов в корзину и оплатить их одним
            заказом. Это даже удобнее — все предметы будут переданы за одну сессию на сервере.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8" className="border rounded-lg px-6 bg-card/30">
          <AccordionTrigger className="text-left">
            Предметы настоящие или это обман?
          </AccordionTrigger>
          <AccordionContent>
            Все предметы абсолютно настоящие и работают в официальной игре Murder Mystery 2.
            После получения они навсегда остаются в вашем инвентаре. Мы не продаем подделки
            или временные предметы.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
