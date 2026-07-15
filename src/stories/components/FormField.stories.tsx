import type { Meta, StoryObj } from "@storybook/react";

import { FormField } from "../../components/FormField";

const meta = {
  title: "Forms/FormField",
  component: FormField,
  tags: ["autodocs"],
  args: {
    label: "Form Label",
    hint: "Helper text",
    children: <input placeholder="Nested control" />,
    variant: "normal",
    size: "md"
  }
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
