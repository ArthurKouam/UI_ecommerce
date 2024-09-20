<template>
    <section style="background-color: rgba(246, 242, 224, 1); z-index: 60;" class=" fixed inset-0 px-5 pt-5">
        <div class=" flex w-full justify-between">
            <img @click="closeDetails" class=" size-6" src="@/assets/images/Vector3.svg" alt="">
            <img class=" size-6" src="@/assets/images/heart-light.svg" alt="">
        </div>
        <div class="bg-white mx-7 mt-7 bor rounded-2xl">
            <img src="@/assets/images/image9.png" alt="">
        </div>
        <div class=" flex gap-8 items-center  mt-8">
            <span class=" text-yellow-500 flex text-2xl gap-3">
                <img src="@/assets/images/Vector2.svg" alt="">4.7
            </span>
            <span class=" bg-black py-1 text-white text-xl font-medium px-5 rounded-3xl grid place-items-center">160 reviews</span>
        </div>
        <div>
            <div class="mt-4 flex items-center justify-between">
                <h2 class="text-2xl font-bold">Soft element jack</h2>
                <div class="flex gap-2">
                        <div class=" size-5 rounded-full bg-red-500"></div>
                        <div class="size-5 rounded-full bg-blue-500"></div>
                        <div class="size-5 rounded-full bg-violet-500"></div>
                </div>
            </div>
            <p class="  mt-3 text-justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi voluptates impedit, quam incidunt modi voluptatem, suscipit exercitationem non reiciendis eligendi id optio aut ab asperiores earum.
            </p>
        </div>

        <div class=" fixed w-full bottom-0 h-20 left-0 flex px-5 items-center justify-between" style="background-color: rgba(138, 137, 137, 0.1);">
            <span class="text-3xl font-bold">$64.00</span>
            <button class=" text-white text-xl bg-black px-8 py-2 font-medium rounded-xl">Add to Cart</button>
        </div>
    </section>
</template>

<script setup>
    import { defineEmits } from 'vue';

    const emit = defineEmits(['closeDetail']);

    function closeDetails(){
        emit('closeDetail')
    }
</script>

<style>
    .bor{
        border: 6px solid rgba(186, 173, 154, 1);
    }
</style>
