<template>
  <!-- トークン取得失敗時 -->
  <div id="error">
    <div class="pt-5">
      <font-awesome-icon
        class="text-danger fa-5x pb-2 animate__animated animate__wobble"
        icon="exclamation-circle"
      />
      <h1>Failed to Retrieve your Token...</h1>
      <p>Check whether your email or password is correct.</p>
      <p>
        <router-link to="/reload">Go back and Try Again</router-link>
      </p>
    </div>
  </div>
</template>
