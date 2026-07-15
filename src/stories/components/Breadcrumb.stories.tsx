import type { Meta, StoryObj } from "@storybook/react";

import { Breadcrumb } from "../../components/Breadcrumb";

const meta = {
  title: "Navigation/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  args: {
    items: [
      { label: "Home", href: "#" },
      { label: "Library", href: "#" },
      { label: "Data" }
    ],
    separator: "/"
  }
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
