import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            OzonManager
          </h1>
          <div className="flex gap-6">
            <a href="#features" className="text-gray-600 hover:text-primary transition-colors">
              Возможности
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">
              Тарифы
            </a>
            <a href="#integration" className="text-gray-600 hover:text-primary transition-colors">
              Интеграция
            </a>
            <a href="#contacts" className="text-gray-600 hover:text-primary transition-colors">
              Контакты
            </a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Автоматизация управления магазином на Ozon
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Экономьте время на выгрузке данных. API-интеграция с Google Таблицами для операционного управления вашим бизнесом
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="text-lg px-8">
                  Начать бесплатно
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Узнать больше
                </Button>
              </div>
              <div className="mt-8 flex gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary">80%</div>
                  <div className="text-gray-600">экономия времени</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-gray-600">автоматическая синхронизация</div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/0cad8161-ffd1-448a-8ed9-a67b3cd510b2/files/ed09c675-23a3-47d2-a67d-d96598c2eb5e.jpg"
                alt="OzonManager Dashboard"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Возможности сервиса</h2>
            <p className="text-xl text-gray-600">Полный контроль над вашим магазином на Ozon</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Database",
                title: "Автоматическая выгрузка данных",
                description: "Все данные с Ozon автоматически синхронизируются с Google Таблицами без ручной работы"
              },
              {
                icon: "Zap",
                title: "API интеграция",
                description: "Прямое подключение через API обеспечивает мгновенную передачу информации"
              },
              {
                icon: "BarChart3",
                title: "Аналитика продаж",
                description: "Визуализация данных и отчеты для принятия обоснованных решений"
              },
              {
                icon: "Package",
                title: "Управление товарами",
                description: "Контроль остатков, цен и характеристик товаров в одном месте"
              },
              {
                icon: "TrendingUp",
                title: "Мониторинг заказов",
                description: "Отслеживание статусов заказов и автоматические уведомления"
              },
              {
                icon: "Settings",
                title: "Гибкая настройка",
                description: "Настройте сервис под свои бизнес-процессы и требования"
              }
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in border-none shadow-md">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                    <Icon name={feature.icon} className="text-white" size={24} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Тарифные планы</h2>
            <p className="text-xl text-gray-600">Выберите подходящий план для вашего бизнеса</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Старт",
                price: "9 990",
                period: "месяц",
                features: [
                  "До 1000 товаров",
                  "Базовая аналитика",
                  "Email поддержка",
                  "API доступ"
                ]
              },
              {
                name: "Бизнес",
                price: "19 990",
                period: "месяц",
                popular: true,
                features: [
                  "До 10 000 товаров",
                  "Продвинутая аналитика",
                  "Приоритетная поддержка",
                  "API доступ",
                  "Автоматические отчеты",
                  "Интеграция с CRM"
                ]
              },
              {
                name: "Премиум",
                price: "39 990",
                period: "месяц",
                features: [
                  "Безлимитные товары",
                  "Полная аналитика",
                  "24/7 поддержка",
                  "API доступ",
                  "Автоматические отчеты",
                  "Интеграция с CRM",
                  "Персональный менеджер"
                ]
              }
            ].map((plan, index) => (
              <Card 
                key={index} 
                className={`${plan.popular ? 'border-primary border-2 shadow-xl scale-105' : 'border-none shadow-md'} hover:shadow-2xl transition-all`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-primary to-secondary text-white text-center py-2 rounded-t-lg font-semibold">
                    Популярный
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-600"> ₽/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Icon name="Check" className="text-primary" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full mt-6 ${plan.popular ? 'bg-gradient-to-r from-primary to-secondary' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="integration" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Как подключить интеграцию</h2>
            <p className="text-xl text-gray-600">Всего 3 простых шага до автоматизации</p>
          </div>
          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Подключите Google Таблицы",
                description: "Создайте копию нашего шаблона и предоставьте доступ сервису"
              },
              {
                step: "02",
                title: "Добавьте API ключ Ozon",
                description: "Получите API ключ в личном кабинете Ozon и введите его в настройках"
              },
              {
                step: "03",
                title: "Настройте синхронизацию",
                description: "Выберите какие данные и как часто нужно обновлять"
              }
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="text-5xl font-bold text-primary/20">{item.step}</div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-lg">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-600">Ответим на все вопросы и поможем начать работу</p>
          </div>
          <Card className="border-none shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input 
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашей задаче"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            OzonManager
          </h3>
          <p className="text-gray-400 mb-6">
            Сервис автоматизации управления магазином на Ozon
          </p>
          <div className="flex justify-center gap-6 text-gray-400">
            <a href="#" className="hover:text-primary transition-colors">Telegram</a>
            <a href="#" className="hover:text-primary transition-colors">WhatsApp</a>
            <a href="#" className="hover:text-primary transition-colors">Email</a>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500 text-sm">
            © 2024 OzonManager. Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
