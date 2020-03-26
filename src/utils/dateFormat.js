import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

export function formatDate(date) {
  return format(new Date(date), 'dd/MM/yyyy', {
    locale: pt,
  });
}
