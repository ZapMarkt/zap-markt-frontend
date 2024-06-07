import { CustomAppBar } from "../components/CustomAppBar";
import { CustomTabs } from "../components/CustomTabs";
import { Layout } from "../shared/Layout";
import { SubscriptionPlanForm } from "../components/SubscriptionPlanForm";
import { SubscriptonPlanTable } from "../components/SubscriptionPlanTable";

export function SubscriptionPlan() {
  return (
    <Layout>
      <CustomAppBar title="Plano de assinatura" />
      <CustomTabs />
      <SubscriptionPlanForm />
      <SubscriptonPlanTable />
    </Layout>
  );
}
