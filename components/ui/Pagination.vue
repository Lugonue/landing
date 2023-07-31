<script setup>
const route = useRoute()
const { $helpers } = useNuxtApp()
const props = defineProps({
    pagination: {
        type: [Object],
    }
})

const routeQuery = (query) => {
    let result = [];
    for (var param in query)
        if (query[param]) {
            result[param] = query[param]
        }
    return result;
}

const page = ref(route.query.page ? route.query.page : 1)
const query = ref({})

const setPage = (pageNumber) => {
    const route = useRoute()
    page.value = Number(pageNumber)
    query.value = routeQuery(route.query)
    query.value.page = page.value

    return navigateTo({
        path: route.path,
        query: query.value
    })
}

watch(() => route.query, () => {
    page.value = route.query.page ? route.query.page : 1
})
</script>
<style scoped>
a {
    cursor: pointer;
}
</style>
<template>
    <ul class="pagination" v-if="pagination.last_page > 1">
        <!-- В начало и предыдущая страница -->
        <li :class="'page-item previous ' + (page == 1 ? 'disabled' : '')">
            <a class="page-link" @click="setPage(1)">
                <i class="previous"></i><i class="previous"></i>
            </a>
        </li>
        <li :class="'page-item previous ' + (page == 1 ? 'disabled' : '')">
            <a class="page-link" @click="setPage(parseInt(page) - 1)">
                <i class="previous"></i>
            </a>
        </li>
        <!--// В начало и предыдущая страница -->

        <!-- Первая страница -->
        <li :class="'page-item ' + (!page || page == 1 ? 'active' : (!page && page == 1 ? 'active' : ''))">
            <a class="page-link" @click="setPage(1)">1</a>
        </li>
        <li class="page-item" v-if="page > 4">
            <span class="page-link">...</span>
        </li>
        <!--// Первая страница -->

        <!-- Остальные страницы -->
        <template v-for="(pageCheck, index) in pagination.last_page">
            <template v-if="pageCheck > 1 && pageCheck < pagination.last_page">
                <template v-if="page < (pageCheck + 3) && page > (pageCheck - 3)">
                    <li :class="'page-item ' + (page == pageCheck ? 'active' : (!page && pageCheck == 1 ? 'active' : ''))">
                        <a class="page-link" @click="setPage(pageCheck)">{{ pageCheck }}</a>
                    </li>
                </template>
            </template>
        </template>
        <!--// Остальные страницы -->

        <!-- Последняя страница -->
        <li class="page-item" v-if="(pagination.last_page - page) > 3">
            <span class="page-link">...</span>
        </li>
        <li :class="'page-item ' + (page == pagination.last_page ? 'active' : (!page && pageCheck == 1 ? 'active' : ''))">
            <a class="page-link" @click="setPage(pagination.last_page)">{{ pagination.last_page }}</a>
        </li>
        <!--// Последняя страница -->

        <!-- В конец и следующая страница -->
        <li :class="'page-item next ' + (page == pagination.last_page ? 'disabled' : '')">
            <a class="page-link" @click="setPage(parseInt(page) + 1)">
                <i class="next"></i>
            </a>
        </li>
        <li :class="'page-item next ' + (page == pagination.last_page ? 'disabled' : '')">
            <a class="page-link" @click="setPage(pagination.last_page)">
                <i class="next"></i><i class="next"></i>
            </a>
        </li>
        <!--// В конец и следующая страница -->
    </ul>
</template>