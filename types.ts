type FieldType = "firstName" | "lastName";
type Field = {
  name: string;
  type: FieldType;
};
type Form = {
  fields: Field[];
};

export type { Form };
