type FieldType = "firstName" | "lastName" | "jobTitle";
type Field = {
  name: string;
  type: FieldType;
};
type Form = {
  fields: Field[];
};

export type { Form, FieldType };
