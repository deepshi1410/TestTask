<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !userName.isValid }">
      <label for="userName">Name</label>
      <input
        type="text"
        id="userName"
        v-model.trim="userName.value"
        @blur="clearValidity('userName')"
      />
      <p v-if="!userName.isValid">Name cannot be empty</p>
    </div>
    <div class="form-control" :class="{ invalid: !areas.isValid }">
      <h3>Is Person Minor</h3>
      <div>
        <input type="checkbox" id="yes" value="yes" v-model="isMinor.value" />
        <label for="yes" :class="{ invalid: !isMinor.isValid }">Yes</label>
      </div>
      <div>
        <input type="checkbox" id="no" value="no" v-model="isMinor.value" />
        <label for="no" :class="{ invalid: !isMinor.isValid }">No</label>
      </div>
      <p v-if="!isMinor.isValid">Atleast one option should be selected</p>
    </div>
    <div class="form-control" :class="{ invalid: !dateOfBirth.isValid }">
      <h3>Enter Date of Birth</h3>
      <div><input type="date" v-model="dateOfBirth.value" /></div>
    </div>
    <p v-if="!formIsValid">
      Please fix the above errors and submit the form again !!
    </p>
    <button>Submit</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      formIsValid: true,
      userName: {
        isValid: true,
        value: "",
      },
      isMinor: {
        isValid: true,
        value: "no",
      },
      dateOfBirth: {
        isValid: true,
        value: "",
      },
    };
  },
  methods: {
    // to clear the red colour when user enters in input field and input field's focus is blurred
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      if (this.userName.value === "") {
        this.userName.isValid = false;
        this.formIsValid = false;
      }
      if (this.isMinor.value == "") {
        this.isMinor.isValid = false;
        this.formIsValid = false;
      }
      if (this.dateOfBirth.value == "") {
        this.dateOfBirth.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();
      if (!this.formIsValid) return;
      const block = {
        userName: this.userName.value,
        isMinor: this.isMinor.value,
        dateOfBirth: this.dateOfBirth.value,
      };
      this.$store.commit("addBlocks", block);
    },
  },
};
</script>
<style scoped>
.form-control {
  margin: 0.5rem 0;
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
