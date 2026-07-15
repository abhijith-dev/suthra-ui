import type { Meta, StoryObj } from "@storybook/react";

import { OTPInput } from "../../components/OTPInput";

const meta = {
  title: "Forms/OTPInput",
  component: OTPInput,
  tags: ["autodocs"],
  args: {
    length: 6,
    value: "123",
    variant: "normal",
    size: "md"
  }
} satisfies Meta<typeof OTPInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
