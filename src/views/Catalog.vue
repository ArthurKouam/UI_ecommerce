<template>
    <section style="background-color: rgba(246, 242, 224, 1);" class="w-full px-5 pb-24 pt-9" v-if="!detailVisible">
        <div class=" flex justify-between items-center">
            <img src="@/assets/images/Vector.svg" alt="">
            <div class=" flex gap-4 items-center">
                <img src="@/assets/images/cart.svg" class=" w-7" alt="">
                <img src="@/assets/images/Group2.svg" class=" w-7" alt="">
            </div>
        </div>

        <div class=" mt-10">
            <h2 class=" text-2xl font-bold">Explore products</h2>
            <div class=" flex flex-nowrap overflow-scroll web mt-5">
                <span class="grid place-items-center bg-black rounded-3xl px-7 mr-5 text-white h-11">
                    chair
                </span>
                <span v-for="n in 6" :key="n" style="background-color: rgba(217, 217, 217, 1);" class="grid mr-5 px-7 place-items-center rounded-3xl w-48 text-black h-11">
                    chair
                </span>
            </div>
        </div>

        <div class=" mt-12 grid grid-cols-2 gap-x-5 gap-y-7 text-center">
            <div v-for="n in 8" class=" relative elements" id="elements" @click="detailVisible = !detailVisible">
                <div class=" h-48 bg-white rounded-t-full border-4 bor object-cover object-center overflow-hidden">
                    <img src="@/assets/images/image9.png" class=" object-cover translate-y-5 object-center anim" alt="">
                </div>
                <div class="mt-4">
                    <p class=" gap-4 hidden"><span class=" text-yellow-400 flex gap-2 text-xl"><img src="@/assets/images/vector2.svg" alt="">4.7</span><span class=" text-xl text-white py-2 px-2 bg-black grid place-items-center rounded-3xl">160 reviews</span></p>
                    <p class=" font-bold ">Soft element jack</p>
                    <p>$59 </p>
                    <div class="flex w-full justify-center gap-2 mt-2">
                        <div class="h-3 w-3 rounded-full bg-red-500"></div>
                        <div class="h-3 w-3 rounded-full bg-blue-500"></div>
                        <div class="h-3 w-3 rounded-full bg-violet-500"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <ProductsDetails v-else class="an" @closeDetail="detailVisible = !detailVisible"></ProductsDetails>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import ProductsDetails from '@/components/ProductsDetails.vue';
    const detailVisible = ref(false)
</script>

<style scoped>
    .web::-webkit-scrollbar{
        display: none;
    }
    .bor{
        border-color: rgba(186, 173, 154, 1);
    }
    .anim{
        animation: .5s ease-out anim;
    }
    .an{
        animation: .5s ease an;
    }
    @keyframes anim {
        0%{
            transform: translateY(-200px);
        }
    }

    @keyframes an {
        0%{
            transform: translateY(100%);
        }
    }
</style>