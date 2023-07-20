import type { Meta, StoryObj } from "@storybook/react";

import { TextLink } from "./TextLink";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: TextLink,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof TextLink>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {
    label: "Button",
    url: "/",
    primary: true,
  },
};

export const Global: Story = {
  args: {
    label: "Button",
    url: "/",
  },
};

// export const Large: Story = {
//   args: {
//     // size: "large",
//     label: "Button",
//   },
// };

// export const Small: Story = {
//   args: {
//     // size: "small",
//     label: "Button",
//   },
// };
