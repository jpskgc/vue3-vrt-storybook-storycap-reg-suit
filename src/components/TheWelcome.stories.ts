import TheWelcome from './TheWelcome.vue';
import  '../assets/base.css'
import type { Meta } from '@storybook/vue3';

export default {
    title: 'TheWelcome',
    component: TheWelcome,
    decorators: [() => ({ template: '<div style="margin: 3em;"><story /></div>' })],
} as Meta<typeof TheWelcome>;

export const Sample = () => ({
    components: { TheWelcome },
    template: '<TheWelcome> </TheWelcome>',
});

