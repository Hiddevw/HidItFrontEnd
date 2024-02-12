export interface Trainer {
  id?: number;
username: string;
password: string;
email: string;
roles: Role[];
clients: Client[];
}

export interface Client {
id?: number;
username: string;
email: string;
weight: number;
length: number;
age: number;
wantToGainWeight: boolean;
usingSupplements: boolean;
activityLevel: string; // Replace with the appropriate TypeScript type or enum
trainer?: Trainer;
biologicalGender: string; // Replace with the appropriate TypeScript type or enum
}
