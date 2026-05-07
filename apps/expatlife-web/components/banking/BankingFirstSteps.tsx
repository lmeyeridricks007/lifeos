import type { ComponentProps } from "react";
import { SafeBankingHabits } from "@/components/banking/SafeBankingHabits";

type Props = ComponentProps<typeof SafeBankingHabits>;

/**
 * First-step / immediate-action cards — delegates to {@link SafeBankingHabits} (existing banking card chrome).
 */
export function BankingFirstSteps({ chipLabel = "Step", density = "default", ...rest }: Props) {
  return <SafeBankingHabits chipLabel={chipLabel} density={density} {...rest} />;
}
