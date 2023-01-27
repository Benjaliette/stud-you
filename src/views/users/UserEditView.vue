<template>
  <h1>User profile</h1>
  <form>
    <section class="user__section">
      <div class="user__form-input">
        <base-avatar
          :imageUrl="user.profilePicture"
          online
          for="profile"
        ></base-avatar>
      </div>
    </section>
    <section class="user__section">
      <div class="user__form-input" :class="{ error: errors.firstName }">
        <h2>First name:</h2>
        <input type="text" v-model="user.firstName" />
        <p v-if="errors.firstName">You must have a first name</p>
      </div>
      <div class="user__form-input" :class="{ error: errors.lastName }">
        <h2>Last name:</h2>
        <input type="text" v-model="user.lastName" />
        <p v-if="errors.lastName">You must have a last name</p>
      </div>
    </section>
    <section class="user__section">
      <div class="user__form-input" :class="{ error: errors.username }">
        <h2>Username:</h2>
        <input type="text" v-model="user.username" />
        <p v-if="errors.username">You must have a username</p>
      </div>
      <div class="user__form-input" :class="{ error: errors.email }">
        <h2>Email:</h2>
        <input type="email" v-model="user.email" />
        <p v-if="errors.email">Please enter a valid mail</p>
      </div>
    </section>
    <section class="user__section user__last-section">
      <div class="user__form-input" :class="{ error: errors.description }">
        <h2>Description:</h2>
        <textarea
          v-model="user.description"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <p v-if="errors.description">You must enter a description</p>
      </div>
    </section>
    <div class="user__form-action">
      <base-button
        :type="{ color: 'blue', size: '' }"
        :link="false"
        @click="submitForm"
      >
        Edit
      </base-button>
    </div>
  </form>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, reactive } from "vue";

const store = useStore();
const errors = reactive({
  firstName: false,
  lastName: false,
  userame: false,
  email: false,
  description: false,
});

const user = computed(() => {
  return store.getters["users/userLoggedIn"];
});

const submitForm = (event) => {
  event.preventDefault();
  console.log(user.value.firstName);
  if (user.value.firstName === "") {
    errors.firstName = true;
  }
  if (user.value.lastName === "") {
    errors.lastName = true;
  }
  if (user.value.username === "") {
    errors.username = true;
  }
  if (user.value.email === "") {
    errors.email = true;
  }
  if (user.value.description === "") {
    errors.description = true;
  }
};
</script>

<style scoped>
.user__section {
  width: 90%;
  display: flex;
  justify-content: space-between;
}

.user__last-section {
  width: 90%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

.user__form-input {
  flex-grow: 1;
  margin: 2rem 0rem;
}

.user__form-input input,
.user__form-input textarea {
  background: none;
  border: 1px solid var(--light-grey);
  border-radius: 10px;
  color: white;
  font-size: 16px;
}

.user__form-input input:focus,
.user__form-input textarea:focus {
  outline: var(--light-grey) solid 1px;
}

.user__form-input input {
  width: 80%;
  height: 2rem;
  padding: 0rem 1rem;
}

.user__form-input textarea {
  width: 90%;
  font-family: "Rubik", Helvetica, Arial sans-serif;
  padding: 2rem 1rem;
}

.user__form-input h2 {
  font-size: 20px;
  color: var(--blue);
}

.user__form-input.error input,
.user__form-input.error textarea {
  border: 1px solid var(--red);
}

.user__form-input.error p {
  color: var(--red);
  font-size: 12px;
  font-style: italic;
  position: absolute;
}

.user__form-action {
  margin-top: 1rem;
}
</style>
