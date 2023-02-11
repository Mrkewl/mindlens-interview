<script>
export default
    {
        name: 'color',
        props: ['color'],
        data() {
            return {
                count: 0,
            }
        },
        methods: {
            toggle() {
                if (this.count >= 3) {
                    this.count = 0;
                } else {
                    this.count++
                }

            }
        },

    }
</script>


<template>
    <button
        :class="{ lefticonbutton: count === 2, righticonbutton: count === 0, actionbutton: count === 3, iconbutton: count === 1, colorBlue: this.color === 0, colorRed: this.color === 1, colorOrange: this.color === 2, colorGreen: this.color === 3 }"
        v-on:click="toggle">
        <slot>
            <use v-if="count === 2" class="svg">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 11.5H21.5M21.5 11.5L14.5 18.5M21.5 11.5L14.5 4.5" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            </use>
            <span v-if="count !== 1">
                Action
            </span>
            <use v-if="count < 2" class="svg">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 11.5H21.5M21.5 11.5L14.5 18.5M21.5 11.5L14.5 4.5" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </use>
        </slot>
    </button>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap');

.colorBlue {
    background: #F7BA50;
    color: black;
    fill: black;
    stroke: black;
}

.colorBlue:hover{
    background-color: #F5AB2B;
}

.colorRed {
    background: #CC3123;
    color: white;
    fill: white;
    stroke: white;
}

.colorOrange {
    background: #C75100;
    color: white;
    fill: white;
    stroke: white;
}


.colorGreen {
    background: #008700;
    color: white;
    fill: white;
    stroke: white;
}


.svg {
    display: flex;
    align-self: center;
}

.lefticonbutton {
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    align-items: center;
    padding: 6px 12px;
    gap: 4px;
    width: 130px;
    height: 40px;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    border-radius: 8px;
    border-width: 0px;
}

.lefticonbutton:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}


.righticonbutton {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6px 12px;
    gap: 4px;
    width: 130px;
    height: 40px;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    border-radius: 8px;
    border-width: 0px;
}

.righticonbutton:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

}

.actionbutton {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6px 12px;
    gap: 4px;
    border-radius: 8px;
    width: 98px;
    height: 40px;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    border-width: 0px;
}

.actionbutton:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

}

.iconbutton {

    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6px 12px;
    gap: 8px;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    border-width: 0px;

}

.iconbutton:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
</style>
