import TheWelcome from './TheWelcome.vue';
import  '../assets/base.css'
import type { Meta } from '@storybook/vue3';

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'TheWelcome',
    component: TheWelcome,
    decorators: [() => ({ template: '<div style="margin: 3em;"><story /></div>' })],
} as Meta<typeof TheWelcome>;

export const Primary = () => ({
    components: { TheWelcome },
    template: '<TheWelcome> </TheWelcome>',
});

