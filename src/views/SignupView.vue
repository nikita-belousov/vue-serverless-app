<script lang="ts">
import Page from '@/components/Page.vue';
import TextInput from '@/components/TextInput.vue';
import Spinner from '@/components/Spinner.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        Page,
        TextInput,
        Spinner,
    },

    data() {
        return {
            data: {
                name: '',
                phone: '',
            },
            submitted: false,
        };
    },

    methods: {
        handleChange(name: 'name' | 'phone', value: string) {
            if (typeof value !== 'string') {
                return;
            }

            this.data[name] = value;
        },

        async handleSubmit() {
            if (!this.data.name || !this.data.phone) {
                return;
            }

            const id = Math.ceil(Math.random() * 10000000);
            const data = {
                id,
                name: this.data.name,
                phone: this.data.phone,
                date: new Date().toLocaleString(),
            };
            const url =
                'https://n0z1jakjwd.execute-api.eu-central-1.amazonaws.com/dev/signup';

            return fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            }).then(() => (this.submitted = true));
        },
    },
});
</script>

<template>
    <Page title="Запись на прием">
        <div v-if="!submitted">
            <FormKit
                type="form"
                submit-label="signup"
                :incomplete-message="false"
                :actions="false"
                :config="{ validationVisibility: 'dirty' }"
                @submit="handleSubmit"
                #default="{ state: { loading } }"
            >
                <div class="mb-8">
                    <FormKit
                        v-model="data.name"
                        label="Имя"
                        type="text"
                        name="name"
                        validation="required|matches:/^[A-Za-zА-Яа-я\s]+$/"
                        :validation-messages="{
                            // required: 'Заполните имя',
                            matches: 'Имя должно состоять только из букв',
                        }"
                    />
                    <FormKit
                        v-model="data.phone"
                        label="Телефон"
                        type="text"
                        name="phone"
                        validation="required|matches:/^\+?[\d\s]+$/"
                        :validation-messages="{
                            required: 'Заполните телефон',
                            matches: 'Телефон должен состоять только из цифр',
                        }"
                    />
                </div>
                <FormKit
                    type="submit"
                    label="signup"
                    outer-class="px-3 h-10 w-40 flex justify-center items-center bg-accent text-white rounded-sm"
                >
                    <span v-if="!loading" class="relative bottom-0.5"
                        >Записаться</span
                    >
                    <Spinner v-if="loading" />
                </FormKit>
            </FormKit>
        </div>
        <div v-else class="success-text">
            Вы успешно записаны!
        </div>
    </Page>
</template>
