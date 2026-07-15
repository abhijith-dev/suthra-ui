import type { Meta, StoryObj } from "@storybook/react";

import { Slider } from "../../components/Slider";

const meta = {
  title: "Forms/Slider",
  component: Slider,
  tags: ["autodocs"],
  args: {
    label: "Volume",
    min: 0,
    max: 100,
    defaultValue: 40,
    variant: "normal",
    size: "md"
  }
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
