<template>
  <nav class="h-16 bg-white flex flex-row justify-between items-center p-6">
    <img src="/images/icon-menu.svg" alt="menu icon" class="h-5 mr-5" />
    <RouterLink to="/" class="mr-auto">
      <img src="/images/logo.svg" alt="menu icon" class="mr-auto" />
    </RouterLink>
    <RouterLink to="/cart" class="h-5 mr-5">
      <img src="/images/icon-cart.svg" alt="cart icon" />
    </RouterLink>
    <RouterLink to="/profile">
      <img src="/images/image-avatar.png" class="h-5" alt="profile icon" />
    </RouterLink>
  </nav>
</template>
