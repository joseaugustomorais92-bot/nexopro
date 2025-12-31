"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Domain = exports.UserRole = exports.CompanyType = void 0;
var CompanyType;
(function (CompanyType) {
    CompanyType["INDUSTRIAL"] = "industrial";
    CompanyType["COMERCIAL"] = "comercial";
    CompanyType["SERVICOS"] = "servicos";
    CompanyType["AGROPECUARIA"] = "agropecuaria";
    CompanyType["EXTRATIVISTA"] = "extrativista";
})(CompanyType || (exports.CompanyType = CompanyType = {}));
var UserRole;
(function (UserRole) {
    UserRole["GLOBAL_ADMIN"] = "global_admin";
    UserRole["COMPANY_OWNER"] = "owner";
    UserRole["ADMIN"] = "admin";
    UserRole["MANAGER"] = "manager";
    UserRole["EMPLOYEE"] = "employee";
    UserRole["AUDITOR"] = "auditor";
})(UserRole || (exports.UserRole = UserRole = {}));
var Domain;
(function (Domain) {
    Domain["IDENTITY"] = "identity";
    Domain["COMPANIES"] = "companies";
    Domain["GOVERNANCE"] = "governance";
    Domain["ACCOUNTING"] = "accounting";
    Domain["FINANCIAL"] = "financial";
    Domain["HR"] = "hr";
    Domain["OPERATIONS"] = "operations";
    Domain["INVENTORY"] = "inventory";
})(Domain || (exports.Domain = Domain = {}));
//# sourceMappingURL=index.js.map