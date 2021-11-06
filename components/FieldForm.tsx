import { Input } from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Select } from "@chakra-ui/select";

import { FieldType } from "../types";

const defaultValues = {
  name: "",
  type: "",
};

type props = {
  onSubmit: (data: { name: string; type: FieldType }) => void;
};

const schema = Yup.object({
  name: Yup.string().required(),
  type: Yup.string().required(),
});

function FieldForm(props: props) {
  const { onSubmit } = props;
  const form = useForm({ defaultValues, resolver: yupResolver(schema) });
  return (
    <Flex
      as="form"
      display="inline-flex"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <Input {...form.register("name")} mr="2" />
      <Select placeholder="Select option" {...form.register("type")} mr="2">
        <option value="firstName">First name</option>
        <option value="lastName">Last name</option>
        <option value="jobTitle">Job title</option>
      </Select>
      <Button type="submit">Add</Button>
    </Flex>
  );
}

export default FieldForm;
