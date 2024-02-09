
export interface Client {
  id?: number; // Optional since it might not be available immediately
username: string;
email: string;
weight: number;
length: number;
age: number;
wantToGainWeight: boolean;
usingSupplements: boolean;
activityLevel: string; // Replace with the appropriate TypeScript type or enum
trainer?: Trainer; // Assuming Trainer is another model/interface
biologicalGender: string; // Replace with the appropriate TypeScript type or enum
}

export interface Trainer {
// Define properties for the Trainer model/interface
// ...
}
