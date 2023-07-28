<template>
    <el-tree-select v-model="valueStrictly" :data="data" multiple :render-after-expand="false" show-checkbox
        check-strictly check-on-click-node />
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref()
const valueStrictly = ref()

const data = [
    {
        value: 'MMORPG',
        label: 'MMORPG',
        children: [
            {
                value: 'MASSIVE MULTIPLAYER',
                label: 'MASSIVE MULTIPLAYER',
                children: [
                    {
                        value: 'ACTION',
                        label: 'ACTION',
                    },
                ],
            },
        ],
    },
    {
        value: 'FPS',
        label: 'FPS',
        children: [
            {
                value: 'MASSIVE MULTIPLAYER',
                label: 'MASSIVE MULTIPLAYER',
                children: [
                    {
                        value: 'STYLISH',
                        label: 'STYLISH',
                    },
                ],
            },
            {
                value: 'ACTION',
                label: 'ACTION',
                children: [
                    {
                        value: 'Co-op',
                        label: 'Co-op',
                    },
                ],
            },
        ],
    },
    {
        value: 'CASUAL GAME',
        label: 'CASUAL GAME',
        children: [
            {
                value: 'ADVENTURE',
                label: 'ADVENTURE',
                children: [
                    {
                        value: 'SINGLE PLAYER',
                        label: 'SINGLE PLAYE',
                    },
                ],
            },
            {
                value: 'SOCIAL',
                label: 'SOCIAL',
                children: [
                    {
                        value: 'COMMUNICATION',
                        label: 'COMMUNICATION',
                    },
                ],
            },
        ],
    },
]
</script>