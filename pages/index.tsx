import { Box, Grid } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";
import { Select } from "@chakra-ui/select";
import { Button } from "@chakra-ui/button";
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
    {
      name: "jobTitle",
      type: "jobTitle" as const,
    },
  ],
};

function Home() {
  const form = useForm<Form>({ defaultValues });
  const fieldArray = useFieldArray({
    control: form.control,
    name: "fields",
  });

  function handleOnAppend() {
    fieldArray.append({
      name: "firstName",
      type: "firstName" as const,
    });
  }

  return (
    <Box padding="2">
      {fieldArray.fields.map((item, index) => {
        return (
          <Grid
            key={item.id}
            gridTemplateColumns="auto auto"
            gridGap="2"
            mb="2"
          >
            <Input {...form.register(`fields.${index}.name` as const)} />
            <Select
              placeholder="Select option"
              {...form.register(`fields.${index}.type` as const)}
            >
              <option value="firstName">First name</option>
              <option value="lastName">Last name</option>
              <option value="jobTitle">Job title</option>
            </Select>
          </Grid>
        );
      })}
      <Button onClick={handleOnAppend}>Append</Button>
    </Box>
  );
}

export default Home;
