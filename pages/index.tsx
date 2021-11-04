import { Box } from "@chakra-ui/layout";
import { useForm, useFieldArray } from "react-hook-form";

import FieldForm from "../components/FieldForm";

import { Form, FieldType } from "../types";

const defaultValues = {
  fields: [
    {
      name: "firstName",
      type: "firstName" as const,
    },
    {
      name: "lastName",
      type: "lastName" as const,
    },
  ],
};

function Home() {
  const form = useForm<Form>({ defaultValues });
  const fieldArray = useFieldArray({
    control: form.control,
    name: "fields",
  });

  function handleOnSubmit(data: { name: string; type: FieldType }) {
    fieldArray.append({ name: data.name, type: data.type });
  }

  return (
    <Box>
      {fieldArray.fields.map((item) => {
        return (
          <Box key={item.id}>
            {item.name} - {item.type}
          </Box>
        );
      })}
      <FieldForm onSubmit={handleOnSubmit} />
    </Box>
  );
}

export default Home;
