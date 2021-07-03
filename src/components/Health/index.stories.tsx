import React from "react";
import { Health } from ".";
import { Meta } from "@storybook/react/types-6-0";

export default {
    title: `Small Components/Health`,
} as Meta;

export const Index = () => <div>
    <Health health={3} />
    <Health health={6} />
    <Health health={9} />
</div>;
