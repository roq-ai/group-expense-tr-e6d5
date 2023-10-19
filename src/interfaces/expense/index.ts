import { GroupExpenseInterface } from 'interfaces/group-expense';
import { GetQueryInterface } from 'interfaces';

export interface ExpenseInterface {
  id?: string;
  amount: number;
  description?: string;
  created_at?: any;
  updated_at?: any;
  group_expense?: GroupExpenseInterface[];

  _count?: {
    group_expense?: number;
  };
}

export interface ExpenseGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
}
