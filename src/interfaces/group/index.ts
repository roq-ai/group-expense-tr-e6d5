import { GroupExpenseInterface } from 'interfaces/group-expense';
import { GroupMemberInterface } from 'interfaces/group-member';
import { GetQueryInterface } from 'interfaces';

export interface GroupInterface {
  id?: string;
  name: string;
  description?: string;
  created_at?: any;
  updated_at?: any;
  group_expense?: GroupExpenseInterface[];
  group_member?: GroupMemberInterface[];

  _count?: {
    group_expense?: number;
    group_member?: number;
  };
}

export interface GroupGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
}
