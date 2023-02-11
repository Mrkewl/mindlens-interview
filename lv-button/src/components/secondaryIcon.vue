<script>
export default
    {
        name: 'color',
        name: 'disable',
        props: ['color', 'disable'],
        data() {
            return {
                count: 0,

            }
        },
        methods: {
            toggle() {
                if (this.disable) {

                    return this.count
                } else
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
        :class="{ disableHover: this.disable === true, leftSecondaryiconbutton: count === 2, rightSecondaryiconbutton: count === 0, actionbutton: count === 3, iconbutton: count === 1, colorBlue: this.color === 0, colorRed: this.color === 1, colorOrange: this.color === 2, colorGreen: this.color === 3 }"
        v-on:click="toggle" :disabled="this.disable === true">
        <slot>
            <use v-if="count === 2" class="svg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 20L8 12L16 4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <!-- <svg height="18px" width="18px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 25.451 25.451" xml:space="preserve">
                    <g>
                        <g id="c185_triangle">
                            <path d="M20.982,0.521v2.006L8.57,12.315c-0.121,0.101-0.195,0.251-0.195,0.41s0.074,0.311,0.195,0.41l12.412,9.79v2.005
			c0,0.199-0.115,0.383-0.297,0.469c-0.178,0.086-0.395,0.064-0.549-0.061L4.664,13.136c-0.122-0.1-0.194-0.251-0.194-0.41
			s0.072-0.31,0.194-0.41L20.136,0.113c0.154-0.126,0.371-0.148,0.549-0.061C20.866,0.139,20.982,0.322,20.982,0.521z" />
                        </g>
                        <g id="Capa_1_58_">
                        </g>
                    </g>
                </svg> -->
            </use>
            <span v-if="count !== 1">
                Action
            </span>
            <use v-if="count < 2" class="svg">
                <svg width="22" height="17" viewBox="0 0 22 17" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 8.5H20.5M20.5 8.5L13.5 15.5M20.5 8.5L13.5 1.5" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </use>





        </slot>
    </button>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap');

.disableHover {
    pointer-events: none;
}


.svg {
    display: flex;
    align-self: center;
}

.colorBlue {
    background: #FFFFFF;
    border-color: #C75100;
    color: #C75100;
    fill: #C75100;
    stroke: #C75100;
}

.colorRed {
    background: #FFFFFF;
    border-color: #CC3123;
    color: #CC3123;
    fill: #CC3123;
    stroke: #CC3123;

}

.colorOrange {
    background: #FFFFFF;
    border-color: #C75100;
    color: #C75100;
    fill: #C75100;
    stroke: #C75100;

}

.colorGreen {
    background: #FFFFFF;
    border-color: #008700;
    color: #008700;
    fill: #008700;
    stroke: #008700;

}


.leftSecondaryiconbutton {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6px 12px;
    gap: 4px;
    background: #FFFFFF;
    border-radius: 8px;
    border-style: solid;

    border-width: 1px;

    width: 130px;
    height: 40px;


    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
}

.leftSecondaryiconbutton:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

}

.rightSecondaryiconbutton {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6px 12px;
    gap: 4px;

    border-radius: 8px;
    border-style: solid;

    border-width: 1px;

    width: 130px;
    height: 40px;


    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
}

.rightSecondaryiconbutton:hover {
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
    border-style: solid;
    border-width: 1px;
    width: 98px;
    height: 40px;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;

    border-width: 1px;
}

.actionbutton:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

}

.iconbutton {
    color: black;
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
    border-style: solid;
    border-width: 1px;

}

.iconbutton:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
</style>
