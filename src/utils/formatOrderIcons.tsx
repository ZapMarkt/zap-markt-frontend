import AcceptedButton from '../components/orders/ui/AcceptedButton';
import ActionsButtons from '../components/orders/ui/ActionsButtons';
import InPreparationButton from '../components/orders/ui/InPreparationButton';
import OutForDeliveryButton from '../components/orders/ui/OutForDeliveryButton';

const statusIcons: Record<string, JSX.Element> = {
  Pendente: <ActionsButtons />,
  Aceito: <AcceptedButton />,
  'Em separação': <InPreparationButton />,
  'Rota de entrega': <OutForDeliveryButton />,
  //   Concluído: '#F9871F',
  //   Cancelado: '#BF1818',
};

export function formatStatusIcons(status: string) {
  return {
    icon: statusIcons[status],
  };
}
