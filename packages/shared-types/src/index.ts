// Enums globais
export enum CompanyType {
  INDUSTRIAL = 'industrial',
  COMERCIAL = 'comercial',
  SERVICOS = 'servicos',
  AGROPECUARIA = 'agropecuaria',
  EXTRATIVISTA = 'extrativista'
}

export enum UserRole {
  GLOBAL_ADMIN = 'global_admin',
  COMPANY_OWNER = 'owner',
  ADMIN = 'admin',
  MANAGER = 'manager',
  EMPLOYEE = 'employee',
  AUDITOR = 'auditor'
}

export enum Domain {
  IDENTITY = 'identity',
  COMPANIES = 'companies',
  GOVERNANCE = 'governance',
  ACCOUNTING = 'accounting',
  FINANCIAL = 'financial',
  HR = 'hr',
  OPERATIONS = 'operations',
  INVENTORY = 'inventory'
}

// Interfaces base para Entidades
export interface IBaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export interface ITenant extends IBaseEntity {
  name: string;
  type: CompanyType;
  region?: string;
  isActive: boolean;
}

export interface IUser extends IBaseEntity {
  name: string;
  email: string;
  role: UserRole;
  tenantId?: string;
}

// Interfaces de Resposta de API
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  timestamp: string;
}
