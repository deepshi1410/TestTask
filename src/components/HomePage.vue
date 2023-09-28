<template>
  <div>
    <ul>
      <li>
        <router-link to="/questionA">First Question</router-link>
      </li>
      <li>
        <router-link to="/questionB">Second Question</router-link>
      </li>
      <li>
        <router-link to="/questionC">Third Question</router-link>
      </li>
    </ul>
  </div>
</template>
<style>
ul {
  display: flex;
  gap: 10px;
}
li {
  text-decoration: underline;
}
</style>
