<template>
    <transition name="modal-animation">
        <div v-show="modalActive" class="modal">
            <transition name="modal-animation-inner">
                <div v-show="modalActive" class="modal-inner">
                <div class="modal-top">
                <button @click="close" class="modal-modal" type="button">X</button>
                </div>
             
                    <slot />
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
export default {
    props: ['modalActive'],
    setup(props, { emit }) {
        const close = () => {
            emit('close')
        }
        return {
            close
        }
    }
}
</script>

<style scoped>
.modal {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(110, 110, 110, 0.7);
    overflow: scroll;
    
}

.modal-inner {
    position: relative;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    background-color: #fff;
    padding: 20px 20px;
    overflow: scroll;
}


.modal-modal {
    position: absolute;
    top: 0px;
    right: 0px;
    font-size: 20px;
    cursor: pointer;
}

/* .modal-modal:hover {
    color: crimson;

} */

button {
    padding: 4px 4px;
    border: none;
    font-size: 8px;
    background-color: crimson;
    color: #fff;
    cursor: pointer;

}

.modal-animation-enter-active,
.modal-animation-leave-active {
    transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-enter-from,
.modal-animation-leave-to {
    opacity: 0;
}

.modal-animation-inner-enter-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-animation-inner-leave-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-inner-enter-from {
    opacity: 0;
    transform: scale(0.8);
}

.modal-animation-inner-leave-to {
    transform: scale(0.8);
}
</style>