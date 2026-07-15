import type { Meta, StoryObj } from "@storybook/react";

import { Pagination } from "../../components/Pagination";

const meta = {
  title: "Navigation/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  args: {
    page: 2,
    totalPages: 10
  }
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
