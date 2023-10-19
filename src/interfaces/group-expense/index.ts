import { GroupInterface } from 'interfaces/group';
import { ExpenseInterface } from 'interfaces/expense';
import { GetQueryInterface } from 'interfaces';

export interface GroupExpenseInterface {
  id?: string;
  group_id: string;
  expense_id: string;
  created_at?: any;
  updated_at?: any;

  group?: GroupInterface;
  expense?: ExpenseInterface;
  _count?: {};
}

export interface GroupExpenseGetQueryInterface extends GetQueryInterface {
  id?: string;
  group_id?: string;
  expense_id?: string;
}
