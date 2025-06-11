import { UserRoleEnum } from "../enums/user.enum";

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: UserRoleEnum;
}