import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "../../components/Card";

const meta = {
  title: "Data Display/Card",
  component: Card,
  tags: ["autodocs"],
  args: {
    heading: "Card title",
    description: "Card description",
    children: "Card body content",
    variant: "normal",
    size: "md"
  }
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
