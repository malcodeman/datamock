import { Box } from "@chakra-ui/layout";
import { useForm, useFieldArray } from "react-hook-form";

import { Form } from "../types";

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

  return (
    <Box>
      {fieldArray.fields.map((item) => {
        return <Box key={item.id}>{item.name}</Box>;
      })}
    </Box>
  );
}

export default Home;
