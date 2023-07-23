<script setup>
const props = defineProps({
    body: {
        type: Object,
        required: true,
    },
})

const textAlign = (tunes) => {
    const alignment = tunes.anyTuneName?.alignment
    switch (alignment) {
        case 'left':
            return 'text-start';
        case 'center':
            return 'text-center';
        case 'right':
            return 'text-end';
        default:
            return '';
    }
}
</script>
<template>
    <div v-if="body?.blocks?.length" class="pb-5">
        <template v-for="block in body.blocks">

            <div v-if="block.type == 'image'" class="border my-4">
                <img class="d-flex img-fluid mx-auto p-3" :src="block.data.file.url" :alt="block.data.caption" />
                <small v-if="block.data.caption" class="d-flex font-monospace text-muted justify-content-center">{{
                    block.data.caption }}</small>
            </div>

            <p v-if="block.type == 'paragraph'" v-html="block.data.text" :class="textAlign(block.tunes)"></p>

            <h4 v-if="block.type == 'header'" v-html="block.data.text"
                :class="textAlign(block.tunes) + ' h' + block.data.level">
            </h4>

            <template v-if="block.type == 'list' && block.data.items?.length">
                <ol v-if="block.data.style == 'ordered'" :class="textAlign(block.tunes)">
                    <li v-for="item in block.data.items" v-html="item"></li>
                </ol>
                <ul v-if="block.data.style == 'unordered'" :class="textAlign(block.tunes)">
                    <li v-for="item in block.data.items" v-html="item"></li>
                </ul>
            </template>

            <figure class="quote" v-if="block.type == 'quote' && block.data.text">
                <blockquote v-html="block.data.text"></blockquote>
                <figcaption>
                    <cite v-html="block.data.caption" v-if="block.data.caption"></cite>
                </figcaption>
            </figure>

            <hr v-if="block.type == 'delimiter'" />

            <div v-if="block.type == 'link' && block.data.link"
                style="border: 1px solid #ccc; border-radius: 0.42rem; padding: 1rem;">
                <a :href="block.data.link" target="_blank">{{ block.data.link }}</a>
                <h4 v-if="block.data.meta?.title">{{ block.data.meta?.title }}</h4>
                <p v-if="block.data.meta?.description">{{ block.data.meta?.description }}</p>
            </div>

            <div v-if="block.type == 'table' && block.data.content" class="py-4">
                <table v-if="block.data.content.length" class="table table-hover">
                    <thead v-if="block.data.withHeadings">
                        <tr>
                            <th v-for="th in block.data.content[0]" v-html="th"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in block.data.content" :key="index">
                            <td v-for="td in item" v-html="td ? td : ''"
                                v-if="block.data.withHeadings ? index > 0 : index >= 0"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </template>
    </div>
</template>