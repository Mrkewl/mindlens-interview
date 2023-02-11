<script setup>
import "jazsley-button/dist/style.css";
import "jazsley-notification/dist/style.css"
</script>

<script>
export default
  {
    data() {
      return {
        color: 0,
        variations: 0,
        disable: false,
      }
    },
    methods: {
      toggle() {
        if (this.color >= 3) {
          this.color = 0;
        } else {
          this.color++
        }

      },
      variatedialog() {
        if (this.variations >= 3) {
          this.variations = 0;
        } else {
          this.variations++
        }

      },
      toggledisable() {
        if (this.disable === false) {

          this.disable = true;
          console.log(this.disable)
        } else {
          this.disable = false
          console.log(this.disable)
        }


      },
    }

  }
</script>


<template>
  <div class="col">
    <notification v-bind:color="this.color" v-bind:variations="this.variations">
      <secondaryIcon v-bind:color="this.color" v-bind:disable="this.disable" />
      <primaryIcon v-bind:color="this.color" />
    </notification>
    <div class="row">
      <h1>Click "hire" to change color</h1>

      <button @click="toggle" class="custom-btn btn-12"><span>Me</span><span>Hire</span></button>
      <img class="photo" src="./assets/funny.jpeg" alt="">
      <button @click="variatedialog" class="custom-btn btn-12"><span>Hire</span><span>Me</span></button>
      <h1>Click "me" to change type</h1>


    </div>
  </div>
  <div class="center">
    <h1>Click "disable" to disable secondaryIcon</h1>
    <button @click="toggledisable" class="custom-btn btn-12"><span>button
      </span><span>Disable</span></button>
  </div>
  <!-- <div class="space"></div> -->

</template>


<style scoped>
.center {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
}


.btn-12 {
  background-color: transparent;
  position: relative;
  right: 20px;
  bottom: 20px;
  border: none;
  box-shadow: none;
  width: 130px;
  height: 40px;
  line-height: 42px;
  -webkit-perspective: 230px;
  perspective: 230px;
}

.btn-12 span {
  background: rgb(0, 172, 238);
  background: linear-gradient(0deg, rgba(0, 172, 238, 1) 0%, rgba(2, 126, 251, 1) 100%);
  display: block;
  position: absolute;
  width: 130px;
  height: 40px;
  box-shadow:
    inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
    7px 7px 20px 0px rgba(0, 0, 0, .1),
    4px 4px 5px 0px rgba(0, 0, 0, .1);
  border-radius: 5px;
  margin: 0;
  text-align: center;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all .3s;
  transition: all .3s;
}

.btn-12 span:nth-child(1) {
  box-shadow:
    -7px -7px 20px 0px #fff9,
    -4px -4px 5px 0px #fff9,
    7px 7px 20px 0px #0002,
    4px 4px 5px 0px #0001;
  -webkit-transform: rotateX(90deg);
  -moz-transform: rotateX(90deg);
  transform: rotateX(90deg);
  -webkit-transform-origin: 50% 50% -20px;
  -moz-transform-origin: 50% 50% -20px;
  transform-origin: 50% 50% -20px;
}

.btn-12 span:nth-child(2) {
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);
  -webkit-transform-origin: 50% 50% -20px;
  -moz-transform-origin: 50% 50% -20px;
  transform-origin: 50% 50% -20px;
}

.btn-12:hover span:nth-child(1) {
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
    7px 7px 20px 0px rgba(0, 0, 0, .1),
    4px 4px 5px 0px rgba(0, 0, 0, .1);
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);
}

.btn-12:hover span:nth-child(2) {
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
    7px 7px 20px 0px rgba(0, 0, 0, .1),
    4px 4px 5px 0px rgba(0, 0, 0, .1);
  color: transparent;
  -webkit-transform: rotateX(-90deg);
  -moz-transform: rotateX(-90deg);
  transform: rotateX(-90deg);
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
  gap: 20px;
  align-items: center;
  justify-content: space-evenly;


}

.photo {
  display: inline-block;
  width: 200px;
  border-radius: 8px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

}

@media (min-width: 485px) {


  .col {
    display: flex;
    flex-grow: 1;
    flex-direction: column;

  }


  .button-row {
    display: flex;
    flex: 1;
    flex-direction: row;
    gap: 30px;
  }

  .space {
    margin-top: 20px;
  }

  .green {
    background-color: green;
    width: 200px;
    padding: 10px;
    color: white;
  }
}



@media (max-width: 484px) {
  .row {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 16px;
  }


}
</style>
