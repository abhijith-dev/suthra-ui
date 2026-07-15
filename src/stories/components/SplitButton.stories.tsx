import type { Meta, StoryObj } from "@storybook/react";

import { SplitButton } from "../../components/SplitButton";

const meta = {
  title: "Actions/SplitButton",
  component: SplitButton,
  tags: ["autodocs"],
  args: {
    label: "Save",
    menuLabel: "Menu",
    variant: "normal",
    size: "md"
  }
} satisfies Meta<typeof SplitButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
