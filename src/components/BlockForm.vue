<template>
  <base-card>
    <form @submit.prevent="submitForm">
      <div
        class="form-control"
        v-for="block in blocksData.blocks"
        :key="block.id"
      >
        <div v-if="block.type == 'text'" class="block">
          <label>{{ block.token }}</label>
          <input
            :type="block.type"
            :placeholder="block.props.title"
            v-model="block.props.placeholder"
            :required="block.required"
          />
          <p style="color: red" v-if="!formIsValid && !userName.isValid">
            Please enter Name
          </p>
        </div>
        <div v-if="block.type == 'checkbox'" class="block">
          <label>{{ block.token }}</label>
          {{ block.props.title }}
          <input :type="block.type" :checked="block.props.default" />
        </div>
        <div class="block" v-if="block.type == 'date'">
          <label>{{ block.token }}</label>
          <input
            :type="block.type"
            :placeholder="block.props.title"
            v-if="block.type == 'date'"
            v-model="block.props.placeholder"
          />
          <p style="color: red" v-if="!formIsValid && !dateOfBirth.isValid">
            Please enter valid Date
          </p>
        </div>
      </div>
      <p v-if="!formIsValid">
        Please fix the above errors and submit the form again !!
      </p>
      <button type="submit">Submit</button>
    </form></base-card
  >
</template>
<script>
import BlocksData from "@/assets/blocks.js";
export default {
  data() {
    return {
      formIsValid: true,
      blocksData: BlocksData,
      userName: {
        isValid: true,
      },
      dateOfBirth: {
        isValid: true,
      },
    };
  },
  methods: {
    // this method is used to validate the form that user do not leave name field empty and do not enter invalid date
    validateForm() {
      let dateRegex = /(\d{4})-(\d{2})-(\d{2})/;
      for (let block of this.blocksData.blocks) {
        if (block.type == "text" && block.props.placeholder == "") {
          this.userName.isValid = false;
          this.formIsValid = false;
        } else if (
          block.type == "date" &&
          (block.props.placeholder == "" ||
            dateRegex.match(block.props.placeholder))
        ) {
          this.dateOfBirth.isValid = false;
          this.formIsValid = false;
        }
      }
    },
    // this method will submit the form only after form is validated successfuly
    submitForm() {
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
