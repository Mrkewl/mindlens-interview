<script>
export default
    {
        name: 'color',
        name: 'variations',
        props: ['color', 'variations'],

        data() {
            return {
                close: false,
            }
        },
        methods: {
            closeButton() {
                this.close = true;
            },
        }

    }

</script>


<template>






    <div :class="{ titleOnly: this.variations === 2, contentOnly: this.variations === 3, notification: this.variations === 1 || this.variations === 0, bluenotification: this.color === 0, rednotification: this.color === 1, orangenotification: this.color === 2, greennotification: this.color === 3 }"
        v-if="close === false">
        <div class="icon">
            <!-- This is for the blue icon -->
            <svg v-if="this.color === 0" width="28" height="28" viewBox="0 0 28 28" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M14 27.3333C21.3638 27.3333 27.3334 21.3638 27.3334 14C27.3334 6.6362 21.3638 0.666664 14 0.666664C6.63622 0.666664 0.666687 6.6362 0.666687 14C0.666687 21.3638 6.63622 27.3333 14 27.3333ZM15.3334 8.66667C15.3334 7.93028 14.7364 7.33333 14 7.33333C13.2636 7.33333 12.6667 7.93028 12.6667 8.66667C12.6667 9.40304 13.2636 10 14 10C14.7364 10 15.3334 9.40304 15.3334 8.66667ZM14 20.6667C14.7364 20.6667 15.3334 20.0697 15.3334 19.3333V12.6667C15.3334 11.9303 14.7364 11.3333 14 11.3333C13.2636 11.3333 12.6667 11.9303 12.6667 12.6667V19.3333C12.6667 20.0697 13.2636 20.6667 14 20.6667Z"
                    fill="#2C75DD" />
            </svg>

            <!-- This is for the red icon -->

            <svg v-if="this.color === 1" width="28" height="28" viewBox="0 0 28 28" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M14 27.3333C21.3638 27.3333 27.3334 21.3638 27.3334 14C27.3334 6.63621 21.3638 0.666672 14 0.666672C6.63622 0.666672 0.666687 6.63621 0.666687 14C0.666687 21.3638 6.63622 27.3333 14 27.3333ZM14 7.33334C14.7364 7.33334 15.3334 7.93029 15.3334 8.66667V15.3333C15.3334 16.0697 14.7364 16.6667 14 16.6667C13.2636 16.6667 12.6667 16.0697 12.6667 15.3333V8.66667C12.6667 7.93029 13.2636 7.33334 14 7.33334ZM15.3334 19.3333C15.3334 20.0697 14.7364 20.6667 14 20.6667C13.2636 20.6667 12.6667 20.0697 12.6667 19.3333C12.6667 18.597 13.2636 18 14 18C14.7364 18 15.3334 18.597 15.3334 19.3333Z"
                    fill="#CC3123" />
            </svg>

            <!-- This is for the orange icon -->
            <svg v-if="this.color === 2" width="28" height="28" viewBox="0 0 28 25" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M12.2346 1.35036L0.385065 22.0048C-0.379868 23.3381 0.582681 25 2.11985 25H25.8724C27.4113 25 28.3736 23.3347 27.6052 22.0014L15.7022 1.34698C14.9319 0.0103203 13.0023 0.0121994 12.2346 1.35036ZM14 7.66667C14.7364 7.66667 15.3333 8.26363 15.3333 9.00001V15.6667C15.3333 16.4031 14.7364 17 14 17C13.2636 17 12.6667 16.4031 12.6667 15.6667V9.00001C12.6667 8.26363 13.2636 7.66667 14 7.66667ZM15.3333 19.6667C15.3333 20.4031 14.7364 21 14 21C13.2636 21 12.6667 20.4031 12.6667 19.6667C12.6667 18.9303 13.2636 18.3333 14 18.3333C14.7364 18.3333 15.3333 18.9303 15.3333 19.6667Z"
                    fill="#DC5A00" />
            </svg>

            <!-- This is for the green icon -->
            <svg v-if="this.color === 3" width="28" height="28" viewBox="0 0 28 28" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M0.666687 14C0.666687 21.3638 6.63622 27.3334 14 27.3334C21.3638 27.3334 27.3334 21.3638 27.3334 14C27.3334 6.63622 21.3638 0.666687 14 0.666687C6.63622 0.666687 0.666687 6.63622 0.666687 14ZM20.1016 10.6402C20.4551 10.2159 20.3978 9.58536 19.9735 9.2318C19.5493 8.87823 18.9187 8.93556 18.5651 9.35984L12.5995 16.5186L9.37379 13.2929C8.98327 12.9024 8.3501 12.9024 7.95958 13.2929C7.56906 13.6834 7.56906 14.3166 7.95958 14.7071L11.9596 18.7071C12.1582 18.9058 12.4313 19.0117 12.712 18.999C12.9927 18.9863 13.255 18.856 13.4349 18.6402L20.1016 10.6402Z"
                    fill="#008700" />
            </svg>

        </div>
        <div class="column">
            <h2
                :class="{ centerTitle: this.variations > 1, header: this.variations !== 3, headerunbold: this.variations === 3 }">
                A short descriptive header
            </h2>
            <h4 class="paragraph" v-if="this.variations < 2">This is a paragraph of information with additional
                supporting details or links to
                help the user understand what they should do
            </h4>
            <div class="buttons-column" v-if="this.variations === 0">
                <slot>
                </slot>
            </div>

        </div>
        <button class="closeButton" @click="closeButton">X</button>
    </div>



