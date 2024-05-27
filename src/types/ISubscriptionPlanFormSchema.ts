import { z } from "zod";
import { SubscriptionPlanFormSchema } from "../libs/zod/SubscriptionPlanFormShema";

export type ISubscriptionPlanFormSchema = z.infer<typeof SubscriptionPlanFormSchema>;
