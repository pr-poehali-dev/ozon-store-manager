import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

interface SyncStep {
  id: number;
  label: string;
  icon: string;
  status: "pending" | "loading" | "success";
}

const DemoSync = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  
  const [steps, setSteps] = useState<SyncStep[]>([
    { id: 1, label: "Подключение к Ozon API", icon: "Plug", status: "pending" },
    { id: 2, label: "Получение данных о товарах", icon: "Package", status: "pending" },
    { id: 3, label: "Обработка информации", icon: "Cpu", status: "pending" },
    { id: 4, label: "Синхронизация с Google Таблицами", icon: "RefreshCw", status: "pending" },
    { id: 5, label: "Готово!", icon: "CheckCircle2", status: "pending" }
  ]);

  const [syncData, setSyncData] = useState({
    products: 0,
    orders: 0,
    revenue: 0
  });

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsRunning(false);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    const stepIndex = Math.floor(progress / 20);
    if (stepIndex !== currentStep && stepIndex < steps.length) {
      setCurrentStep(stepIndex);
      
      setSteps(prev => prev.map((step, idx) => {
        if (idx < stepIndex) return { ...step, status: "success" };
        if (idx === stepIndex) return { ...step, status: "loading" };
        return step;
      }));

      if (stepIndex >= 1) {
        setSyncData(prev => ({
          products: Math.min(prev.products + Math.floor(Math.random() * 50), 847),
          orders: Math.min(prev.orders + Math.floor(Math.random() * 10), 234),
          revenue: Math.min(prev.revenue + Math.floor(Math.random() * 50000), 1847500)
        }));
      }
    }

    if (progress >= 100) {
      setSteps(prev => prev.map(step => ({ ...step, status: "success" })));
    }
  }, [progress]);

  const handleStart = () => {
    setIsRunning(true);
    setProgress(0);
    setCurrentStep(0);
    setSyncData({ products: 0, orders: 0, revenue: 0 });
    setSteps(prev => prev.map(step => ({ ...step, status: "pending" })));
  };

  const handleReset = () => {
    setIsRunning(false);
    setProgress(0);
    setCurrentStep(0);
    setSyncData({ products: 0, orders: 0, revenue: 0 });
    setSteps(prev => prev.map(step => ({ ...step, status: "pending" })));
  };

  return (
    <div className="space-y-8">
      <Card className="border-none shadow-xl">
        <CardContent className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold">Демонстрация синхронизации</h3>
            <div className="flex gap-3">
              <Button 
                onClick={handleStart} 
                disabled={isRunning}
                className="bg-gradient-to-r from-primary to-secondary"
              >
                <Icon name="Play" size={18} className="mr-2" />
                Запустить демо
              </Button>
              <Button 
                onClick={handleReset} 
                variant="outline"
                disabled={isRunning}
              >
                <Icon name="RotateCcw" size={18} className="mr-2" />
                Сбросить
              </Button>
            </div>
          </div>

          <Progress value={progress} className="mb-8 h-3" />

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg mb-4">Процесс синхронизации</h4>
              {steps.map((step) => (
                <div 
                  key={step.id}
                  className={`flex items-center gap-4 p-4 rounded-lg transition-all ${
                    step.status === "loading" 
                      ? "bg-primary/10 border-2 border-primary" 
                      : step.status === "success"
                      ? "bg-green-50 border border-green-200"
                      : "bg-gray-50"
                  }`}
                >
                  <div className={`${
                    step.status === "loading" ? "animate-spin" : ""
                  }`}>
                    <Icon 
                      name={step.icon} 
                      size={24}
                      className={
                        step.status === "success" 
                          ? "text-green-600" 
                          : step.status === "loading"
                          ? "text-primary"
                          : "text-gray-400"
                      }
                    />
                  </div>
                  <span className={`font-medium ${
                    step.status === "pending" ? "text-gray-400" : ""
                  }`}>
                    {step.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg mb-4">Синхронизированные данные</h4>
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-blue-700 mb-1">Товары</div>
                      <div className="text-3xl font-bold text-blue-900">
                        {syncData.products.toLocaleString()}
                      </div>
                    </div>
                    <Icon name="Package" size={40} className="text-blue-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-purple-700 mb-1">Заказы</div>
                      <div className="text-3xl font-bold text-purple-900">
                        {syncData.orders.toLocaleString()}
                      </div>
                    </div>
                    <Icon name="ShoppingCart" size={40} className="text-purple-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-green-700 mb-1">Выручка</div>
                      <div className="text-3xl font-bold text-green-900">
                        {syncData.revenue.toLocaleString()} ₽
                      </div>
                    </div>
                    <Icon name="TrendingUp" size={40} className="text-green-400" />
                  </div>
                </CardContent>
              </Card>

              {progress === 100 && (
                <Card className="bg-gradient-to-r from-green-500 to-emerald-500 border-none animate-scale-in">
                  <CardContent className="p-4 text-center">
                    <div className="text-white font-semibold flex items-center justify-center gap-2">
                      <Icon name="CheckCircle2" size={24} />
                      Синхронизация завершена успешно!
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DemoSync;
