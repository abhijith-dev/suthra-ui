import type { Meta, StoryObj } from "@storybook/react";

import { LinkButton } from "../../components/LinkButton";

const meta = {
  title: "Actions/LinkButton",
  component: LinkButton,
  tags: ["autodocs"],
  args: {
    href: "#",
    children: "Open link",
    variant: "normal",
    size: "md"
  }
} satisfies Meta<typeof LinkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
