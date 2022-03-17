import { IWebPartContext } from "@microsoft/sp-webpart-base";

export interface IMsalWpProps {
  description: string;
  context: IWebPartContext;
}

export interface IMsalWpState {
    employeeId: any;
    loading?: boolean;
    loggedIn?: boolean;
    person?: IPerson;
    employeeIds?: IEmployeeId[];
}

export interface IPerson {
    id: string;
    businessPhones?: any[];
    displayName?: string;
    givenName?: string;
    jobTitle?: string;
    employeeId?: string;
    mobilePhone?: any;
    officeLocation?: any;
    preferredLanguage?: string;
    surname?: string;
    userPrincipalName?: string;
}

export interface IEmployeeIds {
    value: IEmployeeIds[];
}

export interface IEmployeeId {
    employeeId: string;
}
