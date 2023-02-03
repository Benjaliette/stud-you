<template>
  <base-dialog :show="show">
    <form>
      <div class="dialog__form-input">
        <h3>What did you<br /><span class="blue">think</span> about it ?</h3>
        <textarea v-model="review" id="review" cols="30" rows="10"></textarea>
      </div>
      <div class="dialog__form-input">
        <h3>Rate <span class="blue">it</span> ➡ {{ rating }}</h3>
        <input
          type="range"
          v-model="rating"
          min="0"
          max="10"
          step="1"
          class="slider"
          @mousedown="displayValue"
        />
        <div class="slider__markers">
          <span>0</span>
          <span>10</span>
        </div>
      </div>
      <div class="dialog__form-action">
        <base-button
          :link="false"
          :type="{ color: 'blue' }"
          @click="submitRating"
        >
          Submit
        </base-button>
        <base-button
          :link="false"
          :type="{ color: 'white' }"
          @click="closeDialog"
        >
          Cancel
        </base-button>
      </div>
    </form>
  </base-dialog>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const router = useRouter();

const emits = defineEmits(["close"]);
const props = defineProps(["movie", "show"]);
const store = useStore();

const review = ref("");
const rating = ref(0);

const closeDialog = () => {
  emits("close");
};

const submitRating = async () => {
  const rate = {
    review: review.value,
    rating: rating.value,
  };
  await store.dispatch("users/rateMovie", {
    rate: rate,
    movie: props.movie,
  });
  await closeDialog();
  await router.replace("/watchlist");
};

const displayValue = () => {
  // console.log(event);
};
</script>

<style scoped>
h3 {
  color: white;
}

.dialog__form-input {
  position: relative;
}

.dialog__form-input textarea {
  width: 80%;
  border-radius: 10px;
  background-color: var(--light-grey);
  padding: 1rem;
  font-family: "Rubik", Helvetica, Arial sans-serif;
}

.dialog__form-input textarea:focus {
  outline: none;
  border: none;
  box-shadow: none;
}

.slider {
  -webkit-appearance: none; /* Override default CSS styles */
  appearance: none;
  width: 80%; /* Full-width */
  height: 16px; /* Specified height */
  background-color: var(--light-grey); /* Grey background */
  outline: none; /* Remove outline */
  -webkit-transition: 0.2s; /* 0.2 seconds transition on hover */
  transition: opacity 0.2s;
  border-radius: 20px;
  position: relative;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  background: var(--blue); /* Green background */
  border-radius: 50%;
  cursor: grab; /* Cursor on hover */
}

.slider::-webkit-slider-thumb:active {
  cursor: grabbing;
}

.slider::-moz-range-thumb {
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  background: #04aa6d; /* Green background */
  cursor: grab; /* Cursor on hover */
}

.slider__markers {
  position: absolute;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--light-grey);
  font-weight: bold;
}

.dialog__form-action {
  margin-top: 3rem;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
