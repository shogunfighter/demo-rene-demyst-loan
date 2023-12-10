import { DROPDOWN_TYPE } from "@/../constants";

export type TBalanceSheetItem = {
    year: number,
    month: number,
    profitOrLoss: number,
    assetsValue: number
};

export type TLoan = {
    id: number;
    status: number;
    description: string;
    amount: number;
    preAssessment: number;
    userId: number;
    accountProviderId: number;
    businessDetailId: number;
};

export type TLoanExtended = TLoan & {
    accountProviderName: string;
    businessDetailName: string;
};

export type TBusinessDetail = {
    id: number;
    name: string;
    year: number;
    summary: number;
}

export type TAccountProvider = {
    id: number;
    name: string;
}

export type TEntry = {
    id: number;
}

// UI
export type TLoanDropdown = {
    options: { value: string; label: string }[],
    value: string,
    variant: DROPDOWN_TYPE,
    id: number
}
export type TBusinessDetailYearDropdown = {
    options: { value: string; label: string }[],
    value: string,
    id: number
}

// UI Page 
export type TPageParam = { params: { id: string } }