</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400&display=swap');



* {
    margin: 0;
    padding: 0;
}

.closeButton {
    margin-top: 4px;
    display: flex;

    background-color: transparent;
    border-color: transparent;
    font-size: 16px;
    width: 16px;
    height: 16px;
    margin-left: auto;
    position: relative;
    bottom: 5px;
    color: #566271;
}


.bluenotification {
    background-color: #F4FAFF;
    color: black;
    border-color: #2C75DD;

}

.rednotification {
    background-color: #FEF5F5;
    color: black;
    border-color: #CC3123;
}

.orangenotification {
    background: #FDF3E1;
    color: black;
    border-color: #DC5A00;

}

.greennotification {
    background: #F8FFF2;
    color: black;
    border-color: #008700;

}

.centerTitle {
    position: relative;
    bottom: 2px;
}


@media (min-width: 485px) {


    .icon {
        margin-right: 24px;
    }

    .column {
        display: flex;
        flex-direction: column;
        gap: 24px;

    }

    .header {
        font-weight: 600;
        font-size: 16px;
    }

    .headerunbold {
        font-weight: 400;
        font-size: 16px;
    }

    .paragraph {


        font-weight: 400;
        font-size: 16px;
    }

    .notification {
        display: flex;
        flex-direction: row;
        font-family: 'Open Sans', sans-serif;
        border-radius: 4px;
        border-style: solid;
        border-width: 1px;
        margin: 20px;
        padding: 24px 26.7px 24px 26.7px;
    }

    .contentOnly {
        display: flex;
        font-family: 'Open Sans', sans-serif;
        border-radius: 4px;
        border-style: solid;
        align-items: center;
        border-width: 1px;
        margin: 20px;
        padding: 12px 14px 12px 14px;

    }

    .titleOnly {
        display: flex;
        font-family: 'Open Sans', sans-serif;
        justify-content: center;
        border-radius: 4px;
        border-style: solid;
        align-items: center;
        border-width: 1px;
        margin: 20px;
        padding: 28px 26px 28px 26px;

    }



    .buttons-column {
        display: flex;
        flex-direction: row;
        gap: 16px;

    }



}





@media (max-width: 484px) {



    .icon {
        position: relative;
        margin-right: 4px;
    }

    .buttons-column {
        margin-top: 8px;
        display: flex;
        flex-direction: column;
        gap: 16px;

    }

    .column {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }



    .header {
        font-weight: 600;
        font-size: 16px;
    }

    .headerunbold {
        font-weight: 400;
        font-size: 16px;
    }

    .paragraph {
        display: flex;
        font-size: 16px;
        font-weight: 400;
    }

    /* For mobile phones: */
    .notification {
        display: flex;
        min-width: 200px;
        gap: 16px;

        flex-direction: row;
        justify-content: baseline;
        padding: 10px;
        align-items: flex-start;
        font-family: 'Open Sans', sans-serif;
        border-radius: 4px;
        border-style: solid;
        border-width: 1px;
        margin: 10px;
        padding: 24px 26.7px 24px 26.7px;
    }

    .contentOnly {
        min-width: 200px;
        display: flex;
        gap: 16px;
        flex-direction: row;
        justify-content: baseline;
        align-items: center;
        font-family: 'Open Sans', sans-serif;
        border-radius: 4px;
        border-style: solid;
        border-width: 1px;
        margin: 20px;
        padding: 12px 14px 12px 14px;

    }

    .titleOnly {
        min-width: 200px;
        display: flex;
        gap: 16px;
        flex-direction: row;
        align-items: center;
        font-family: 'Open Sans', sans-serif;
        border-radius: 4px;
        border-style: solid;
        border-width: 1px;
        margin: 20px;
        padding: 28px 26px 28px 26px;

    }

    .closeButton {

        display: flex;
        background-color: transparent;
        border-color: transparent;
        font-size: 16px;
        width: 16px;
        height: 16px;
        margin-left: auto;
        position: relative;
        bottom: 5px;
        color: #566271;
    }

}
</style>
