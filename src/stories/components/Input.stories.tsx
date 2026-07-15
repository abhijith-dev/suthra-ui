import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "../../components/Input";

const meta = {
  title: "Forms/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    label: "Email",
    placeholder: "you@example.com",
    variant: "normal",
    size: "md"
  }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const Error: Story = { args: { error: "Invalid email" } };
