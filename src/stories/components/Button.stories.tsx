import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../../components/Button";

const meta = {
  title: "Actions/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Button",
    variant: "normal",
    intent: "primary",
    size: "md"
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const Loading: Story = { args: { isLoading: true, children: "Loading" } };
