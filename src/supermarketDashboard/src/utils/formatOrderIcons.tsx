import AcceptedButton from '../pages/pedidos/tab/components/ui/AcceptedButton';
import ActionsButtons from '../pages/pedidos/tab/components/ui/ActionsButtons';
import InPreparationButton from '../pages/pedidos/tab/components/ui/InPreparationButton';
import OutForDeliveryButton from '../pages/pedidos/tab/components/ui/OutForDeliveryButton';

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
