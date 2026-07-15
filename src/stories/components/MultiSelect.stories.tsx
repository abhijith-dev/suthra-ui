import type { Meta, StoryObj } from "@storybook/react";

import { MultiSelect } from "../../components/MultiSelect";

const meta = {
  title: "Forms/MultiSelect",
  component: MultiSelect,
  tags: ["autodocs"],
  args: {
    label: "Frameworks",
    options: [
      { label: "React", value: "react" },
      { label: "Vue", value: "vue" },
      { label: "Svelte", value: "svelte" }
    ],
    variant: "normal",
    size: "md"
  }
} satisfies Meta<typeof MultiSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
