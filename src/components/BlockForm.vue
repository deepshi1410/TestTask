<template>
  <base-card>
    <form @submit.prevent="submitForm">
      <div>
        <div class="form-control" v-for="block in blocks" :key="block.id">
          <div v-if="block.type == 'text'" class="block">
            <label>{{ block.token }}</label>
            <input
              :type="block.type"
              :placeholder="block.props.title"
              :value="block.placeholder"
              v-model="userName"
            />
          </div>
          <div v-if="block.type == 'checkbox'" class="block">
            <label>{{ block.token }}</label>
            <input
              :type="block.type"
              :placeholder="block.props.title"
              v-model="isMinor"
            />
          </div>
          <div class="block" v-if="block.type == 'date'">
            <label>{{ block.token }}</label>
            <input
              :type="block.type"
              :placeholder="block.props.title"
              :value="block.placeholder"
              v-if="block.type == 'date'"
              v-model="dateOfBirth"
            />
          </div>
        </div>
        {{ formIsValid }}
        <p v-if="!formIsValid">
          Please fix the above errors and submit the form again !!
        </p>
      </div>
      <button type="submit">Submit</button>
    </form></base-card
  >
</template>
<script>
import Blocks from "@/assets/blocks.js";
export default {
  data() {
    return {
      formIsValid: true,
      blocks: Blocks,
      userName: {
        isValid: true,
      },
      isMinor: {
        isValid: true,
      },
      dateOfBirth: {
        isValid: true,
      },
    };
  },
  methods: {
    // to clear the red colour when user enters in input field and input field's focus is blurred
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      console.log(
        "validate called",
        "name",
        this.userName,
        "date",
        this.dateOfBirth
      );
      if (this.userName === "") {
        this.userName.isValid = false;
        this.formIsValid = false;
      }
      if (this.isMinor == "") {
        this.isMinor.isValid = false;
        this.formIsValid = false;
      }
      if (this.dateOfBirth == "") {
        this.dateOfBirth.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      console.log("submit called");
      this.validateForm();
      if (!this.formIsValid) return;
    },
  },
};
</script>
<style scoped>
form {
  border: 1px solid bottom;
  border-radius: 10px;
}
.form-control {
  margin: 0.5rem 0;
}
.block {
  width: 80%;
}
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #2ca00f;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #2ca00f solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
@/assets/blocks.js
