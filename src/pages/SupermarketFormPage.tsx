import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SupermarketForm } from "../components/SupermarketForm";
import { Layout } from "../shared/Layout";
import { SubscriptionPlanForm } from "@/components/SubscriptionPlanForm";

export function SupermarketFormPage() {
  return (
    <Layout headerTitle="Novo cadastro">
      <div className="p-8 h-[840px] overflow-x-hidden">
        <Tabs defaultValue="form">
          <TabsList className="mb-8">
            <TabsTrigger value="form">Dados cadastrais</TabsTrigger>
            <TabsTrigger value="subscription">Plano de assinatura</TabsTrigger>
            <TabsTrigger value="configurations">Configurações</TabsTrigger>
          </TabsList>
          <TabsContent value="form">
            <SupermarketForm />
          </TabsContent>
          <TabsContent value="subscription">
            <SubscriptionPlanForm />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
