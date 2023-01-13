import Colors from './components/Colors.vue';
import ColorsPreview from '././components/ColorsPreview.vue';

window.panel.plugin('khepri/colors', {
    fields: {
        colors: Colors
    },
    components: {
        'k-colors-field-preview': ColorsPreview
    }
});
