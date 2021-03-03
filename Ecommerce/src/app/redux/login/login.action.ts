import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/core/model/user';


export const UpdateUser= createAction('[Login]searching',props<{user:User}>());
export const addUser= createAction('[add]addddding',props<{user:User}>());