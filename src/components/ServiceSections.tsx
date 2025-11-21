import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ServiceSections = () => {
  const sections = [
    {
      title: "Раздел \"Товары\"",
      description: "Полная информация о всех ваших товарах на Ozon в удобной таблице",
      features: [
        "Артикулы и названия товаров",
        "Актуальные цены и скидки",
        "Остатки на складе",
        "Статусы товаров",
        "История изменений"
      ],
      image: "https://cdn.poehali.dev/projects/0cad8161-ffd1-448a-8ed9-a67b3cd510b2/files/63a5b64e-71be-4e90-81a2-02b53e5c4122.jpg",
      icon: "Package"
    },
    {
      title: "Раздел \"Продажи\"",
      description: "Детальная аналитика продаж с ключевыми метриками вашего бизнеса",
      features: [
        "Количество заказов за период",
        "Общая выручка",
        "Средний чек",
        "Динамика продаж",
        "Топ товаров"
      ],
      image: "https://cdn.poehali.dev/projects/0cad8161-ffd1-448a-8ed9-a67b3cd510b2/files/0a6aa1bb-fa2a-4f86-aa6e-89729d22b660.jpg",
      icon: "TrendingUp"
    },
    {
      title: "Раздел \"Аналитика\"",
      description: "Подробные отчёты по товарам с полными данными для анализа",
      features: [
        "SKU и характеристики",
        "Цены и остатки",
        "Количество продаж",
        "Выручка по товарам",
        "Экспорт данных"
      ],
      image: "https://cdn.poehali.dev/projects/0cad8161-ffd1-448a-8ed9-a67b3cd510b2/files/84a3b905-ce15-4129-b666-543959cc098e.jpg",
      icon: "BarChart3"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Разделы сервиса</h2>
          <p className="text-xl text-gray-600">Вся информация о вашем магазине структурирована и доступна в Google Таблицах</p>
        </div>
        
        <div className="space-y-16">
          {sections.map((section, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
            >
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon name={section.icon} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-3xl font-bold">{section.title}</h3>
                </div>
                
                <p className="text-lg text-gray-600 mb-6">{section.description}</p>
                
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Что включает раздел:</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <Icon name="CheckCircle2" className="text-primary flex-shrink-0" size={20} />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex-1">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-xl group-hover:blur-2xl transition-all" />
                  <img 
                    src={section.image}
                    alt={section.title}
                    className="relative rounded-lg shadow-2xl w-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSections;
