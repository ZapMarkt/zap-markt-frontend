import dayjs, { Dayjs } from "dayjs";
import { z } from "zod";
import { parseCurrency } from "../../utils/parseCurrency";

export const SubscriptionPlanFormSchema = z.object({
  subscriptionPlan: z.string(),
  packageValue: z.string().refine((val) => parseCurrency(val) >= 1, {
    message: "O valor inserido deve ser, no mínimo, R$ 1,00",
  }),
  sendDate: z.instanceof(dayjs as unknown as typeof Dayjs),
  dueDate: z.instanceof(dayjs as unknown as typeof Dayjs),
});
