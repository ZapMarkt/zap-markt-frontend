import StatusButton from '@/components/orders/ui/AcceptedButton';
import {
  FaCheck,
  FaClipboardList,
  FaShoppingCart,
  FaTruck,
} from 'react-icons/fa';

// pendent: '#EEBE10',
// accepted: '#2F7958',
// separation: '#09CFFB',
// delivery: '#276EFF',
// concluded: '#F9871F',
// canceled: '#BF1818',
const statusIcons: Record<string, JSX.Element> = {
  Pendente: <FaClipboardList className="w-[18px] text-white" />,
  Aceito: <FaCheck className="w-[18px] text-white" />,
  'Em separação': <FaShoppingCart className="w-[18px] text-white" />,
  'Rota de entrega': <FaTruck className="w-[18px] text-white" />,
  // Concluído: '#F9871F',
  // Cancelado: '#BF1818',
};

export function formatStatusIcons(status: string) {
  const icon = statusIcons[status];
  return icon ? <StatusButton icon={icon} status={status} /> : null;
}
