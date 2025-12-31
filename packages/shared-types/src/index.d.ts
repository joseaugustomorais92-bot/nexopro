export declare enum CompanyType {
    INDUSTRIAL = "industrial",
    COMERCIAL = "comercial",
    SERVICOS = "servicos",
    AGROPECUARIA = "agropecuaria",
    EXTRATIVISTA = "extrativista"
}
export declare enum UserRole {
    GLOBAL_ADMIN = "global_admin",
    COMPANY_OWNER = "owner",
    ADMIN = "admin",
    MANAGER = "manager",
    EMPLOYEE = "employee",
    AUDITOR = "auditor"
}
export declare enum Domain {
    IDENTITY = "identity",
    COMPANIES = "companies",
    GOVERNANCE = "governance",
    ACCOUNTING = "accounting",
    FINANCIAL = "financial",
    HR = "hr",
    OPERATIONS = "operations",
    INVENTORY = "inventory"
}
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
export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
    timestamp: string;
}
